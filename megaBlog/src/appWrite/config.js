import { Client, ID, TablesDB, Storage, Query } from "appwrite";
import conf from "../conf/env";

export class StorageService {
  client = new Client();
  tableDB;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);

    this.tableDB = new TablesDB(this.client);
    this.storage = new Storage(this.client);
  }

  // Create DB Row
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      const result = await this.tableDB.createRow({
        databaseId: conf.appWriteDatabaseId,
        tableId: conf.appWriteCollectionId,
        rowId: ID.unique(),
        data: {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        },
      });

      return result;
    } catch (error) {
      console.log("Appwrite Service :: createPost :: ", error);
    }
  }

  // Update DB Row
  async updatePost(rowId, { title, slug, content, featuredImage, status }) {
    try {
      return await this.tableDB.updateRow({
        databaseId: conf.appWriteDatabaseId,
        tableId: conf.appWriteCollectionId,
        rowId,
        data: {
          title,
          slug,
          content,
          featuredImage,
          status,
        },
      });
    } catch (error) {
      console.log("Appwrite Service :: updatePost :: ", error);
    }
  }

  // Delete DB Row
  async deletePost(rowId) {
    try {
      await this.tableDB.deleteRow({
        databaseId: conf.appWriteDatabaseId,
        tableId: conf.appWriteCollectionId,
        rowId,
      });

      return true;
    } catch (error) {
      console.log("Appwrite Service :: deletePost :: ", error);
      return false;
    }
  }

  // Get All Posts
  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      const allPosts = await this.tableDB.listRows({
        databaseId: conf.appWriteDatabaseId,
        tableId: conf.appWriteCollectionId,
        queries,
        total: true,
      });

      return allPosts || [];
    } catch (error) {
      console.log("Appwrite Service :: getAllPosts :: ", error);
      return [];
    }
  }

  // Get ById Post
  async getByIdPosts(rowId) {
    try {
      const post = await this.tableDB.listRows({
        databaseId: conf.appWriteDatabaseId,
        tableId: conf.appWriteCollectionId,
        rowId,
      });

      return post;
    } catch (error) {
      console.log("Appwrite Service :: getByIdPost :: ", error);
      return false;
    }
  }

  // File Upload Service
  async uploadFile(file) {
    try {
      return await this.storage.createFile({
        bucketId: conf.appWriteBucketId,
        fileId: ID.unique(),
        file,
      });
    } catch (error) {
      console.log("Appwrite Service :: uploadFile :: ", error);
      return false;
    }
  }

  // File Delete Service
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile({
        bucketId: conf.appWriteBucketId,
        fileId,
      });

      return true;
    } catch (error) {
      console.log("Appwrite Service :: deleteFile :: ", error);
      return false;
    }
  }

  // Get File Preview Service
  getFilePreview(fileId) {
    return this.storage.getFilePreview({
      bucketId: conf.appWriteBucketId,
      fileId,
    });
  }
}

const storageService = new StorageService();

export default storageService;

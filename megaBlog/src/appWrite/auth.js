import conf from "../conf/env";
import { Account, Client, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  // Create Account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );

      if (userAccount) {
        // Call Another Method to Login Directly
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // User Login Service
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  // Get Current User Service
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite Service :: getCurrentUser :: ", error);
    }

    return null;
  }

  // Logout Service
  async logout() {
    try {
      //   await this.account.deleteSession("current");
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Service :: deleteSession :: ", error);
    }
  }
}

const authServices = new AuthService();

export default authServices;

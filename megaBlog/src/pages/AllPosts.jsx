import { Container, PostCard } from "../components";
import appWriteService from "../appWrite/config";
import { useEffect, useState } from "react";

export default function AllPosts() {
  const [loader, setLoader] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appWriteService
      .getAllPosts([])
      .then((posts) => {
        if (posts) {
          setPosts(posts?.documents || []);
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return loader ? (
    <div>Loader...</div>
  ) : posts?.length === 0 ? (
    <div className="w-full py-8 mt-4 text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              No Posts Available Yet!
            </h1>
          </div>
        </div>
      </Container>
    </div>
  ) : (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts?.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard
                $id={post?.$id}
                title={post?.title}
                featuredImage={post?.featuredImage}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

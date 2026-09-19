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
          setPosts(posts.documents);
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return loader ? (
    <div>Loader...</div>
  ) : (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts?.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

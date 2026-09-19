import { Container, PostForm } from "../components";
import appWriteService from "../appWrite/config";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const [loader, setLoader] = useState(true);
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      appWriteService
        .getByIdPosts(id)
        .then((post) => {
          if (post) {
            setPost(post);
          }
        })
        .finally(() => {
          setLoader(false);
        });
    }
  }, [id, navigate]);

  return loader ? (
    <div>Loader...</div>
  ) : post ? (
    <div>No Post Details</div>
  ) : (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
}

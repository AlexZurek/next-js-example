import { useRouter } from "next/router";
import posts from "../../dummy-posts";
import { NextPage } from "next";

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Title: Post #{id}</h1>
      <p>This is some more text</p>
    </div>
  );
};

export default Post;

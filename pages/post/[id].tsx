import { useRouter } from "next/router";
import { NextPage } from "next";
import { makeRequest } from "../../src/fetcher";
import { PostType } from "../../src/types/PostType";
import CSS from "csstype";

const postStyle: CSS.Properties = {
  textAlign: "center",
  justifyContent: "center"
};

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = makeRequest<PostType>(`/api/post?pid=${id}`);

  if (error) {
    return <p>Problem loading post, please try again.</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  } else {
    return (
      <div style={postStyle}>
        <div style={{ padding: "0 20%" }}>
          <h1>{data.title}</h1>
          <img src={data.image} />
          <p>{data.body}</p>
        </div>
      </div>
    );
  }
};

export default Post;

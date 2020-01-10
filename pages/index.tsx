import { NextPage } from "next";
import { makeRequest } from "../src/fetcher";

const Index: NextPage = () => {
  const { data, error } = makeRequest("/api");

  const name = data?.name;
  let message = `Welcome to the home page, ${name}!`;

  if (!data) message = "Loading...";
  if (error)
    message = "It looks like we couldn't find your name, but welcome anyways!";

  return (
    <div>
      {name && <h1>Home</h1>}
      <p>{message}</p>
    </div>
  );
};

export default Index;

import { NextPage } from "next";
import { makeRequest } from "../src/fetcher";
import { IndexPageProps } from "../src/types/IndexPageProps";
import WelcomeMessage from "../components/WelcomeMessage";

const Index: NextPage = () => {
  let state: IndexPageProps = {
    name: "",
    message: ""
  };

  const { data, error } = makeRequest("/api");

  state.name = data?.name;
  state.message = `Welcome to the home page, ${state.name}!`;

  if (!data) state.message = "Loading...";
  if (error)
    state.message =
      "It looks like we couldn't find your name, but welcome anyways!";

  return <WelcomeMessage name={state.name} message={state.message} />;
};

export default Index;

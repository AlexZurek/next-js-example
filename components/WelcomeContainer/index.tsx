import { makeRequest } from "src/fetcher";
import { WelcomeMessage } from "components/WelcomeMessage";

export const WelcomeContainer = () => {
  const { data, error } = makeRequest("/api");

  const name = data?.name;
  let message = `Welcome to the home page, ${name}!`;

  if (!data) message = "Loading...";
  if (error)
    message = "It looks like we couldn't find your name, but welcome anyways!";

  return <WelcomeMessage name={name} message={message} />;
};

export default WelcomeContainer;

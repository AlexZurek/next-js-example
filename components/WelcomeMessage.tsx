import { IndexPageProps } from "../src/types/IndexPageProps";
import { FunctionComponent } from "react";

const WelcomeMessage: FunctionComponent<IndexPageProps> = ({
  name,
  message
}) => (
  <div>
    {name && <h1>Home</h1>}
    <p>{message}</p>
  </div>
);

export default WelcomeMessage;

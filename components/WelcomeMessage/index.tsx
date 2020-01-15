import { IndexPageProps } from "src/types/IndexPageProps";

export const WelcomeMessage = (props: IndexPageProps) => (
  <div>
    {props.name && <h1>Home</h1>}
    <p>{props.message}</p>
  </div>
);

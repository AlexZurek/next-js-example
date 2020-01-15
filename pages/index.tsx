import { NextPage } from "next";
import dynamic from "next/dynamic";

const DynamicWelcomeContainer = dynamic(
  () => import("components/WelcomeContainer"),
  { ssr: process.env.SSR_ENABLED === "true" }
);

const Index: NextPage = () => {
  return <DynamicWelcomeContainer />;
};

export default Index;

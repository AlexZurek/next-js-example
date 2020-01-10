import posts from "../../public/dummy-posts";

export default (req, res) => {
  res.status(200).json(posts);
};

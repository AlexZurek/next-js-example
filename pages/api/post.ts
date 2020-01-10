import posts from "../../public/dummy-posts";

export default (req, res) => {
  const { pid } = req.query;
  const post = posts.find(p => p.id.toString() === pid);

  res.status(200).json(post);
};

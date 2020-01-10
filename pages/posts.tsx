import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { NextPage } from "next";
import Link from "next/link";
import { makeRequest } from "../src/fetcher";
import { PostType } from "../src/types/PostType";

const Posts: NextPage = () => {
  const { data, error } = makeRequest<PostType[]>("/api/allPosts");
  let posts = data;

  if (!data) posts = [];
  if (error) {
    return (
      <div style={{ marginTop: 20, padding: 30 }}>
        <p>There was a problem loading the posts, please try again later.</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={3} justify="center">
        {posts.map(post => (
          <Grid item key={post.title}>
            <Card>
              <Link href="/post/[id]" as={`/post/${post.id}`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={post.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography component="p">{post.excerpt}</Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Link href="/post/[id]" as={`/post/${post.id}`}>
                  <Button size="small" color="secondary">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Posts;

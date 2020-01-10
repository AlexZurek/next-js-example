import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import { NextPage } from "next";
import Link from "next/link";

const NavBar: NextPage = () => (
  <List component="nav">
    <ListItem component="div">
      <Link href="/posts">
        <Button color="inherit">Posts</Button>
      </Link>

      <Link href="/about">
        <Button color="inherit">About Me</Button>
      </Link>

      <Link href="/contact">
        <Button color="inherit">Contact Us</Button>
      </Link>
    </ListItem>
  </List>
);

export default NavBar;

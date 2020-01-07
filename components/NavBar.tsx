import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import { NextPage } from "next";
import Link from "next/link";
import CSS from "csstype";

const linkStyle: CSS.Properties = {
  textDecoration: "none",
  color: "white"
};

const NavBar: NextPage = props => (
  <List component="nav">
    <ListItem component="div">
      <Link href="/">
        <Button color="inherit">Home</Button>
      </Link>

      <Link href="/posts">
        <Button color="inherit">Posts</Button>
      </Link>

      <Link href="/contact">
        <Button color="inherit">Contact Us</Button>
      </Link>
    </ListItem>
  </List>
);

export default NavBar;

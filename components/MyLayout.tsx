import { NextPage } from "next";
import { AppBar, Toolbar } from "@material-ui/core";
import TypoGraphy from "@material-ui/core/Typography";
import NavBar from "./NavBar";
import CSS from "csstype";
import Link from "next/link";

const containerStyle: CSS.Properties = {
  display: "flex",
  justifyContent: "center"
};

const linkStyle: CSS.Properties = {
  textDecoration: "none",
  color: "white"
};

const MyLayout: NextPage = props => (
  <div>
    <AppBar color="primary" position="static">
      <Toolbar>
        <Link href="/">
          <a style={linkStyle}>
            <TypoGraphy variant="h5" color="inherit">
              My Header
            </TypoGraphy>
          </a>
        </Link>
        <NavBar />
      </Toolbar>
    </AppBar>

    <div className="main-content" style={containerStyle}>
      {props.children}
    </div>
  </div>
);

export default MyLayout;

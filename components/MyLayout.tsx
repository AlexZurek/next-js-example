import { NextPage } from "next";
import { AppBar, Toolbar, BottomNavigation } from "@material-ui/core";
import NavBar from "./NavBar";
import CSS from "csstype";
import Link from "next/link";

const containerStyle: CSS.Properties = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  minHeight: "92vh"
};

const linkStyle: CSS.Properties = {
  textDecoration: "none",
  color: "white"
};

const logoStyle: CSS.Properties = {
  width: "175px"
};

const footerStyle: CSS.Properties = {
  backgroundColor: "#333333",
  color: "white",
  width: "100%",
  minHeight: "10vh",
  bottom: 0
};

const MyLayout: NextPage = props => (
  <div>
    <AppBar color="primary" position="static" className="logo">
      <Toolbar>
        <Link href="/">
          <a style={linkStyle}>
            <img src="../logo.png" style={logoStyle} />
          </a>
        </Link>
        <NavBar />
      </Toolbar>
    </AppBar>

    <div className="main-content" style={containerStyle}>
      {props.children}
    </div>

    <BottomNavigation color="primary" style={footerStyle}>
      <p>This is a footer that will eventually have more information in it.</p>
    </BottomNavigation>
  </div>
);

export default MyLayout;

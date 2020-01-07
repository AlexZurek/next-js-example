import { NextPage } from "next";
import { AppBar, Toolbar } from "@material-ui/core";
import TypoGraphy from "@material-ui/core/Typography";
import NavBar from "./NavBar";

const MyLayout: NextPage = props => (
  <div>
    <AppBar color="primary" position="static">
      <Toolbar>
        <TypoGraphy variant="h5" color="inherit">
          My Header
        </TypoGraphy>

        <NavBar />
      </Toolbar>
    </AppBar>

    <div className="main-content">{props.children}</div>
  </div>
);

export default MyLayout;

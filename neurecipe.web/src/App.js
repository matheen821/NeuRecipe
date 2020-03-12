import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "./components/layouts/header";
import Routes from "./routes";

const AppStyles = theme => ({
  root: {
    display: "flex"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default withStyles(AppStyles)(App);

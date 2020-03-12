import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import RecipesList from "./recipes/recipesList";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import * as API from "./recipeInfo/_api";

const useStyles = theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#3f51b5",
    backgroundColor: "hsla(0, 100%, 100%, 0.32)"
  }
});

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      isLoading: true
    };
  }
  componentDidMount() {
    API.getRecipes().then(res => {
      const recipes = res.data;
      this.setState({ recipes });
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { classes } = this.props;
    if (this.state.isLoading) {
      return (
        <Backdrop
          primary
          className={classes.backdrop}
          open={this.state.isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      );
    } else if (this.state.recipes.length > 0) {
      return <RecipesList recipes={this.state.recipes} />;
    } else {
      return (
        <Alert severity="error">
          <AlertTitle>Oops!</AlertTitle>
          No, Saved Recipes found...
        </Alert>
      );
    }
  }
}

export default withStyles(useStyles)(Saved);

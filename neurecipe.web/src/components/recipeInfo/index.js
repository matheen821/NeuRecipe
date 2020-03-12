import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import RecipeInfo from "./_components/recipeInfo";
import * as API from "./_api";

const useStyles = theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#3f51b5",
    backgroundColor: "hsla(0, 100%, 100%, 0.32)"
  }
});

class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      recipe: {}
    };
    this.getRecipeInfo = this.getRecipeInfo.bind(this);
    this.getRecipeInfo();
  }
  getRecipeInfo = () => {
    let recipeId = this.props.match.params.id;
    API.getRecipeInfo(recipeId).then(res => {
      const recipe = res.meals[0];
      this.setState({ recipe });
      this.setState({ isLoading: false });
    });
  };

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
    } else if (Object.keys(this.state.recipe).length != 0) {
      return <RecipeInfo recipe={this.state.recipe} />;
    } else {
      return (
        <Alert severity="error">
          <AlertTitle>Oops!</AlertTitle>
          No, Recipe info found...
        </Alert>
      );
    }
  }
}
export default withStyles(useStyles)(Recipe);

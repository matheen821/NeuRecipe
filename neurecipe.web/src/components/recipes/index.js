import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import RecipesList from "./recipesList";
import { getRecipes } from "../../store/recipesActions";

const useStyles = theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#3f51b5",
    backgroundColor: "hsla(0, 100%, 100%, 0.32)"
  }
});

class Recipes extends Component {
  componentDidMount() {
    let searchKey = "a";
    this.props.dispatch(getRecipes(searchKey));
  }

  render() {
    const { classes } = this.props;
    if (this.props.isLoading) {
      return (
        <Backdrop
          primary
          className={classes.backdrop}
          open={this.props.isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      );
    } else if (this.props.recipes) {
      return <RecipesList recipes={this.props.recipes} />;
    } else {
      return (
        <Alert severity="error">
          <AlertTitle>Oops!</AlertTitle>
          No, Recipes found...
        </Alert>
      );
    }
  }
}
const mapStateToProps = state => ({
  recipes: state.RecipesData.recipes,
  isLoading: state.RecipesData.isLoading,
  error: state.RecipesData.error
});

export default connect(mapStateToProps)(withStyles(useStyles)(Recipes));

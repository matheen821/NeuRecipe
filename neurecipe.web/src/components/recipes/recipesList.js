import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import RecipeCard from "./recipeCard";
class RecipesList extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        {this.props.recipes.map((recipe, index) => (
          <Grow in={true} key={recipe.idMeal}>
            <Grid item xs={12} sm={4}>
              <RecipeCard recipe={recipe} />
            </Grid>
          </Grow>
        ))}
      </Grid>
    );
  }
}
export default RecipesList;

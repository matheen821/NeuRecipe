import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/SaveRounded";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderSharp";
import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import * as API from "../_api";
const recipeStyles = theme => ({
  media: {
    height: 0,
    paddingTop: "40.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  displayLinebreak: {
    whiteSpace: "pre-line"
  }
});

class RecipeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      open: false
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.getFirstCharOfRecipe = this.getFirstCharOfRecipe.bind(this);
    this.getIngredients = this.getIngredients.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleExpandClick() {
    this.setState({ expanded: !this.expanded });
  }
  getFirstCharOfRecipe(name) {
    return name.charAt(0);
  }
  getIngredients(recipe) {
    var strIngredient = "";
    for (let key in recipe) {
      if (recipe.hasOwnProperty(key)) {
        var str = recipe[key];
        if (str && str != "") {
          if (key.includes("strIngredient")) {
            strIngredient = strIngredient ? strIngredient + ", " + str : str;
          }
        }
      }
    }
    return strIngredient;
  }
  saveRecipe(recipe) {
    API.saveRecipe(recipe).then(res => {
      this.handleClose();
    });
  }
  handleClose() {
    this.setState({ open: !this.state.open });
  }
  render() {
    const { classes, recipe } = this.props;
    return (
      <div>
        <Grow in={true}>
          <Card>
            <CardMedia
              className={classes.media}
              image={recipe.strMealThumb}
              title={recipe.strMeal}
              alt={recipe.strMeal}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="h2"
                color="primary"
              >
                {recipe.strMeal}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Category : <b> {recipe.strCategory}</b>, Area :{" "}
                <b>{recipe.strArea}</b>, Tags : <b>{recipe.strTags}</b>
              </Typography>
              <Typography variant="body2" component="p">
                <h2>Ingredients</h2>
                {this.getIngredients(recipe)}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.displayLinebreak}
              >
                <h2>Instructions</h2>
                {recipe.strInstructions}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="save"
                onClick={e => this.saveRecipe(recipe)}
              >
                <SaveIcon color="primary" />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon color="primary" />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                aria-label="show more"
              >
                <ShareIcon color="secondary" />
              </IconButton>
            </CardActions>
          </Card>
        </Grow>
        <Dialog
          open={this.state.open}
          TransitionComponent={this.stateTransition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Success!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Recipe has been saved successfully
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(recipeStyles)(RecipeInfo);

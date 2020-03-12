import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderSharp";
import DeleteIcon from "@material-ui/icons/DeleteRounded";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const recipesStyles = theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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
  avatar: {
    backgroundColor: red[500]
  },
  link: {
    textDecoration: "none"
  }
});

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.getFirstCharOfRecipe = this.getFirstCharOfRecipe.bind(this);
    this.getFewInstractions = this.getFewInstractions.bind(this);
  }
  handleExpandClick() {
    this.setState({ expanded: !this.expanded });
  }
  getFirstCharOfRecipe(name) {
    return name.charAt(0);
  }
  getFewInstractions(insts) {
    return insts.substring(0, 100) + "...";
  }
  render() {
    const { classes, recipe } = this.props;
    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {this.getFirstCharOfRecipe(recipe.strMeal)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Link to={`recipe/${recipe.idMeal}`} className={classes.link}>
              {recipe.strMeal}
            </Link>
          }
          subheader={recipe.strCategory + ", " + recipe.strArea}
        />

        <CardMedia
          className={classes.media}
          image={recipe.strMealThumb}
          title={recipe.strMeal}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.getFewInstractions(recipe.strInstructions)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon color="primary" />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            aria-label="show more"
          >
            <DeleteIcon color="secondary" />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(recipesStyles)(RecipeCard);

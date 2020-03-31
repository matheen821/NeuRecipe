import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import Menu from "../components/layouts/menu";
import About from "../components/about";
import Recipes from "../components/recipes/index";
import Movies from "../components/movies/index";
import Recipe from "../components/recipeInfo/index";
import Saved from "../components/saved";
import Favorites from "../components/favorites";
import Trash from "../components/trash";
import Contact from "../components/contact";
import Logout from "../components/logout";

const history = createBrowserHistory();

const ruotesStyles = theme => ({
  content: {
    width: "100%",
    marginTop: 70,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
});

class Routes extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router history={history}>
        <Menu />
        <main className={classes.content}>
          <Switch>
            <Route exact path="/" component={Recipes}></Route>
            <Route path="/home" component={Recipes}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/recipes" component={Recipes}></Route>
            <Route path="/Movies" component={Movies}></Route>
            <Route path="/recipe/:id" component={Recipe}></Route>
            <Route path="/saved" component={Saved}></Route>
            <Route path="/favorites" component={Favorites}></Route>
            <Route path="/trash" component={Trash}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/logout" component={Logout}></Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default withStyles(ruotesStyles)(Routes);

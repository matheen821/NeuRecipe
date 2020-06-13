import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SpeakerNotesOutlinedIcon from "@material-ui/icons/SpeakerNotesRounded";
import SaveSharpIcon from "@material-ui/icons/SaveRounded";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderRounded";
import DeleteSharpIcon from "@material-ui/icons/DeleteRounded";
import ContactMailSharpIcon from "@material-ui/icons/ContactMailRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

import logo from "../../assets/NeuRecipe.png";

const drawerWidth = 240;
const MenuStyles = (theme) => ({
  menuName: {
    fontSize: 15.5,
    color: "#3f51b5",
  },
  menuIcon: {
    width: 22,
    height: 22,
    color: "#3f51b5",
  },
  menuLink: {
    textDecoration: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    height: 160,
    width: 200,
  },
  logoImage: {
    height: 150,
    width: 180,
  },
  content: {
    marginTop: 70,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
});
class Menu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Slide
          in={true}
          direction="up"
          mountOnEnter
          unmountOnExit
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 300 } : {})}
        >
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            <div className={classes.toolbar}>
              <img className={classes.logoImage} src={logo} alt="New Recipe" />
            </div>
            <Divider />
            <List>
              {[
                { link: "/home", name: "Home", icon: HomeSharpIcon },
                { link: "/about", name: "About", icon: InfoOutlinedIcon },
              ].map((obj, index) => (
                <ListItem button key={obj.name}>
                  <ListItemIcon>
                    <obj.icon className={classes.menuIcon} />
                  </ListItemIcon>
                  <Link to={obj.link} className={classes.menuLink}>
                    <ListItemText
                      disableTypography
                      primary={obj.name}
                      className={classes.menuName}
                    />
                  </Link>
                  <ListItemText />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {[
                {
                  link: "/recipes",
                  name: "Recipes",
                  icon: SpeakerNotesOutlinedIcon,
                },
                { link: "/saved", name: "Saved", icon: SaveSharpIcon },
                {
                  link: "/favorites",
                  name: "Favorites",
                  icon: FavoriteBorderSharpIcon,
                },
                { link: "/trash", name: "Trash", icon: DeleteSharpIcon },
              ].map((obj, index) => (
                <ListItem button key={obj.name}>
                  <ListItemIcon>
                    <obj.icon className={classes.menuIcon} />
                  </ListItemIcon>
                  <Link to={obj.link} className={classes.menuLink}>
                    <ListItemText
                      disableTypography
                      primary={obj.name}
                      className={classes.menuName}
                    />
                  </Link>
                  <ListItemText />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {[
                {
                  link: "/contact",
                  name: "Contact",
                  icon: ContactMailSharpIcon,
                },
                {
                  link: "/logout",
                  name: "Logout",
                  icon: ExitToAppRoundedIcon,
                },
              ].map((obj, index) => (
                <ListItem button key={obj.name}>
                  <ListItemIcon>
                    <obj.icon className={classes.menuIcon} />
                  </ListItemIcon>
                  <Link to={obj.link} className={classes.menuLink}>
                    <ListItemText
                      disableTypography
                      primary={obj.name}
                      className={classes.menuName}
                    />
                  </Link>
                  <ListItemText />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Slide>
      </div>
    );
  }
}
Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(MenuStyles)(Menu);

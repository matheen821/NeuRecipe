import React, { Component } from "react";
import { connect } from "react-redux";
import { fade, withStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { getRecipes } from "../../store/recipesActions";

const drawerWidth = 240;
const useStyles = theme => ({
  grow: {
    flexGrow: 1
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 300,
      "&:focus": {
        width: 500
      }
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleMenuClose: false,
      handleMobileMenuClose: false,
      anchorEl: null,
      mobileMoreAnchorEl: null,
      isMenuOpen: null,
      isMobileMenuOpen: null,
      menuId: "primary-search-account-menu",
      mobileMenuId: "primary-search-account-menu-mobile"
    };

    this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
    this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleMobileMenuOpen = this.handleMobileMenuOpen.bind(this);
    this.setAnchorEl = this.setAnchorEl.bind(this);
    this.setMobileMoreAnchorEl = this.setMobileMoreAnchorEl.bind(this);
    this.searchRecipes = this.searchRecipes.bind(this);
  }
  handleProfileMenuOpen = event => {
    this.setAnchorEl(event.currentTarget);
  };

  handleMobileMenuClose = () => {
    this.setMobileMoreAnchorEl(null);
  };

  handleMenuClose = () => {
    this.setAnchorEl(null);
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setMobileMoreAnchorEl(event.currentTarget);
  };
  setAnchorEl = event => {
    this.setMobileMoreAnchorEl(event.currentTarget);
  };
  setMobileMoreAnchorEl = () => {};
  searchRecipes(event) {
    this.props.dispatch(getRecipes(event.target.value));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.grow}>
        <Grow in={true}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                Neu Recipe
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                  onKeyUp={this.searchRecipes.bind(this)}
                />
              </div>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton
                  aria-label="show 5 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={5} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={this.state.menuId}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={this.state.mobileMenuId}
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </Grow>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(withStyles(useStyles)(Header));

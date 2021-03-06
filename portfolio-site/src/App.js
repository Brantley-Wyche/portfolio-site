import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

//Material UI imports for the Navbar
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CodeIcon from '@material-ui/icons/Code';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';

//Site Pages
import Home from './contents/Home';
import About from './contents/About';
import Skills from './contents/Skills';
import Work from './contents/Work';


//Static width of side navbar
const drawerWidth = 240;

//Styles for the page and its items
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  leftTitle: {
    marginLeft: 'auto',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App(props) {

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  //List of Navigation Items
  const drawer = (
    <div>
      <div className={classes.toolbar}/>
      
      <List>
          <ListItem button component={Link} to="/" selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event,1)}>
              <ListItemIcon>
                  <HomeRoundedIcon className="gray_icons"/>
              </ListItemIcon>
              <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about" selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event,0)}>
              <ListItemIcon>
                  <AccountCircleRoundedIcon className="gray_icons"/>
              </ListItemIcon>
              <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/skills" selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event,2)}>
              <ListItemIcon>
                  <CodeIcon className="gray_icons"/>
              </ListItemIcon>
              <ListItemText primary="Skills" />
          </ListItem>
          <ListItem button component={Link} to="/work" selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event,3)}>
              <ListItemIcon>
                  <WorkRoundedIcon className="gray_icons"/>
              </ListItemIcon>
              <ListItemText primary="Portfolio" />
          </ListItem>
      </List>
      <Divider className="gray_divider"/>
  
    </div>
  );



  return (
    
      <div className={classes.root}>
        
        {/*Top Bar of the page */}
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} id="BAR">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.leftTitle}>
              Brantley Wyche
            </Typography>
          </Toolbar>
        </AppBar>

        <Router>

          {/*Navigation Section*/}
          <nav className={classes.drawer} aria-label="mailbox folders">

            {/*Mobile Navbar */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>

            {/*Desktop Navbar */}
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>

          {/*Route for Home */}
          <Route exact path="/">
            <Home />
          </Route>

          {/*Route for About*/}
          <Route path="/about">
            <About />
          </Route>

          {/*Route for Skills*/}
          <Route path="/skills">
            <Skills />
          </Route>

          {/*Route for My Work*/}
          <Route path="/work">
            <Work />
          </Route>
        </Router>
      </div>

  );
}

export default App;

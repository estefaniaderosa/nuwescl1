import React, { useState } from 'react';
import {
  CssBaseline,
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  makeStyles,
  useTheme
} from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const drawerWidth = 220;
const bgcolor = '#232730';
const fontcolor = '#FFFFFF';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    },
  },
  appBar: {
    boxShadow: 'none',
    backgroundColor: bgcolor,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
      backgroundColor: bgcolor
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: bgcolor,
    color: fontcolor,
    [theme.breakpoints.down('xs')]: {
      width: 500,
      fontSize: '5rem'
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: bgcolor,
    color: fontcolor,
  },
  responsiveLogoWrapper: {
    position: 'relative',
    left: '85%'
  },
  img: {
    width: 200
  },
  responsiveImg: {
    width: 'auto'
  },
  sidebarIcon: {
    color: '#fff'
  },
  fontSideBarXS: {
    fontSize: '55px',
    marginRight: 45
  }
}));

const Sidebar = (props) => {
  const { window } = props;

  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const drawer = (
    <div>
      <div> <img className={!matches ? classes.img : classes.responsiveImg} src={`${process.env.PUBLIC_URL}/images/nuwelogo.png`} alt='logo' /> </div>
      <List>
        <ListItem button key='Panel' disabled>
          <ListItemIcon className={classes.sidebarIcon}> <HomeOutlinedIcon className={!matches ? '' : classes.fontSideBarXS} /> </ListItemIcon>
          <ListItemText primary={<Typography className={!matches ? '' : classes.fontSideBarXS}>Panel</Typography>} />
        </ListItem>
        <ListItem button key='Perfil'>
          <ListItemIcon className={classes.sidebarIcon}><PersonOutlineOutlinedIcon className={!matches ? '' : classes.fontSideBarXS} /> </ListItemIcon>
          <ListItemText primary={<Typography className={!matches ? '' : classes.fontSideBarXS}>Perfil</Typography>} />
        </ListItem>
        <ListItem button key='Empresas' disabled>
          <ListItemIcon className={classes.sidebarIcon}> <BusinessCenterOutlinedIcon className={!matches ? '' : classes.fontSideBarXS} /> </ListItemIcon>
          <ListItemText className={classes.sidebarText} primary={<Typography className={!matches ? '' : classes.fontSideBarXS}>Empresas</Typography>} />
        </ListItem>
        <ListItem button key='Contacto' disabled>
          <ListItemIcon className={classes.sidebarIcon}> <AnnouncementOutlinedIcon className={!matches ? '' : classes.fontSideBarXS} /> </ListItemIcon>
          <ListItemText primary={<Typography className={!matches ? '' : classes.fontSideBarXS}>Contacto</Typography>} />
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar color='secondary'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          ><img className={classes.responsiveLogo} src={`${process.env.PUBLIC_URL}/images/nuwelogo.png`} alt="logo" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
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
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default Sidebar;

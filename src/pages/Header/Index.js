import React, { useState } from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Index.css';
import ProdutoView from '../../components/ProdutoView/Index'
import UserCrud from '../../components/UserCrud/Index'
import ProdutoCrud from '../../components/ProdutoCrud/Index'

import { MenuList, MenuItem } from '@material-ui/core'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: 'black',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  user: {
      marginLeft: 950,
  },
  username: {
    marginTop: 8,
    marginLeft: 5,
},
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  let content = null;
  const [state, setState] = useState({home: true});


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const hadleHome = () => {
       setState({home: true})
    //   hadleContent();
  }

  const hadleUserCrud = () => {
    setState({usercrud: true})
    // hadleContent();
}

const hadleProdutoCrud = () => {
    setState({produtocrud: true})
    // hadleContent();
}


//   const hadleContent = () => {
//       console.log('entrou')
//       switch(state){
//           case 'ProdutoView':
//               content = (<ProdutoView/>);
//               console.log('entrou')
//               break;
//           case 'ProdutoCrud':
//               content = (<ProdutoCrud/>);
//               console.log('entrou2')
//               break;
//           case 'UserCrud':
//               content = (<UserCrud/>);
//               console.log('entrou3')
//               break;
//           default:
//               content = <h1>Waiting</h1>
//       }
//   }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
              Online Blacksmith
          </Typography>
             <AccountCircleOutlinedIcon className={classes.user}/>
             <h6 className={classes.username}>Reginaldo</h6>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        {/* <List>
          {['Home', 'Cadastrar Produto', 'Cadastrar Usuário'].map((text, index) => (
            <ListItem button key={text} onClick={() => hadleContent()}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <MenuList>
             <MenuItem onClick={() => hadleHome()}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
              Home
            </MenuItem>
            <MenuItem onClick={() => hadleProdutoCrud()}>
            <ListItemIcon><AddIcon /></ListItemIcon>
              Cadastrar Produto
            </MenuItem>
            <MenuItem onClick={() => hadleUserCrud()}>
            <ListItemIcon><PersonAddIcon /></ListItemIcon>
              Cadastrar Usuário
            </MenuItem>
        </MenuList>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {content}
        {console.log('renderizei')}
        

          {state.home && <ProdutoView />}
        {state.produtocrud && <ProdutoCrud />}
        {state.usercrud && <UserCrud />}  

        
      </main>
    </div>
  );
}






// function Header() {
//     return (
//         <div className="Header">
//             <Navbar expand="lg">
//                 <NavLink exact to="/"><Navbar.Brand id="bulldog"><img src="./img/logo.png"/>Online Blacksmith</Navbar.Brand></NavLink>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="mr-auto links">
//                         <NavLink activeClassName="chosen" exact to="/" className="mr-3">Login</NavLink>
//                         <NavLink activeClassName="chosen" exact to="/produtocrud" className="mr-3">Cadastrar Produtos</NavLink>
//                         <NavLink activeClassName="chosen" exact to="/produtoview" className="mr-3">Lista de Produtos</NavLink>
//                         <NavLink activeClassName="chosen" exact to="/usercrud">Cadastro de Pessoas</NavLink>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         </div>
//     );
// }

// export default Header;




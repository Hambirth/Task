'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Card, CardContent,IconButton, Avatar, Button, TextField  } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import logo from './logo.png';
import Stack from '@mui/material/Stack';


const drawerWidth = 240;

  
function Sidenav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);

    
  };

  const drawer = (
    <div>
      <Image src={logo} height={80} width={100} alt="logo" className='mr-7'/>
      <Divider/>
      <List>
        {['Home', 'Home', 'Home', 'Home'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Home', 'Home', 'Home'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor:"#CDCDCB",

        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack>
          <Button variant="contained"
      color="primary" 
      startIcon={<AddIcon />} >
            Create Task</Button>
          <TextField
            placeholder="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <IconButton  color="inherit">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
          
          <Avatar sx={{ bgcolor: "green" , height:50 , width:50}} alt="User" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography variant="h1" >
      h1.heading
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Task to do
              <Divider />
            </Typography>
            <Box bgcolor="#F5CF29" color="#1F271B" p={2} mt={2} borderRadius={2}>
              Box 1
            </Box>
            <Box bgcolor="#07DA9A" color="#1F271B" p={2} mt={2} borderRadius={2}>
              Box 2
            </Box>
            <Box bgcolor="#59D2FE" color="i#1F271B" p={2} mt={2} borderRadius={2}>
              Box 3
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              In progress
              <Divider  sx={{ borderBottomWidth: 2}}/>
            </Typography>
            <Box bgcolor="#F5CF29" color="#1F271B" p={2} mt={2} borderRadius={2}>
              Box 1
            </Box>
            <Box bgcolor="#07DA9A" color="#1F271B" p={2} mt={2} borderRadius={2}>
              Box 2
            </Box>
            <Box bgcolor="#59D2FE" color="i#1F271B" p={2} mt={2} borderRadius={2}>
              Box 3
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Task Done
              <Divider />
            </Typography>
            
            <Box bgcolor="#F5CF29" color="#1F271B" p={2} mt={2} borderRadius={2}>
              Box 1
            </Box>
            <Box bgcolor="#07DA9A" color="#1F271B" p={2} mt={2} borderRadius={2}>
              Box 2
            </Box>
            <Box bgcolor="#59D2FE" color="i#1F271B" p={2} mt={2} borderRadius={2}>
              Box 3
            </Box>
            
          </CardContent>
        </Card>
      </Grid>
    </Grid>
        </Box>
    </Box>
  );
}

Sidenav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidenav;
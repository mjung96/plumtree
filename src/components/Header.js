import { AppBar, Toolbar, Button } from "@material-ui/core";
import React, { useState } from "react";
import  { NavLink } from "react-router-dom";
import logo from '../plumtree.png';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SpeedIcon from '@mui/icons-material/Speed';
import UploadIcon from '@mui/icons-material/Upload';

export default function Header() {
    const [sideMenu, setSideMenu] = useState(false);

    // opens/closes the sidemenu drawer
    const toggleDrawer = (open) => (e) => {
        setSideMenu(open);
    }

    return(
        <header>
            <AppBar position="sticky">
                <Toolbar style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                    <React.Fragment>

                        <Button onClick={toggleDrawer(true)}>
                            <img src={logo} alt="logo" style={{ height: '40px' }} />
                            {/* a gReAT LoGO */}
                        </Button>

                        <Drawer open={sideMenu} onClose={toggleDrawer(false)}>
                            <Box onClick={toggleDrawer(false)}>
                                <List>
                                    <ListItem>
                                        <Button>
                                            <NavLink exact to="/upload"><UploadIcon style={{ color: '#797198' }}/></NavLink>
                                            <NavLink exact to="/upload" style={{ textDecoration: 'none' }}><h6 style={{ color: '#797198' }}>upload</h6></NavLink>
                                        </Button>
                                    </ListItem>
                                    <ListItem>
                                        <Button>
                                            <NavLink exact to="/coaching"><SpeedIcon style={{ color: '#797198' }}/></NavLink>
                                            <NavLink exact to="/coaching" style={{ textDecoration: 'none' }}><h6 style={{ color: '#797198' }}>coaching</h6></NavLink>
                                        </Button>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                        
                        <div>
                            <Button style={{ color: 'red' }}>Log Out</Button>
                        </div>

                    </React.Fragment>
                </Toolbar>
            </AppBar>
        </header>
    )
}
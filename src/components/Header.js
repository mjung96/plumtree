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

    const toggleDrawer = (open) => (e) => {
        setSideMenu(open);
    }

    return(
        <header>
            <AppBar>
                <Toolbar style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                    <React.Fragment>

                        <Button onClick={toggleDrawer(true)}>
                            <img src={logo} alt="logo" style={{ height: '40px' }} />
                        </Button>

                        <Drawer open={sideMenu} onClose={toggleDrawer(false)}>
                            <Box onClick={toggleDrawer(false)}>
                                <List>
                                    <ListItem>
                                        <Button>
                                            <NavLink exact to="/upload"><UploadIcon style={{ color: '#797198' }}/></NavLink>
                                        </Button>
                                    </ListItem>
                                    <ListItem>
                                        <Button>
                                        <NavLink exact to="/coaching"><SpeedIcon style={{ color: '#797198' }}/></NavLink>
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
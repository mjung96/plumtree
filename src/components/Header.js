import { AppBar, Toolbar, Button } from "@material-ui/core";
import React from "react";
import logo from '../plumtree.png';

export default function Header() {
    return(
        <header>
            <AppBar>
                <Toolbar style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                    <img src={logo} alt="logo" style={{ height: '40px' }} />
                    <div>
                        <Button style={{ color: 'red' }}>Log Out</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    )
}
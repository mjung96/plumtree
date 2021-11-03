import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowerRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Card, Button, Grid } from '@material-ui/core';
import Header from '../components/Header';
import UploadPage from './UploadPage';
import CoachingPage from './CoachingPage';

export default function MainPage() {

    // useEffect(() => {
    //     fetch('http://localhost:3001/years/2019/')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //             console.log(data.weeks[1].drivers)
    //         })
    // }, []);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '1%', marginRight: '1%' }}>
                <Header/>
                <div>
                    <Switch>
                        <Route path="/upload" component={UploadPage}/>
                        <Route path="/coaching" component={CoachingPage}/>
                    </Switch>
                </div>
            </div>
        </>
    )
}
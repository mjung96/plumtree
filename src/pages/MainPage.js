import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowerRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Card, Button, Grid } from '@material-ui/core';
import Header from '../components/Header';
import UploadPage from './UploadPage';
import CoachingPage from './CoachingPage';

export default function MainPage() {
    return (
        <>
            <div>
                <Header/>
                <div>
                    <Grid>
                    <Switch>
                        <Route path="/upload" component={UploadPage}/>
                        <Route path="/coaching" component={CoachingPage}/>
                    </Switch>
                    </Grid>
                </div>
            </div>
        </>
    )
}
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
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
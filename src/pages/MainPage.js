import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Header from '../components/Header';
import UploadPage from './UploadPage';
import CoachingPage from './CoachingPage';
import DriverContext from '../components/DriverContext';

export default function MainPage() {
    const [driverObj, setDriverObj] = useState({});
    return (
        <>
        <DriverContext.Provider value={{driverObj, setDriverObj}}>
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
        </DriverContext.Provider>
        </>
    )
}
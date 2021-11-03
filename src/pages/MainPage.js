import React, { useState, useEffect } from 'react';
import { Card, Button, Grid } from '@material-ui/core';
import Header from '../components/Header';

export default function MainPage() {
    useEffect(() => {
        fetch('http://localhost:3001/years/2019/')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                console.log(data.weeks[1].drivers)
            })
    }, []);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '1%', marginRight: '1%' }}>
                <Header/>
            </div>
        </>
    )
}
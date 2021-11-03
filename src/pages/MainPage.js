import React, { useState, useEffect } from 'react';

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
        <div>
            <h1>hello there</h1>
        </div>
    )
}
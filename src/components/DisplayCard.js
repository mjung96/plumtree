import React, { useContext, useState, useEffect } from 'react';
import DriverContext from '../components/DriverContext';
import { Button, Grid, Card } from "@material-ui/core";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DisplayCard({ title, color, score, info }) {
    return (
        <Card style={{ height: '100%', width: '100%'}}>
            <h2 style={{ marginLeft: 5, display: 'inline'}}>{title}</h2>
            <h2 style={{ display: 'inline', color: color}}>{score}</h2>
            <TableContainer component={Paper} style={{ width: 400, height:500}}>
                <Table aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row"><h4 style={{display:'inline'}}>Metric</h4></TableCell>
                            <TableCell align="right">This Week</TableCell>
                        </TableRow>
                        {info.map((x) => (
                            <TableRow key={x[0]} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row"><h4 style={{display:'inline'}}>{x[0]}</h4></TableCell>
                                <TableCell align="right">{x[1]}</TableCell>
                            </TableRow>))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}
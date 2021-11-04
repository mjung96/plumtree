import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Button, Grid, Card } from "@material-ui/core";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CoachingPage() {
    const [year, setYear] = useState('');
    const [week, setWeek] = useState('');
    const [weekList, setWeekList] = useState([]);
    const [driverList, setDriverList] = useState([]);
    const [driver, setDriver] = useState('');
    const [canClick, setCanClick] = useState(true);
    const [driverData, setDriverData] = useState({})
    const [displayData, setDisplayData] = useState([]);
    const [overallCard, setOverallCard] = useState([]);
    const [safetyCard, setSafetyCard] = useState([]);
    const [keyAreaCard, setKeyAreaCard] = useState([]);
    const [dataStatCard, setDataStatCard] = useState([]);

    const weeks2019 = [1, 2, 3];
    const weeks2020 = [4, 5, 6, 7];
    const weeks2021 = [8, 9, 10, 11, 12];

    const selectDriver = (event) => {
        setDriver(event.target.value);
    };

    const selectYear = (event) => {
        setYear(event.target.value);
        if (event.target.value === '2019') {
            setWeekList(weeks2019);
        }
        else if (event.target.value === '2020') {
            setWeekList(weeks2020);
        }
        else {
            setWeekList(weeks2021);
        }
    };

    const selectWeek = (event) => {
        setWeek(event.target.value);

        if (year === '2019') {
            if (event.target.value === 1) {
                setDriverList(['Driver1', 'Driver2', 'Driver3'])
            }
            else if (event.target.value === 2) {
                setDriverList(['Driver4', 'Driver5', 'Driver6'])
            }
            else if (event.target.value === 3) {
                setDriverList(['Driver7', 'Driver8', 'Driver9'])
            }
        }
        else if (year === '2020') {
            if (event.target.value === 4) {
                setDriverList(['Driver10', 'Driver11', 'Driver12'])
            }
            else if (event.target.value === 5) {
                setDriverList(['Driver13', 'Driver14', 'Driver15'])
            }
            else if (event.target.value === 6) {
                setDriverList(['Driver16', 'Driver17', 'Driver18'])
            }
            else if (event.target.value === 7) {
                setDriverList(['Driver19', 'Driver20', 'Driver21'])
            }
        }
        else {
            if (event.target.value === 8) {
                setDriverList(['Driver22', 'Driver23', 'Driver24'])
            }
            else if (event.target.value === 9) {
                setDriverList(['Driver25', 'Driver26', 'Driver27'])
            }
            else if (event.target.value === 10) {
                setDriverList(['Driver28', 'Driver29', 'Driver30'])
            }
            else if (event.target.value === 11) {
                setDriverList(['Driver31', 'Driver32', 'Driver33'])
            }
            else if (event.target.value === 12) {
                setDriverList(['Driver34', 'Driver35', 'Driver36'])
            }
        }
    };

    useEffect(() => {
        console.log(displayData)

        if (displayData.length !== 0) {
            for (let i = 1; i < 4; i++) {
                overallCard[i-1] = displayData[i];
            }
            console.log(overallCard);
            setOverallCard([...overallCard]);
    
            safetyCard[0] = displayData[2];
            for (let i = 4; i < displayData.length; i++) {
                safetyCard[i-3] = displayData[i];
            }
            console.log(safetyCard);
            setSafetyCard([...safetyCard])
            //TODO SETKEYAREAFOCUSCARD AND DATAANDSTATCARD
        }
    }, [displayData])

    useEffect(() => {
        const temp = Object.entries(driverData);
        temp.splice(0, 1);
        setDisplayData(temp);
    }, [driverData])

    const getDriverFromDB = (driverID) => {
        console.log(driverID);

        fetch(`http://localhost:3001/drivers/${driverID}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDriverData(data);
            })
    }

    const showData = () => {
        getDriverFromDB(driver);
        setDriver('');
        setYear('');
        setWeek('');
        setCanClick(true);
    }

    useEffect(() => {
        if (driver !== '' && year !== '' && week !== '') {
            setCanClick(false);
        }
    }, [driver, year, week])

    return (
        <>
            <Grid>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginLeft: 5 }}>
                    <InputLabel id="demo-simple-select-standard-label">Year</InputLabel>
                    <Select value={year} onChange={selectYear} label="Year">
                        <MenuItem value={"2019"}>2019</MenuItem>
                        <MenuItem value={"2020"}>2020</MenuItem>
                        <MenuItem value={"2021"}>2021</MenuItem>
                    </Select>
                </FormControl>

                {year === '' ?
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Week</InputLabel>
                        <Select disabled label="Week" value=''/>
                    </FormControl>
                    :
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Week</InputLabel>
                        <Select value={week} onChange={selectWeek} label="Week">
                            {weekList.map(x => <MenuItem value={x}>{x}</MenuItem>)}
                        </Select>
                    </FormControl>
                } 

                {week === '' ? 
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
                        <InputLabel id="demo-simple-select-standard-label">Driver</InputLabel>
                        <Select disabled label="Driver" value=''/>
                    </FormControl>
                    :
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
                        <InputLabel id="demo-simple-select-standard-label">Driver</InputLabel>
                        <Select value={driver} onChange={selectDriver} label="Driver">
                            {driverList.map(x => <MenuItem value={x}>{x}</MenuItem>)}
                        </Select>
                    </FormControl>
                }

                {canClick ? 
                    <Button 
                        disabled={true} 
                        variant="contained" 
                        style={{ backgroundColor: '#79719880', color: 'white', marginTop: 20, width: '144px', height: '35px' }} 
                        disableElevation
                    >
                        Submit
                    </Button>

                    :

                    <Button 
                        disabled={false} 
                        variant="contained" 
                        style={{ backgroundColor: '#797198', color: 'white', marginTop: 20, width: '144px', height: '35px' }} 
                        disableElevation 
                        component="label"
                        onClick={showData}
                    >
                        Submit
                    </Button>
                }

                <br/>

                {displayData.length !== 0 ?
                <>

                    <Grid container style={{marginTop: 40}}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={3} >
                                <Grid item>
                                    <Card style={{ height: '100%', width: '100%'}}>
                                        <h1>All Driver Data</h1>
                                        <TableContainer component={Paper} style={{ width: 400, height:500}}>
                                            <Table aria-label="simple table">
                                                <TableBody>
                                                    {displayData.map((x) => (
                                                        <TableRow
                                                            key={x[0]}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                        <TableCell component="th" scope="row">
                                                            {x[0]}
                                                        </TableCell>
                                                        <TableCell align="right">{x[1]}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card style={{ height: '100%', width: '100%' }}>
                                        <h1>Overall Score Card</h1>
                                        <TableContainer component={Paper} style={{ width: 400, height:500}}>
                                            <Table aria-label="simple table">
                                                <TableBody>
                                                    {overallCard.map((x) => (
                                                        <TableRow
                                                            key={x[0]}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                        <TableCell component="th" scope="row">
                                                            {x[0]}
                                                        </TableCell>
                                                        <TableCell align="right">{x[1]}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card style={{ height: '100%', width: '100%'}}>
                                        <h1>Safety Card</h1>
                                        <TableContainer component={Paper} style={{ width: 400, height:500}}>
                                            <Table aria-label="simple table">
                                                <TableBody>
                                                    {safetyCard.map((x) => (
                                                        <TableRow
                                                            key={x[0]}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                        <TableCell component="th" scope="row">
                                                            {x[0]}
                                                        </TableCell>
                                                        <TableCell align="right">{x[1]}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
                : null
                }
            </Grid>
      </>
    )
}
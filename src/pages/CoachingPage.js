import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Button, Grid, Card, Box } from "@material-ui/core";
import TextField from '@mui/material/TextField';

export default function CoachingPage() {
    const [year, setYear] = useState('');
    const [week, setWeek] = useState('');
    const [weekList, setWeekList] = useState([]);
    const [driverList, setDriverList] = useState([]);
    const [driver, setDriver] = useState('');
    const [canClick, setCanClick] = useState(true);
    const [driverData, setDriverData] = useState({})

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
                setDriverList(['19.1.1', '19.1.2', '19.1.3'])
            }
            else if (event.target.value === 2) {
                setDriverList(['19.2.1', '19.2.2', '19.2.3'])
            }
            else if (event.target.value === 3) {
                setDriverList(['19.3.1', '19.3.2', '19.3.3'])
            }
        }
        else if (year === '2020') {
            if (event.target.value === 4) {
                setDriverList(['20.4.1', '20.4.2', '20.4.3'])
            }
            else if (event.target.value === 5) {
                setDriverList(['20.5.1', '20.5.2', '20.5.3'])
            }
            else if (event.target.value === 6) {
                setDriverList(['20.6.1', '20.6.2', '20.6.3'])
            }
            else if (event.target.value === 7) {
                setDriverList(['20.7.1', '20.7.2', '20.7.3'])
            }
        }
        else {
            if (event.target.value === 8) {
                setDriverList(['21.8.1', '21.8.2', '21.8.3'])
            }
            else if (event.target.value === 9) {
                setDriverList(['21.9.1', '21.9.2', '21.9.3'])
            }
            else if (event.target.value === 10) {
                setDriverList(['21.10.1', '21.10.2', '21.10.3'])
            }
            else if (event.target.value === 11) {
                setDriverList(['21.11.1', '21.11.2', '21.11.3'])
            }
            else if (event.target.value === 12) {
                setDriverList(['21.12.1', '21.12.2', '21.12.3'])
            }
        }
    };

    useEffect(() => {
        console.log(driverData);
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
        const dID = year + '.' + week.toString() + '.' + driver;

        getDriverFromDB(dID);

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

                <br/>

                {canClick ? 
                    <Button 
                        disabled={true} 
                        variant="contained" 
                        style={{ marginLeft: 110, backgroundColor: '#79719880', color: 'white', marginTop: 15, width: '344px', height: '44px' }} 
                        disableElevation
                    >
                        Submit
                    </Button>

                    :

                    <Button 
                        disabled={false} 
                        variant="contained" 
                        style={{ marginLeft: 110, backgroundColor: '#797198', color: 'white', marginTop: 15, width: '344px', height: '44px' }} 
                        disableElevation 
                        component="label"
                        onClick={showData}
                    >
                        Submit
                    </Button>
                }
            </Grid>
      </>
    )
}
import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Button, Grid, Card, Box } from "@material-ui/core";

export default function CoachingPage() {
    const [driver, setDriver] = useState('');
    const [year, setYear] = useState('');
    const [week, setWeek] = useState('');
    const [canClick, setCanClick] = useState(true);

    const selectDriver = (event) => {
        setDriver(event.target.value);
    };

    const selectYear = (event) => {
        setYear(event.target.value);
    };

    const selectWeek = (event) => {
        setWeek(event.target.value);
    };

    const showData = () => {
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
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginLeft: 5 }}>
                <InputLabel id="demo-simple-select-standard-label">Year</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={year}
                onChange={selectYear}
                label="Year"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"2019"}>2019</MenuItem>
                <MenuItem value={"2020"}>2020</MenuItem>
                <MenuItem value={"2021"}>2021</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Week</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={week}
                onChange={selectWeek}
                label="Week"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
                <InputLabel id="demo-simple-select-standard-label">Driver</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={driver}
                onChange={selectDriver}
                label="Driver"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"Driver1"}>Driver1</MenuItem>
                <MenuItem value={"Driver2"}>Driver2</MenuItem>
                <MenuItem value={"Driver3"}>Driver3</MenuItem>
                </Select>
            </FormControl>

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

      </div>
    )
}
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
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, RadialBarChart, RadialBar } from 'recharts';

// Because this isn't talking to an actual server/DB, and I didn't know/use the data models actually used in production 
// you'll find there are hardcoded values for the sake of ease data access

export default function CoachingPage() {
    // states of the values in the top search bar 
    const [year, setYear] = useState('');
    const [week, setWeek] = useState('');
    const [driver, setDriver] = useState('');

    // the list of weeks and drivers must dynamically change depending on year/week, respectively, so these handle those changes
    const [weekList, setWeekList] = useState([]);
    const [driverList, setDriverList] = useState([]);
    
    // ensures user cannot submit unless all 3 fields are filled 
    const [canClick, setCanClick] = useState(true);

    // driverData are the elements for specific driver from db; display is driver without the id field... can probably condense that 
    const [driverData, setDriverData] = useState({})
    const [displayData, setDisplayData] = useState([]);

    // color of the score changes depending on the score; these are those colors for the cards. 
    const [overallColor, setOverallColor] = useState('');
    const [safetyColor, setSafetyColor] = useState('');
    const [qualityColor, setQualityColor] = useState('');

    // the reCharts radial chart takes in data; these are the states for that data to change depending on the user's score 
    const [safetyBarData, setSafetyBarData] = useState([]);
    const [qualityBarData, setQualityBarData] = useState([]);

    // could've just pulled data from displayData, but make these states for different cards to seperate data a bit.
    const [overallCard, setOverallCard] = useState([]);
    const [safetyCard, setSafetyCard] = useState([]);
    const [qualityCard, setQualityCard] = useState([]);
    const [keyAreaCard, setKeyAreaCard] = useState([]);

    // fields in the card containing the graph. same idea as the search bar states 
    const [statToMeasure, setStatToMeasure] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [clickGraph, setClickGraph] = useState(true);
    const [fromDateRange, setFromDateRange] = useState([]);
    const [toDateRange, setToDateRange] = useState([]);

    // the states having to do with the graph
    const [makingGraph, setMakingGraph] = useState(true);
    const [dataPoints, setDataPoints] = useState([]);
    const [data, setData] = useState([]);

    // reCharts Radial Chart takes in a data array of objects to use as the display elements
    // these are the corresponding data arrays, the array name being for which score they are
    const FantasticPlus = [
        {name: '18-24',uv: 21.47,pv: 2400,fill: '#ffffff',},
        {name: '25-29',uv: 26.69,pv: 4567,fill: '#0095FF',}
    ];
    const Fantastic = [
        {name: '18-24',uv: 31.47,pv: 2400,fill: '#ffffff',},
        {name: '25-29',uv: 26.69,pv: 4567,fill: '#0070C0',}
    ];
    const Good = [
        {name: '18-24',uv: 38.47,pv: 2400,fill: '#ffffff',},
        {name: '25-29',uv: 26.69,pv: 4567,fill: '#00AF50',}
    ];
    const Fair = [
        {name: '18-24',uv: 52.00,pv: 2400,fill: '#ffffff',},
        {name: '25-29',uv: 26.69,pv: 4567,fill: '#ED7D31',}
    ];
    const Poor = [
        {name: '18-24',uv: 100.00,pv: 2400,fill: '#ffffff',},
        {name: '25-29',uv: 26.69,pv: 4567,fill: '#C00000',}
    ];

    // the weeks for the years; hardcoded because theres no "real" db im pulling from so to demonstrate functionality, simply have the data in arrays 
    const weeks2019 = [1, 2, 3];const weeks2020 = [4, 5, 6, 7];const weeks2021 = [8, 9, 10, 11, 12];

    // when user selects year from dropdown menu, will set state for year while also updating the states of the weeks list 
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

    // when user selects week from dropdown menu, will set state for week while also updating state of list of drivers for that week
    // again, is hardcoded in because of no 'real' backend 
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

     // when user selects driver, updates state for driver value
     const selectDriver = (event) => {
        setDriver(event.target.value);
    };

    // when user selects the stat they want for the graph, will reset the states for other graph elements and set stat state
    const selectStat = (event) => {
        setFromDateRange([]);
        setToDateRange([]);
        setFromDate('');
        setToDate('');
        setClickGraph(true);
        setStatToMeasure(event.target.value);
    }

    // function to set the from date dropdown value 
    const selectFromRange = (event) => {
        setToDate('');
        setFromDate(event.target.value);
    }

    // function to set the to date dropdown value 
    const selectToRange = (event) => {
        setToDate(event.target.value);
    }

    // when a new driver is fetched from the db, useEffect will run. resets states, so they can be updated with new values 
    useEffect(() => {
        const temp = Object.entries(driverData);
        temp.splice(0, 1);
        setDisplayData(temp);
        setDataPoints([]);
        setMakingGraph(true);
        setStatToMeasure('');
        setFromDate(0);
        setToDate(0);
        setFromDateRange([]);
        setToDateRange([]);
        setData([]);
    }, [driverData])

    // function that fetches the desired driver from db 
    const getDriverFromDB = (driverID) => {
        fetch(`http://localhost:3001/drivers/${driverID}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDriverData(data);
            })
    }

    // function that calls the fetch driver API call, and resets the search bar
    const showData = () => {
        getDriverFromDB(driver);
        setDriver('');
        setYear('');
        setWeek('');
        setCanClick(true);
    }

    // hook that monitors whether or not the submit button should be set to enabled 
    useEffect(() => {
        if (driver !== '' && year !== '' && week !== '') {
            setCanClick(false);
        }
    }, [driver, year, week])

    // function that makes the graph 
    const makeGraph = () => {
        setMakingGraph(false);
        let range = toDate - fromDate;
        let temp = [];
        for (let i = 0; i < range + 1; i++) {
            let tempname = 'Week ' + (fromDate + i).toString();

            temp[i] = {name: tempname, uv: dataPoints[i], pv: 2400, amt:2400}
        }
        setData(temp);
    }

    // when use select fromDate, this hook will set the toDate range to be a list of all the dates AFTER the from date 
    useEffect(() => {
        toDateRange.splice(0, toDateRange.length);
        setToDate('');
        for (let i = 0; i < fromDateRange.length; i++) {
            if (fromDateRange[i] > fromDate) {
                toDateRange.push(fromDateRange[i]);
            }
        }
        setToDateRange([...toDateRange]);
    }, [fromDate])

    // when user selects a toDate, set the button to draw graph to enabled 
    useEffect(() => {
        if (toDate > 0) {
            setClickGraph(false);
        }
    }, [toDate])

    // when user selects which stat they want the graph to measure, this will set the FromDateRange and dataPoints accordingly. 
    useEffect(() => {
        if (statToMeasure === "FICO") {
            for (let i = 0; i < displayData[14][1].length; i++) {
                fromDateRange[i] = displayData[14][1][i][0];
                dataPoints[i] = displayData[14][1][i][1];
            }
            setFromDateRange([...fromDateRange]);
            setDataPoints([...dataPoints]);
        }
        else if (statToMeasure === "POD") {
            for (let i = 0; i < displayData[15][1].length; i++) {
                fromDateRange[i] = displayData[15][1][i][0];
                dataPoints[i] = displayData[15][1][i][1];
            }
            setFromDateRange([...fromDateRange]);
            setDataPoints([...dataPoints]);
        }
        else if (statToMeasure === "Delivered/Received") {
            for (let i = 0; i < displayData[16][1].length; i++) {
                fromDateRange[i] = displayData[16][1][i][0];
                dataPoints[i] = displayData[16][1][i][1];
            }
            setFromDateRange([...fromDateRange]);
            setDataPoints([...dataPoints]);
        }

    }, [statToMeasure])

    // sets the colors/radial bars when a new driver is loaded, as well as sections off the data into corresponding cards
    useEffect(() => {
        if (displayData.length !== 0) {
            if (displayData[1][1] === 'Fantastic+'){
                setOverallColor('#0095FF')
            }
            else if (displayData[1][1] === 'Fantastic'){
                setOverallColor('#0070C0')
            }
            else if (displayData[1][1] === 'Good'){
                setOverallColor('#00AF50')
            }
            else if (displayData[1][1] === 'Fair'){
                setOverallColor('#ED7D31')
            }
            else if (displayData[1][1] === 'Poor'){
                setOverallColor('#C00000')
            }

            if (displayData[2][1] === 'Fantastic+') {
                setSafetyBarData(FantasticPlus);
                setSafetyColor('#0095FF');
            }
            else if (displayData[2][1] === 'Fantastic') {
                setSafetyBarData(Fantastic);
                setSafetyColor('#0070C0');
            }
            else if (displayData[2][1] === 'Good') {
                setSafetyBarData(Good);
                setSafetyColor('#00AF50');
            }
            else if (displayData[2][1] === 'Fair') {
                setSafetyBarData(Fair);
                setSafetyColor('#ED7D31');
            }
            else if (displayData[2][1] === 'Poor') {
                setSafetyBarData(Poor);
                setSafetyColor('#C00000');
            }

            if (displayData[3][1] === 'Fantastic+') {
                setQualityBarData(FantasticPlus);
                setQualityColor('#0095FF');
            }
            else if (displayData[3][1] === 'Fantastic') {
                setQualityBarData(Fantastic);
                setQualityColor('#0070C0');
            }
            else if (displayData[3][1] === 'Good') {
                setQualityBarData(Good);
                setQualityColor('#00AF50');
            }
            else if (displayData[3][1] === 'Fair') {
                setQualityBarData(Fair);
                setQualityColor('#ED7D31');
            }
            else if (displayData[3][1] === 'Poor') {
                setQualityBarData(Poor);
                setQualityColor('#C00000');
            }

            for (let i = 2; i < 4; i++) {
                overallCard[i-2] = displayData[i];
            }
            setOverallCard([...overallCard]);
    
            for (let i = 4; i < 7; i++) {
                safetyCard[i-4] = displayData[i];
            }
            setSafetyCard([...safetyCard])

            for (let i = 7; i < 13; i++) {
                qualityCard[i-7] = displayData[i];
            }
            setQualityCard([...qualityCard])

            setKeyAreaCard(displayData[13][1]);

        }
    }, [displayData])

    return (
        <>
            <Grid>
                <Grid container justifyContent="center" >
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginLeft: 5, marginTop: 1.5 }}>
                        <InputLabel id="demo-simple-select-standard-label">Year</InputLabel>
                        <Select value={year} onChange={selectYear} label="Year">
                            <MenuItem value={"2019"}>2019</MenuItem>
                            <MenuItem value={"2020"}>2020</MenuItem>
                            <MenuItem value={"2021"}>2021</MenuItem>
                        </Select>
                    </FormControl>
                    {year === '' ?
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginTop: 1.5 }}>
                            <InputLabel id="demo-simple-select-standard-label">Week</InputLabel>
                            <Select disabled label="Week" value=''/>
                        </FormControl>
                        :
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginTop: 1.5 }}>
                            <InputLabel id="demo-simple-select-standard-label">Week</InputLabel>
                            <Select value={week} onChange={selectWeek} label="Week">
                                {weekList.map(x => <MenuItem value={x}>{x}</MenuItem>)}
                            </Select>
                        </FormControl>
                    } 
                    {week === '' ? 
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 240, marginTop: 1.5 }}>
                            <InputLabel id="demo-simple-select-standard-label">Driver</InputLabel>
                            <Select disabled label="Driver" value=''/>
                        </FormControl>
                        :
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 240, marginTop: 1.5 }}>
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
                            style={{ backgroundColor: '#79719880', color: 'white', marginTop: 25, width: '144px', height: '35px' }} 
                            disableElevation
                        >Submit</Button>
                        :
                        <Button 
                            disabled={false} 
                            variant="contained" 
                            style={{ backgroundColor: '#797198', color: 'white', marginTop: 25, width: '144px', height: '35px' }} 
                            disableElevation 
                            component="label"
                            onClick={showData}
                        >Submit</Button>
                    }
                </Grid>
                <br/>
                {displayData.length !== 0 ?
                <>
                    <Grid container style={{marginTop: 40}}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={3} >
                                <Grid item>
                                    <Card style={{ height: '100%', width: '100%' }}>
                                        <h1 style={{ marginLeft: 5, display: 'inline' }}>{displayData[0][1]}: </h1>
                                        <h1 style={{display: 'inline', color: overallColor}}>{displayData[1][1]}</h1><br/><br/><br/><br/>
                                        <h4 style={{marginLeft: 100, display: 'inline' }}>Safety Score: </h4>
                                        <h4 style={{display: 'inline', color: safetyColor}}>{displayData[2][1]}</h4>
                                        <RadialBarChart cx='50%' cy='58%' outerRadius={150} margin={{ top: 0, left: 0, right: 0, bottom: 0 }} startAngle={180} endAngle={0} width={400} height={180} barSize={7} data={safetyBarData}>  
                                            <RadialBar background clockWise dataKey="uv"/> 
                                        </RadialBarChart>
                                        <h4 style={{marginLeft: 100, display: 'inline' }}>Quality Score: </h4>
                                        <h4 style={{display: 'inline', color: qualityColor}}>{displayData[3][1]}</h4>
                                        <RadialBarChart cx='50%' cy='58%' outerRadius={150} margin={{ top: 0, left: 0, right: 0, bottom: 0 }} startAngle={180} endAngle={0} width={400} height={180} barSize={7} data={qualityBarData}>  
                                            <RadialBar background clockWise dataKey="uv"/>
                                        </RadialBarChart>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card style={{ height: '100%', width: '100%'}}>
                                        <h2 style={{ marginLeft: 5, display: 'inline'}}>Safety: </h2>
                                        <h2 style={{ display: 'inline', color: safetyColor}}>{displayData[2][1]}</h2>
                                        <TableContainer component={Paper} style={{ width: 400, height:500}}>
                                            <Table aria-label="simple table">
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row"><h4 style={{display:'inline'}}>Metric</h4></TableCell>
                                                        <TableCell align="right">This Week</TableCell>
                                                    </TableRow>
                                                    {safetyCard.map((x) => (
                                                        <TableRow key={x[0]} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                            <TableCell component="th" scope="row"><h4 style={{display:'inline'}}>{x[0]}</h4></TableCell>
                                                            <TableCell align="right">{x[1]}</TableCell>
                                                        </TableRow>))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card style={{ height: '100%', width: '100%'}}>
                                        <h2 style={{marginLeft: 5, display: 'inline'}}>Quality: </h2>
                                        <h2 style={{ display: 'inline', color: qualityColor}}>{displayData[3][1]}</h2>
                                        <TableContainer component={Paper} style={{ width: 400, height:500}}>
                                            <Table aria-label="simple table">
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row"><h4 style={{display:'inline'}}>Metric</h4></TableCell>
                                                        <TableCell align="right">This Week</TableCell>
                                                    </TableRow>
                                                    {qualityCard.map((x) => (
                                                        <TableRow key={x[0]} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                            <TableCell component="th" scope="row"><h4 style={{display:'inline'}}>{x[0]}</h4></TableCell>
                                                            <TableCell align="right">{x[1]}</TableCell>
                                                        </TableRow>))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card style={{ height: '100%', width: '100%'}}>
                                        <h2 style={{ display: 'inline', marginLeft: 5}}>Key Areas of Focus</h2>
                                        <TableContainer component={Paper} style={{ width: 400, height:500}}>
                                            <Table aria-label="simple table">
                                                <TableBody>
                                                    {keyAreaCard.map((x) => (
                                                        <>
                                                            <TableRow>
                                                                <TableCell>{x}</TableCell>
                                                            </TableRow>
                                                        </>))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card style={{ height: '529px', width: '400px'}}>
                                        <h2 style={{display: 'inline', marginLeft: 5}}>Data and Statistics</h2> <br/>
                                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginLeft: 3 }}>
                                            <InputLabel id="demo-simple-select-standard-label">Statistic</InputLabel>
                                            <Select value={statToMeasure} onChange={selectStat} label="Statistics">
                                                <MenuItem value={"FICO"}>FICO</MenuItem>
                                                <MenuItem value={"POD"}>POD</MenuItem>
                                                <MenuItem value={"Delivered/Received"}>Delivered/Received</MenuItem>
                                            </Select>
                                        </FormControl>
                                        {statToMeasure !== '' ?
                                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginLeft: 3 }}>
                                                <InputLabel id="demo-simple-select-standard-label">From Date</InputLabel>
                                                <Select value={fromDate} onChange={selectFromRange} label="From Range">
                                                    {fromDateRange.map(x => <MenuItem value={x}>{x}</MenuItem>)}
                                                </Select>
                                            </FormControl>
                                            :
                                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginLeft: 3 }}>
                                                <InputLabel id="demo-simple-select-standard-label">From Date</InputLabel>
                                                <Select disabled label="From Range"></Select>
                                            </FormControl>
                                        }
                                        {fromDate > 0 ?
                                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginLeft: 3 }}>
                                                <InputLabel id="demo-simple-select-standard-label">To Date</InputLabel>
                                                <Select value={toDate} onChange={selectToRange} label="To Range">
                                                    {toDateRange.map(x => <MenuItem value={x}>{x}</MenuItem>)}
                                                </Select>
                                            </FormControl>
                                            : 
                                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginLeft: 3 }}>
                                                <InputLabel id="demo-simple-select-standard-label">To Date</InputLabel>
                                                <Select disabled label="To Range"></Select>
                                            </FormControl>
                                        }
                                        {clickGraph ? 
                                            <Button 
                                                disabled={true} 
                                                variant="contained" 
                                                style={{ backgroundColor: '#79719880', color: 'white', marginTop: 20, marginLeft: 20, marginRight: 15, width: '144px', height: '35px' }} 
                                                disableElevation>Submit</Button>
                                            :
                                            <Button 
                                                disabled={false} 
                                                variant="contained" 
                                                style={{ backgroundColor: '#797198', color: 'white', marginTop: 20, marginLeft: 20, marginRight: 15, width: '144px', height: '35px' }} 
                                                disableElevation 
                                                component="label"
                                                onClick={makeGraph}>Submit</Button>
                                        }
                                        {!makingGraph ? 
                                            <LineChart width={375} height={335} data={data} style={{marginTop: 20, marginRight: 20}}>
                                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                                <CartesianGrid stroke="#ccc" />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                            </LineChart>
                                            : null
                                        }
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
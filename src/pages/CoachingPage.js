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

export default function CoachingPage() {
    const [year, setYear] = useState('');
    const [week, setWeek] = useState('');
    const [weekList, setWeekList] = useState([]);
    const [driverList, setDriverList] = useState([]);
    const [driver, setDriver] = useState('');
    const [canClick, setCanClick] = useState(true);
    const [clickGraph, setClickGraph] = useState(true);
    const [driverData, setDriverData] = useState({})
    const [displayData, setDisplayData] = useState([]);
    const [overallCard, setOverallCard] = useState([]);
    const [safetyCard, setSafetyCard] = useState([]);
    const [qualityCard, setQualityCard] = useState([]);
    const [keyAreaCard, setKeyAreaCard] = useState([]);
    const [statToMeasure, setStatToMeasure] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [fromDateRange, setFromDateRange] = useState([]);
    const [toDateRange, setToDateRange] = useState([]);
    const [makingGraph, setMakingGraph] = useState(true);
    const [dataPoints, setDataPoints] = useState([]);
    const [data, setData] = useState([]);
    const [safetyBarData, setSafetyBarData] = useState([]);
    const [qualityBarData, setQualityBarData] = useState([]);
    const [overallColor, setOverallColor] = useState('');
    const [safetyColor, setSafetyColor] = useState('');
    const [qualityColor, setQualityColor] = useState('');

    const FantasticPlus = [
        {
          name: '18-24',
          uv: 21.47,
          pv: 2400,
          fill: '#ffffff',
        },
        {
          name: '25-29',
          uv: 26.69,
          pv: 4567,
          fill: '#0095FF',
        }
    ];

    const Fantastic = [
        {
          name: '18-24',
          uv: 31.47,
          pv: 2400,
          fill: '#ffffff',
        },
        {
          name: '25-29',
          uv: 26.69,
          pv: 4567,
          fill: '#0070C0',
        }
    ];

    const Good = [
        {
          name: '18-24',
          uv: 38.47,
          pv: 2400,
          fill: '#ffffff',
        },
        {
          name: '25-29',
          uv: 26.69,
          pv: 4567,
          fill: '#00AF50',
        }
    ];

    const Fair = [
        {
          name: '18-24',
          uv: 52.00,
          pv: 2400,
          fill: '#ffffff',
        },
        {
          name: '25-29',
          uv: 26.69,
          pv: 4567,
          fill: '#ED7D31',
        }
    ];

    const Poor = [
        {
          name: '18-24',
          uv: 100.00,
          pv: 2400,
          fill: '#ffffff',
        },
        {
          name: '25-29',
          uv: 26.69,
          pv: 4567,
          fill: '#C00000',
        }
    ];

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

    const getDriverFromDB = (driverID) => {
        // setWeekList([]);
        // setDriverList([]);
        // setClickGraph(true);
        // setDriverData({})
        // setDisplayData([]);
        // setOverallCard([]);
        // setSafetyCard([]);
        // setQualityCard([]);
        // setKeyAreaCard([]);
        // setStatToMeasure('');
        // setFromDate('');
        // setToDate('');
        // setFromDateRange([]);
        // setToDateRange([]);
        // setMakingGraph(true);
        // setDataPoints([]);
        // setData([]);
        // setSafetyBarData([]);
        // setQualityBarData([]);
        // setOverallColor('');
        // setSafetyColor('');
        // setQualityColor('');


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

    const makeGraph = () => {
        setMakingGraph(false);
        let range = toDate - fromDate;
        let temp = [];

        console.log(dataPoints);

        for (let i = 0; i < range + 1; i++) {
            let tempname = 'Week ' + (fromDate + i).toString();

            temp[i] = {name: tempname, uv: dataPoints[i], pv: 2400, amt:2400}
        }
        setData(temp);
    }

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

    useEffect(() => {
        if (toDate > 0) {
            setClickGraph(false);
        }
    }, [toDate])

    useEffect(() => {

        // setFromDateRange([]);
        // setToDateRange([]);
        // setFromDate('');
        // setToDate('');
        // setClickGraph(true);

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

    useEffect(() => {
        if (displayData.length !== 0) {
            // setDataPoints([]);
            // setMakingGraph(true);
            // setStatToMeasure('');
            // setFromDate('');
            // setToDate('');
            // setFromDateRange([]);
            // setToDateRange([]);
            // setData([]);

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

    // FIX GRAPH BUG 
    const selectStat = (event) => {
        // setDataPoints([]);
        // setMakingGraph(true);
        // setStatToMeasure('');
        // setData([]);
        setFromDateRange([]);
        setToDateRange([]);
        setFromDate('');
        setToDate('');
        setClickGraph(true);
        setStatToMeasure(event.target.value);
    }

    const selectFromRange = (event) => {
        setToDate('');
        setFromDate(event.target.value);
    }

    const selectToRange = (event) => {
        setToDate(event.target.value);
    }

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
                                    <Card style={{ height: '100%', width: '100%' }}>
                                        <h1 style={{ marginLeft: 5, display: 'inline' }}>{displayData[0][1]}: </h1>
                                        <h1 style={{display: 'inline', color: overallColor}}>{displayData[1][1]}</h1>
                                        <br/><br/><br/><br/>

                                        <h4 style={{marginLeft: 100, display: 'inline' }}>Safety Score: </h4>
                                        <h4 style={{display: 'inline', color: safetyColor}}>{displayData[2][1]}</h4>
                                        <RadialBarChart cx='50%' cy='58%' outerRadius={150} margin={{ top: 0, left: 0, right: 0, bottom: 0 }} startAngle={180} endAngle={0} width={400} height={180} barSize={7} data={safetyBarData}>  
                                            <RadialBar
                                                background
                                                clockWise
                                                dataKey="uv"
                                            /> 
                                        </RadialBarChart>

                                        <h4 style={{marginLeft: 100, display: 'inline' }}>Quality Score: </h4>
                                        <h4 style={{display: 'inline', color: qualityColor}}>{displayData[3][1]}</h4>
                                        <RadialBarChart cx='50%' cy='58%' outerRadius={150} margin={{ top: 0, left: 0, right: 0, bottom: 0 }} startAngle={180} endAngle={0} width={400} height={180} barSize={7} data={qualityBarData}>  
                                            <RadialBar
                                                background
                                                clockWise
                                                dataKey="uv"
                                            /> 
                                        </RadialBarChart>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    {/* <Card style={{ height: '280px', width: '100%'}}> */}
                                    <Card style={{ height: '100%', width: '100%'}}>
                                        <h2 style={{ marginLeft: 5, display: 'inline'}}>Safety: </h2>
                                        <h2 style={{ display: 'inline', color: safetyColor}}>{displayData[2][1]}</h2>
                                        <TableContainer component={Paper} style={{ width: 400, height:500}}>
                                            <Table aria-label="simple table">
                                                {/* <TableHead>
                                                    <TableRow>
                                                        <h2 style={{ marginLeft: 130}}>Safety Card</h2>
                                                    </TableRow>
                                                </TableHead> */}
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row"><h4 style={{display:'inline'}}>Metric</h4></TableCell>
                                                        <TableCell align="right">This Week</TableCell>
                                                    </TableRow>
                                                    {safetyCard.map((x) => (
                                                        <TableRow
                                                            key={x[0]}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                        <TableCell component="th" scope="row">
                                                            <h4 style={{display:'inline'}}>{x[0]}</h4>
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
                                    {/* <Card style={{ height: '440px', width: '100%'}}> */}
                                    <Card style={{ height: '100%', width: '100%'}}>
                                        <h2 style={{marginLeft: 5, display: 'inline'}}>Quality: </h2>
                                        <h2 style={{ display: 'inline', color: qualityColor}}>{displayData[3][1]}</h2>
                                        <TableContainer component={Paper} style={{ width: 400, height:500}}>
                                            <Table aria-label="simple table">
                                                {/* <TableHead>
                                                    <TableRow>
                                                        <h2 style={{ marginLeft: 130}}>Quality Card</h2>
                                                    </TableRow>
                                                </TableHead> */}
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell component="th" scope="row"><h4 style={{display:'inline'}}>Metric</h4></TableCell>
                                                        <TableCell align="right">This Week</TableCell>
                                                    </TableRow>
                                                    {qualityCard.map((x) => (
                                                        <TableRow
                                                            key={x[0]}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                        <TableCell component="th" scope="row">
                                                            <h4 style={{display:'inline'}}>{x[0]}</h4>
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
                                    {/* <Card style={{ height: '120px', width: '100%'}}> */}
                                    <Card style={{ height: '100%', width: '100%'}}>
                                        <h2 style={{ display: 'inline', marginLeft: 5}}>Key Area of Focus</h2>
                                        <TableContainer component={Paper} style={{ width: 400, height:500}}>
                                            <Table aria-label="simple table">
                                                {/* <TableHead>
                                                    <TableRow>
                                                        <h2 style={{ marginLeft: 85}}>Key Area of Focus</h2>
                                                    </TableRow>
                                                </TableHead> */}
                                                <TableBody>
                                                    {keyAreaCard.map((x) => (
                                                        <>
                                                            <TableRow>
                                                                <TableCell>{x}</TableCell>
                                                            </TableRow>
                                                        </>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card style={{ height: '529px', width: '400px'}}>
                                    {/* <Card style={{ height: '100%', width: '400px'}}> */}
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
                                                disableElevation
                                            >
                                                Submit
                                            </Button>

                                            :

                                            <Button 
                                                disabled={false} 
                                                variant="contained" 
                                                style={{ backgroundColor: '#797198', color: 'white', marginTop: 20, marginLeft: 20, marginRight: 15, width: '144px', height: '35px' }} 
                                                disableElevation 
                                                component="label"
                                                onClick={makeGraph}
                                            >
                                                Submit
                                            </Button>
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
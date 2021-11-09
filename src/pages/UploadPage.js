import React, { useState, useEffect } from 'react';
import { Button, Grid } from "@material-ui/core";
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';

export default function UploadPage() {
    const [fileName, setFileName] = useState("Select File");
    const [canClick, setCanClick] = useState(true);
    const [loading, setLoading] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);

    // when user submits, this useEffect hook handles the loading and uploaded animations with timeouts
    useEffect(() => {
        if (uploadComplete) {
            setTimeout(() => {
                setUploadComplete(false);
            }, 2000);
        }

        if (loading) {
            setTimeout(() => {
                setLoading(false);
                setUploadComplete(true);
            }, 3000);
        }
    }, [uploadComplete, loading])

    // once the user hits submit, this will change the loading -> uploaded states to trigger animations and resets the UI buttons
    const resetUploadPage = () => {
        setLoading(true);
        setCanClick(true);
        setFileName("Select File");

    }

    // this reads in the uploaded file and will get the file name to display as button content 
    const readUploadFile = (e) => {
        var file = e.target.value;
        var temp = file.lastIndexOf("\\");
        if (temp >= 0) {
            file = file.substring(temp + 1);
        }
        setFileName(file);
        setCanClick(false);
        e.target.value = "";
    }

    return (
        <>
        <Grid container spacing={0} alignItems="center" justifyContent="center" direction="column">
            <label htmlFor="contained-button-file">
                <input accept=".pdf" id="contained-button-file" multiple type="file" hidden onChange={(e) => readUploadFile(e)}/>
                <Button variant="contained" component="span" style={{ marginTop: '25%', width: '344px', height: '40px'}}>
                    {fileName}
                </Button>
            </label>
            <br/>
            {canClick ? 
                <Button 
                    disabled={true} 
                    variant="contained" 
                    style={{ backgroundColor: '#79719880', color: 'white', width: '344px', height: '44px' }} 
                    disableElevation
                    >
                        Submit
                    </Button>
                :
                <Button 
                    disabled={false} 
                    variant="contained" 
                    style={{ backgroundColor: '#797198', color: 'white', width: '344px', height: '44px' }} 
                    disableElevation 
                    component="label"
                    onClick={resetUploadPage}
                >
                    Submit
                </Button>
            }
            <br/>
            {loading ? 
                <Fade in={loading} out={!loading}><CircularProgress style={{ color: '#797198', marginTop: 50, width: '150px', height: '150px'}}/></Fade>
                :
                null
            }
            {uploadComplete ?
                <Fade in={uploadComplete} out={!uploadComplete}><h2 style={{ color: '#797198', marginTop: 50 }}>Upload Complete</h2></Fade>
                :
                null
            }
        </Grid>
        </>
    )
}
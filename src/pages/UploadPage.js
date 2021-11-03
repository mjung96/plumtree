import React, { useState, useEffect } from 'react';
import { Button } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

export default function UploadPage() {
    const [fileName, setFileName] = useState("");
    const [canClick, setCanClick] = useState(true);
    const [loading, setLoading] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);

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

    const resetUploadPage = () => {
        setLoading(true);
        setCanClick(true);
        setFileName("");

    }

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
            <input 
                type="file"
                accept=".pdf"
                onChange={(e) => readUploadFile(e)}
            />

            <TextField label="Select File" variant="standard" style={{ marginTop: '5%',marginLeft: '38%',width: '344px', height: '40px'}} value={fileName}>
                
            </TextField>

            <br/>

            {canClick ? 
                <Button 
                disabled={true} 
                variant="contained" 
                style={{ marginLeft: '38%', backgroundColor: '#79719880', color: 'white', marginTop: 25, width: '344px', height: '44px' }} 
                disableElevation
                >
                    Submit
                </Button>

                :

                <Button 
                disabled={false} 
                variant="contained" 
                style={{ marginLeft: '38%', backgroundColor: '#797198', color: 'white', marginTop: 25, width: '344px', height: '44px' }} 
                disableElevation 
                component="label"
                onClick={resetUploadPage}
                >
                    Submit
                </Button>
            }

            <br/>

            {loading ? 
                <CircularProgress style={{ color: '#797198', marginTop: 50, marginLeft: '43%', width: '150px', height: '150px'}}/>
                :
                null
            }
            {uploadComplete ?
                <h2 style={{ color: '#797198', marginTop: 50, marginLeft: '40%' }}>Upload Complete</h2>
                :
                null
            }
        </>
    )
}
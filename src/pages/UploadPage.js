import React, { useState, useEffect } from 'react';
import { Button, Grid } from "@material-ui/core";
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';

export default function UploadPage() {
    const [fileName, setFileName] = useState("Select File");
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
        setFileName("Select File");

    }

    // const uploadFile = () => {
    //     console.log("hello");
    // }

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


            {/* <TextField
					onClick={onButtonClick}
					label={file?.name || 'Select File'}
					fullWidth={matches ? true : false}
					style={{ minWidth: (matches ? 0 : 500) }}
					disabled
					className={(file === '' ? classes.fileRoot : classes.afterRoot)}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<InsertDriveFileOutlinedIcon />
							</InputAdornment>
						)
					}}
				/>
				<input type='file' id='file' ref={inputFile} style={{ display: 'none' }} onChange={(e) => { setFile(e.target.files.length === 0 ? file : e.target.files[0]) }} /> */}

            {/* <label htmlFor="contained-button-file">
                <input accept=".pdf" id="contained-button-file" multiple type="file" hidden onChange={(e) => readUploadFile(e)}/>
                <Button variant="contained" component="span" style={{ marginTop: '5%', marginLeft: '38%', width: '344px', height: '40px'}}>
                    {fileName}
                </Button>
            </label> */}

            {/* <input 
                type="file"
                hidden
                accept=".pdf"
                onChange={(e) => readUploadFile(e)}
            />

            <TextField onClick={uploadFile} label="Select File" variant="standard" style={{ marginTop: '5%',marginLeft: '38%',width: '344px', height: '40px'}} value={fileName} /> */}

            {/* <br/>

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
                <CircularProgress style={{ color: '#797198', marginTop: 50, marginLeft: '44%', width: '150px', height: '150px'}}/>
                :
                null
            }
            {uploadComplete ?
                <h2 style={{ color: '#797198', marginTop: 50, marginLeft: '42.5%' }}>Upload Complete</h2>
                :
                null
            } */}
        </>
    )
}
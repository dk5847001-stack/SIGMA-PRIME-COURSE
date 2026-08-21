import "./Home.css";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import Stack from "@mui/material/Stack";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

import { useState } from "react";

export default function Home() {
    let [clickme, setClickme] = useState({
        isClickme: false
    });

    let handleClickButton = () => {
        console.log("button clicked!")
        setClickme({
            isClickme: true
        })
    }



    return (
        <div className="Home">
            <h2>hello, welcome to home page.</h2><hr /><br />
            <div className="loadingIcon">
                <Stack spacing={3}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="success" onClick={handleClickButton}>Send</Button><br />

                    </Stack>
                </Stack>
                <br />
                {
                    clickme.isClickme && (
                        <Alert variant="filled" severity="success">
        This is a filled success Alert.
      </Alert>
                    )
                }
                <br />
                <Button id="btn" loading={clickme.isClickme} variant={clickme.isClickme ? "outlined" : "contained"} loadingPosition="end" color="success" endIcon={<SaveIcon />} onClick={handleClickButton}>{clickme.isClickme ? "Saving" : "Save"}</Button>

            </div>
        </div>
    )
}
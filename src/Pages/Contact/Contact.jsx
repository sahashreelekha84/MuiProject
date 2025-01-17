import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { Paper, Button } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import MessageIcon from '@mui/icons-material/Message';
const Contact = () => {
    return (
        <div>
            <Container>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 3, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField

                            id="input-with-icon-textfield"
                            defaultValue="First Name"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            variant="standard"
                        />
                        <TextField

                            id="input-with-icon-textfield"
                            defaultValue="Last Name"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            variant="standard"
                        />
                    </div>

                    <div>
                        <FormControl sx={{ m: 1, width: '55ch' }} variant="standard">
                            {/* <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel> */}

                            <Input
                                id="input-with-icon-adornment"
                                defaultValue="Email"
                                startAdornment={<InputAdornment position="start">{<MarkunreadIcon />} </InputAdornment>}

                            />
                        </FormControl>

                    </div>
                    <div>
                        <FormControl sx={{ m: 1, width: '55ch' }} variant="standard">
                            {/* <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel> */}

                            <Input
                                id="input-with-icon-adornment"
                                defaultValue="Message"
                                startAdornment={<InputAdornment position="start">{<MessageIcon />}</InputAdornment>}
                            />
                        </FormControl>

                    </div>
                    <div>

                        <Typography my={2} ><Button className="button" sx={{

                            fontFamily: 'monospace',
                            fontWeight: 300,
                            fontSize: "10px",
                            color: 'white',
                            textDecoration: 'none',

                            backgroundColor: " #ab003c",
                            borderRadius: "25px"
                        }}>
                            Contact Us
                        </Button></Typography>
                    </div>
                </Box>
            </Container>
        </div>
    )
}

export default Contact

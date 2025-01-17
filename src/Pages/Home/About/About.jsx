import React from 'react'
import { Paper, Button } from '@mui/material'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
const About = () => {
    return (
        <div>
            <Container>

            <Box sx={{ flexGrow: 1 }}>
                <div>
                    
                </div>

                <Grid container m={5} >
                <Grid size={{ xs: 12, sm:6, md: 6}}>
                <div>
                    
                <img src="https://w0.peakpx.com/wallpaper/462/884/HD-wallpaper-juice-fresh-fruits-water-fruits-juicy-splash.jpg" alt="" height={200}></img>

                </div>
                  
                       
                    </Grid>
                    <Grid size={{ xs: 12, sm:6, md:4}} >
                         <Typography sx={{

                            fontFamily: 'Helvetica Neue',
                            fontWeight: 700,
                            fontSize: "15x",
                            textAlign: "left"

                        }}> BRAND INFO </Typography>
                        <Typography sx={{

                            fontFamily: '"Segoe UI"',
                            fontWeight: 300,
                            fontSize: "12px",
                            textAlign: "justify"

                        }}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex voluptate. Dignissimos magni enim hic modi harum. Doloribus reprehenderit architecto numquam, aut harum similique porro modi, mollitia nisi nemo nam fuga consequatur eligendi nulla facilis obcaecati fugiat ad, voluptatibus quo blanditiis. Molestiae asperiores ipsam explicabo error sequi consectetur veritatis est?                  </Typography>
                        <Typography my={2} sx={{ textAlign: "left" }}><Button className="button" sx={{

                            fontFamily: 'monospace',
                            fontWeight: 300,
                            fontSize: "10px",
                            color: 'white',
                            textDecoration: 'none',

                            backgroundColor: " #ab003c",
                            borderRadius: "25px"
                        }}>
                            Learn More
                        </Button></Typography>
                       
                    </Grid>
                </Grid>

</Box>
            </Container>
        </div>
    )
}

export default About

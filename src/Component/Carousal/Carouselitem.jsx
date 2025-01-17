import React from 'react'
import { Paper, Button } from '@mui/material'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import '../../stylemodule/carousal.css'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
const Carouselitem = (props) => {
  console.log(props);
  return (
    <div>
      <Container>



        <Grid container spacing={2} m={2}>
          <Grid size={{ xs: 12, sm: 6, md: 6 }} style={{ 'float': 'left' }}>

            <Typography sx={{

              fontFamily: 'Helvetica Neue',
              fontWeight: 700,
              fontSize: "30px",
              textAlign: "left"
            }}>{props.item.descrption}</Typography>
            <Typography sx={{

              fontFamily: 'Helvetica Neue',
              fontWeight: 700,
              fontSize: "30px",
              color: "#ffc107",
              textAlign: "left"
            }}>{props.item.sub_description}</Typography >
            <Typography mb={2} sx={{

              fontFamily: '"Segoe UI"',
              fontWeight: 500,
              fontSize: "15px",
              textAlign: "left"

            }}>{props.item.paragraph}</Typography>
            <Typography sx={{

              fontFamily: '"Segoe UI"',
              fontWeight: 300,
              fontSize: "12px",
              textAlign: "justify"

            }} >{props.item.overview}</Typography>
            <Typography my={2} sx={{ textAlign: "left"}}><Button className="button" sx={{

              fontFamily: 'monospace',
              fontWeight: 300,
              fontSize: "10px",
              color: 'white',
              textDecoration: 'none',
             
              backgroundColor: " #ab003c",
              borderRadius: "25px"
            }}>
              Order Now!
            </Button></Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <img src={props.item.image} alt="" height={200} m={2} style={{ 'border-radius': "25px" }}></img>
          </Grid>
        </Grid>


      </Container>
    </div>
  )
}

export default Carouselitem


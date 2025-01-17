import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import { Description } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  let items = [{

    image: "Get In Touch",
    Description: "shreelekha@gmail.com" 

},
{

    image: "Connect",
    Description: "Facebook"
},
{

    image: "Design Services",
    Description: "shreelekha co-found limited",
  
},
{

    image: "Ventures",
    Description: "2No,Ushumpur Pally,Agarpara,Kol-109"
  
}]
  return (
    <div>
      <Paper sx={{backgroundColor:"#ffeb3b"}}>
      <Container maxWidth="md" >
                <Box sx={{ flexGrow: 1 }}>
                 
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 0, sm: 3, md: 3 }} p={2}>

                        {items.map(x => (<Grid size={{ xs: 12, sm: 3, md: 3}}>

                           
                                
                                   
                                
                                        <Typography gutterBottom variant="" component="div" >
                                       {x.image}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                         {x.Description}
                                        </Typography>
                                   
                              
                            
                        </Grid>))}
                    </Grid>
                </Box>
            </Container>
      </Paper>
      
      
      </div>
      
  )
}

export default Footer

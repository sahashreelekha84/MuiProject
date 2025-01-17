import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
const Product = () => {
    let items = [{

        image: "https://media.istockphoto.com/id/164087536/photo/red-apples.jpg?s=612x612&w=0&k=20&c=wk7LPhRXahsfk6tLMWZVvtZ7WUq7-YoYKfGtZhg1Gdc=",
        name: "Fresh Red Apple",
        price: "$3.45"

    },
    {

        image: "https://www.rd.com/wp-content/uploads/2017/12/01_oranges_Finally%E2%80%94Here%E2%80%99s-Which-%E2%80%9COrange%E2%80%9D-Came-First-the-Color-or-the-Fruit_691064353_Lucky-Business.jpg",
        name: "Fresh Orange",
        price: "$3.45"
    },
    {

        image: "https://thumbs.dreamstime.com/b/avocado-green-27157702.jpg",
        name: "Fresh Avocado",
        price: "$4.45"
    },
    {

        image: "https://w0.peakpx.com/wallpaper/267/883/HD-wallpaper-pineapple-fruit-vara-yellow-summer.jpg",
        name: "Fresh Pineapple",
        price: "$4.45"
    },
    {

        image: "https://img.freepik.com/premium-photo/fresh-cherries-hd-8k-wallpaper-stock-photographic-image_890746-95733.jpg",
        name: "Fresh Cherries",
        price: "$4.45"
    },
    {

        image: "https://media.istockphoto.com/id/537403487/photo/kiwi.jpg?s=612x612&w=0&k=20&c=NC7ogHNUxPDFL3SkcTMOe1vrr6p_5p34n7saoI-jhac=",
        name: "Fresh kiwiiiiiiii",
        price: "$4.45"
    }
    ]
    return (
        <div>
            <Container maxWidth="sm">
                <Box sx={{ flexGrow: 1 }}>
                    <Typography  m={2} sx={{

                        fontFamily: '"Segoe UI"',
                        fontWeight: 700,
                        fontSize: "15px",
                        

                    }} >Our Menu</Typography>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 0, sm: 1, md: 2 }}>

                        {items.map(x => (<Grid size={{ xs: 12, sm: 6, md: 4 }}>

                            <Card style={{ "borderRadius": "25px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image={x.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {x.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {x.price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>))}
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default Product

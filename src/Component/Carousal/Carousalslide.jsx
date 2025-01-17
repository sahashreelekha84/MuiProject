import React from 'react'

import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Carouselitem from './Carouselitem';
const Carousalslide = () => {
  let items=[{
descrption: "Healty",
sub_description:"Fresh Fruits!",
paragraph:"Order Now For Fresh Healty Life",
image:"https://png.pngtree.com/thumb_back/fw800/background/20241112/pngtree-a-vibrant-fruit-platter-featuring-mango-kiwi-dragon-fruit-pineapple-and-image_16519575.jpg",
overview:"Healty and Yummy food for fresh morning breakfast Eat Daily for good health and mind Order now and get 20% off on your first order"

  },
  {
    descrption: "Healty",
    sub_description:"Fresh Fruits!",
    paragraph:"Order Now For Fresh Healty Life",
    image:"https://static.vecteezy.com/system/resources/previews/030/093/780/non_2x/fresh-fruits-on-a-plate-ai-generated-free-photo.jpg",
    overview:"Healty and Yummy food for fresh morning breakfast Eat Daily for good health and mind Order now and get 20% off on your first order"
  },
  {
descrption: "Healty",
sub_description:"Fresh Fruits!",
paragraph:"Order Now For Fresh Healty Life",
image:"https://png.pngtree.com/thumb_back/fw800/background/20240708/pngtree-a-plate-of-ice-cream-and-fruit-with-spoon-spoons-image_15990779.jpg",
overview:"Healty and Yummy food for fresh morning breakfast Eat Daily for good health and mind Order now and get 20% off on your first order"
  }

  ]
  return (
    <div>
      <Container>
        {/* <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={8}>{items.map(x=>(<p>{x.descrption}</p>))}

            </Grid>
          </Grid>
        </Box> */}
          <Carousel>
            {
                items.map((item) => <Carouselitem key={item.id} item={item} /> )
            }
        </Carousel>
      </Container>

    </div>
  )
}

export default Carousalslide

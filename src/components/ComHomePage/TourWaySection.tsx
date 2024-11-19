import { Box } from '@mui/material'
import TourWaysCard from './TourWaysCard'
import  Grid  from  "@mui/material/Grid2"
const TourWaySection = () => {
  return (
      <Box  sx={{marginTop :  "2rem"}}>
           <Grid  container spacing={2}>
     <Grid  size ={{md  :  3}}>
     <TourWaysCard  price={134} score={935} disc='گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147' img='/public/images/frankfordDistination/img1.jpg'/>

     </Grid>
     <Grid  size ={{md  :  3}}>
     <TourWaysCard  price={134} score={935} disc='گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147' img='/public/images/frankfordDistination/img2.jpg'/>

     </Grid>
     <Grid  size ={{md  :  3}}>
     <TourWaysCard  price={134} score={935} disc='گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147' img='/public/images/frankfordDistination/img3.jpg'/>

     </Grid>
     <Grid  size ={{md  :  3}}>
     <TourWaysCard  price={134} score={935} disc='گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147' img='/public/images/frankfordDistination/img4.jpg'/>

     </Grid>
        </Grid>
      </Box>
  )
}

export default TourWaySection

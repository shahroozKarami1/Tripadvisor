import { Box } from '@mui/material'
import Grid from "@mui/material/Grid2"
import MoreExploreCard from './MoreExploreCard'
function MoreExploreSection() {
  return (
    <Box  >
      <Grid container spacing={2}>
        <Grid size={{ md: 4 }}>
          <MoreExploreCard img='/public/images/MoreExplore/img1.jpg' disc='10 مکان باورنکردنی برای بازدید در ماه دسامبر در سراسر جهان' />
        </Grid>
        <Grid size={{ md: 4 }}>
          <MoreExploreCard img='/public/images/MoreExplore/img2.jpg' disc='10 مکان باورنکردنی برای بازدید در ماه دسامبر در سراسر جهان' />
        </Grid>
        <Grid size={{ md: 4 }}>
          <MoreExploreCard img='/public/images/MoreExplore/img3.jpg' disc='10 مکان باورنکردنی برای بازدید در ماه دسامبر در سراسر جهان' />
        </Grid>
      </Grid>


    </Box>
  )
}

export default MoreExploreSection
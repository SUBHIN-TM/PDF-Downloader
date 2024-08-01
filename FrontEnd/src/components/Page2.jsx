import { Box, Typography, Grid } from '@mui/material';
import image2 from "../assets/Artboard 3.jpg"
const Page2 = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} direction='column' alignItems="center">
        <Grid item>
          <Typography>
           
          </Typography>
        </Grid>
        <Grid item>
          <Box component={"img"} sx={{
            width: '100%',
            maxWidth: 500,
            height: 'auto'
          }} src={image2}
            alt="Artboard2">
          </Box>
        </Grid>
      </Grid>
    </Box>

  )
}

export default Page2
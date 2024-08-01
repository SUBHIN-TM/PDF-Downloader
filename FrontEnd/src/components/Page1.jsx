import { Box, Typography, Grid } from '@mui/material';
import image1 from "../assets/Artboard 1.jpg"



const Page1 = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h6" component="span">
           
          </Typography>
        </Grid>
        <Grid item>
          <Box
            component="img"
            sx={{
              width: '100%',
              maxWidth: 500,
              height: 'auto'
            }}
            src={image1}
            alt="Artboard1"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Page1;

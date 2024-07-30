import { Box, Typography, Grid } from '@mui/material';

const Page2 = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} direction='column' alignItems="center">
        <Grid item>
          <Typography>
            Footer Page
          </Typography>
        </Grid>
        <Grid item>
          <Box component={"img"} sx={{
            width: '100%',
            maxWidth: 500,
            height: 'auto'
          }} src="https://freefrontend.com/assets/img/tailwind-footers/thumb-mini.png"
            alt="Footer image">
          </Box>
        </Grid>
      </Grid>
    </Box>

  )
}

export default Page2
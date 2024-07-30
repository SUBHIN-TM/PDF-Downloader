import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Page1 = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h6" component="span">
            Header Page
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
            src="https://www.ias.edu/sites/default/files/institute-for-advanced-study-fuld-hall.jpg"
            alt="Institute for Advanced Study"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Page1;

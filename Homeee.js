import React from 'react';
import { Grid, Card, CardContent, Typography,Box } from '@mui/material';
import Divider from '@mui/material/Divider';

function Homeee() {
  return (
    <>
    
    <Typography variant="h1" >
      h1.heading
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Task to do
              <Divider />
            </Typography>
            <Typography variant="body2">
              Content for Card 1 goes here.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              In progress
              <Divider  sx={{ borderBottomWidth: 2}}/>
            </Typography>
            <Box bgcolor="#F5CF29" color="#1F271B" p={2} mt={2} borderRadius={2}>
              Box 1
            </Box>
            <Box bgcolor="#07DA9A" color="#1F271B" p={2} mt={2} borderRadius={2}>
              Box 2
            </Box>
            <Box bgcolor="#59D2FE" color="i#1F271B" p={2} mt={2} borderRadius={2}>
              Box 3
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Task Done
              <Divider />
            </Typography>
            <Typography variant="body2">
              Content for Card 3 goes here.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </>
  );
}

export default Homeee;

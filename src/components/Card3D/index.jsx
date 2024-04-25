import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from 'react-animated-3d-card';

const Card3D = ({ cardsArray }) => {
  return (
    <Box>
      <Grid
        container
        justifyContent='space-around'
        alignItems='center'
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cardsArray.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.title}>
            <Card
              style={{
                width: '200px',
                height: '300px',
                cursor: 'pointer',
              }}
            >
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {item.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Card3D;

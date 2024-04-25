import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from 'react-animated-3d-card';

const Card3D = ({ cardsArray }) => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        container
        spacing={2}
      >
        {cardsArray.map((item) => (
          <Grid
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            item
            xs={12}
            sm={6}
            md={4}
            key={item.title}
          >
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

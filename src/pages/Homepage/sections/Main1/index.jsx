import React from 'react';
import { Typography, Button, Grid, useMediaQuery } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import './Main1.css';

const Main1 = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <Grid
      className='main1'
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: '100vh', textAlign: 'center' }}
    >
      <Grid item style={{ maxWidth: '100%' }}>
        <Typography variant='h1' color={'white'} style={{ fontSize: isSmallScreen ? '2rem' : '5rem', textAlign: 'center' }}>
          Welcome to Liks
        </Typography>
        <Typography variant='h6' color={'white'} style={{ fontSize: isSmallScreen ? '0.8rem' : '1rem', textAlign: 'center' }}>
          Liks is a prominent Dutch exporter of Specialty Chemicals, serving the
          international markets of Oil & Gas, Mining, <br />
          Refractories, Industrial Chemicals, and Agro-Chemicals
        </Typography>
      </Grid>
      <Grid item style={{ paddingTop: 50 }}>
        <Button
          sx={{
            height: 58,
            borderRadius: 90,
            backgroundColor: '#F8B232',
            color: '#000',
            textTransform: 'none'
          }}
          variant='contained'
          endIcon={<ArrowRightIcon />}
        >
          <Typography
            sx={{
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: '600',
              fontSize: '18px',
              lineHeight: '18px',
            }}
          >
            Learn More
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Main1;

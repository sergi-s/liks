import React from 'react';
import { Typography, Button, Grid, Container } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './Main1.css';

const Main7 = () => {
  return (
    <Grid container alignItems='center' justifyContent='center'>
      <Grid
        className='main2'
        item
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{
          width: '100%',
          height: '335.39px',
          textAlign: 'center',
          borderRadius: '20px',
          padding: '0 20px',
          boxSizing: 'border-box',
        }}
      >
        <Grid item>
          <Typography
            color={'white'}
            sx={{
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: '800',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: '1.2',
              letterSpacing: '-1.5px',
            }}
          >
            We Would Love To Hear From You
          </Typography>
          <Typography
            variant='h6'
            color={'white'}
            sx={{
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: '600',
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              lineHeight: '1.5',
              letterSpacing: '-0.4px',
            }}
          >
            Feel free to call us or send a message
          </Typography>
        </Grid>
        <Grid item style={{ paddingTop: 50 }}>
          <Button
            sx={{
              width: '100%',
              maxWidth: '202.45px',
              height: '58px',
              borderRadius: '90px',
              backgroundColor: '#F8B232',
              color: '#000',
              textTransform: 'none',
            }}
            variant='contained'
            endIcon={<ArrowRightIcon />}
          >
            <Typography
              sx={{
                fontFamily:
                  'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                fontWeight: '600',
                fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                lineHeight: '1',
              }}
            >
              Get In Touch
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main7;

import React from 'react';
import { Grid, Typography } from '@mui/material';

function Card11({ content }) {
  return (
    <Grid
      container
      sx={{
        alignItems: 'start',
        borderRadius: '20px',
        backgroundColor: '#eceff3',
        padding: '40px 40px 64px 40px',
        maxWidth: '524.27px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      <Grid item md={12} sx={{ height: '92px' }}>
        <img
          loading='lazy'
          src={content.svg}
          alt=''
          className='img'
          style={{
            objectFit: 'contain',
            width: '85px',
            height: '85px',
            padding: '15px',
            borderRadius: '30px',
            backgroundColor: 'white',
          }}
        />
      </Grid>
      <Grid item container md={12} sx={{ marginTop: '32px' }}>
        <Grid item md={12}>
          <Typography
            sx={{
              justifyContent: 'center',
              color: 'rgba(0, 0, 0, 0.43)',
              letterSpacing: '-0.8px',
              whiteSpace: 'nowrap',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 800,
              fontSize: { xs: '18px', md: '22px' },
              lineHeight: '22px',
            }}
          >
            {content.header}
          </Typography>
        </Grid>
        <Grid item md={12} sx={{ marginTop: '12px' }}>
          <Typography
            sx={{
              justifyContent: 'center',
              color: '#000',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: { xs: '14px', md: '18px' },
              lineHeight: '22px',
            }}
          >
            {content.text}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Card11;

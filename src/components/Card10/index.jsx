import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

function ProcessingUnitsComponent({ content }) {
  return (
    <Container
      sx={{
        alignItems: 'start',
        borderRadius: '20px',
        boxShadow: `${content.shadowColor}`,
        backgroundColor: '#f1f4f6',
        display: 'flex',
        flexDirection: 'column',
        padding: '50px 20px 50px 20px',
        height: 'auto',
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'inherit',
              alignItems: 'self-start',
              padding: '10px',
              gap: '1rem'
            }}
          >
            <img
              loading='lazy'
              src={content.svg}
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                width: '82px',
                overflow: 'hidden',
              }}
              alt='Processing Units'
            />
            <Typography
              sx={{
                justifyContent: 'center',
                color: `${content.header.color}`,
                letterSpacing: '-0.5px',
                textAlign: 'center',
                marginTop: '10px',
                font: '800 24px/32px Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              }}
              variant='h2'
            >
              {content.header.text}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '20px' }}>
          <Typography
            sx={{
              font: '500 16px/24px Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            }}
            variant='body1'
          >
            {content.text}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProcessingUnitsComponent;

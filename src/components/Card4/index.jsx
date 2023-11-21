import React from 'react';
import { Button, Typography, Grid } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Arrow from '../../assets/YArrow.svg';

function UpdatedComponent({ content }) {
  return (
    <Grid
      container
      sx={{
        borderRadius: '20px',
        backgroundColor: '#2B2C2F',
        padding: '25px',
        maxWidth: '1140px',
        width: '100%',
        margin: 'auto',
      }}
    >
      <Grid item xs={12} md={4} sx={{ width: '100%', marginBottom: { xs: '20px', md: 0 } }}>
        <img
          src={content.image}
          alt='materialImage'
          style={{ borderRadius: '20px', width: '100%', height: '265px' }}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ paddingLeft: { xs: '0', md: '78.95px' } }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              sx={{
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'left',
                fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                fontWeight: 600,
                fontSize: { xs: '24px', md: '30px' },
                lineHeight: { xs: '28px', md: '30px' },
                marginTop: '4px',
                marginBottom: '20px',
              }}
            >
              {content.text.header}
            </Typography>
          </Grid>
          {content.text.options.map((option, index) => (
            <Grid
              item
              xs={12}
              md={12}
              direction='row'
              style={{ display: 'flex', marginBottom: '8px' }}
            >
              <img
                src={Arrow}
                alt='Arrow'
                style={{
                  width: '14px',
                  height: '19px',
                  padding: '1.5px 0 1.5px 0',
                  marginRight: '2.5px',
                }}
              />
              <span
                variant='body1'
                style={{
                  color: '#fff',
                  fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                  fontWeight: 600,
                  fontSize: { xs: '14px', md: '16px' },
                  lineHeight: { xs: '16px', md: '19px' },
                }}
              >
                {option.text}
              </span>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={2} sx={{ textAlign: { xs: 'center', md: 'end' } }}>
        <Button
          color='inherit'
          style={{
            color: '#fff',
            textTransform: 'none',
            borderRadius: '10px',
          }}
          sx={{ width: { xs: '100%', md: '151px' }, height: '43px' }}
          variant='outlined'
          endIcon={<ArrowRightIcon />}
        >
          <Typography>{content.button.text}</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default UpdatedComponent;

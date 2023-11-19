import React from 'react'
import { Button, Typography, Grid } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Arrow from '../../assets/YArrow.svg'

function UpdatedComponent ({ content }) {
  return (
      <Grid
        container
        sx={{
          borderRadius: '20px',
          backgroundColor: '#2B2C2F',
          padding: '25px',
          width: '1140px',
          height: '315px'
        }}
      >
        <Grid item md={4} sx={{ width: '313.95px' }}>
          <img
            src={content.image}
            alt='materialImage'
            style={{ borderRadius: '20px', width: '100%', height: '265px' }}
          />
        </Grid>
        <Grid item md={6} paddingLeft={'78.95px'}>
          <Grid container>
            <Grid item md={12}>
              <Typography
                sx={{
                  justifyContent: 'center',
                  color: '#fff',
                  textAlign: 'left',
                  fontFamily:
                    'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                  fontWeight: 600,
                  fontSize: '30px',
                  lineHeight: '30px',
                  marginTop: '4px',
                  marginBottom: '20px'
                }}
              >
                {content.text.header}
              </Typography>
            </Grid>
            {content.text.options.map((option, index) => (
              <Grid
                item
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
                    marginRight: '2.5px'
                  }}
                />
                <span
                  variant='body1'
                  style={{
                    color: '#fff',
                    fontFamily:
                      'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '19px'
                  }}
                >
                  {option.text}
                </span>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={2} sx={{ textAlign: 'end' }}>
          <Button
            color='inherit'
            style={{
              color: '#fff',
              textTransform: 'none',
              borderRadius: '10px'
            }}
            sx={{ width: 151, height: 43 }}
            variant='outlined'
            endIcon={<ArrowRightIcon />}
          >
            <Typography>{content.button.text}</Typography>
          </Button>
        </Grid>
      </Grid>
  )
}

export default UpdatedComponent

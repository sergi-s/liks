import React from 'react'
import { Typography, Button, Grid, Container } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import './Main1.css'

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
          width: '1574.41px',
          height: '335.39px',
          textAlign: 'center',
          borderRadius: '20px'
        }}
      >
        <Grid item>
          <Typography
            color={'white'}
            sx={{
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: '800',
              fontSize: '50px',
              lineHeight: '56px',
              letterSpacing: '-1.5px'
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
              fontSize: '18px',
              lineHeight: '27px',
              letterSpacing: '-0.4px'
            }}
          >
            Feel free to call us or send a message
          </Typography>
        </Grid>
        <Grid item style={{ paddingTop: 50 }}>
          <Button
            sx={{
              width: 202.45,
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
                lineHeight: '18px'
              }}
            >
              Get In Touch
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Main7

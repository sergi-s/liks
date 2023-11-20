import React from 'react'
import { Grid, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline/CssBaseline'

const Main2 = props => {
  return (
    <Grid
      container
      sx={{
        padding: '24px',
        '@media (min-width: 600px)': {
          padding: '48px',
        },
        '@media (min-width: 960px)': {
          padding: '74px 280px 72px 280px',
        },
      }}
    >
      <CssBaseline />
      <Grid item xs={12}>
        <Typography
          sx={{
            width: '100%',
            fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: '600',
            lineHeight: '25px',
            color: '#F8B23285',
            fontSize: '20px',
            textAlign: 'center',
            '@media (min-width: 600px)': {
              fontSize: '25px',
            },
          }}
        >
          Milestones
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CssBaseline />
        <Typography
          sx={{
            fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: '800',
            fontSize: '30px',
            lineHeight: '40px',
            textAlign: 'center',
            '@media (min-width: 600px)': {
              fontSize: '55px',
              lineHeight: '65px',
            },
          }}
        >
          Providing high-performance solutions to meet the needs of the global
          chemicals market.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Main2

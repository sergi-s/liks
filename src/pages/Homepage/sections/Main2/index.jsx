import React from 'react'
import { Grid, Typography } from '@mui/material'

import CssBaseline from '@mui/material/CssBaseline/CssBaseline'

const Main2 = props => {
  return (
    <Grid
      container
      sx={{
        padding: '74px 280px 72px 280px'
      }}
    >
      <CssBaseline />
      <Grid item md={12}>
        <Typography
          sx={{
            width: '100%',
            fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: '600',
            fontSize: '25px',
            lineHeight: '25px',
            color: '#F8B23285',
            textAlign: 'center'
          }}
        >
          Milestones
        </Typography>
      </Grid>
      <Grid item md={12}>
        <CssBaseline />
        <Typography
          sx={{
            fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: '800',
            fontSize: '55px',
            lineHeight: '65px',
            letterSpacing: '-2.2px',
            textAlign: 'center'
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

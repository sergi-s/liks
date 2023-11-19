import React from 'react'
import { Typography, Grid } from '@mui/material'

function Header ({ image, text1, text2 }) {
  return (
    <Grid
      container
      direction='column'
      justifyContent='flex-start'
      alignItems='center'
      sx={{marginTop:"40px"}}
    >
      <Grid
        item
        sx={{
          borderRadius: '30px',
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${image})`,
          width: '1766.41px',
          height: '756px'
        }}
      >
        <Typography
          sx={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: 800,
            marginTop: "243px",
            fontSize: '22px',
            lineHeight: '22px',
            letterSpacing: '-0.4px',
            fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif'
          }}
        >
          {text1}
        </Typography>
        <Typography
          sx={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: 800,
            fontSize: '60px',
            fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif'
          }}
        >
          {text2}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Header

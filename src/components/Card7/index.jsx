import React from 'react'
import { Box, Typography } from '@mui/material'

import Image from '../src/assets/images/drilling1.png'
const content={
    image:  Image ,
    header: 'Aluminium Stearate',
  }

function MyUpdatedComponent ({ content }) {
  return (
    <Box
      sx={{
        justifyContent: 'center',
        borderRadius: '20px',
        border: '3px solid rgba(0, 26, 57, 0.93)',
        boxShadow: '10px 10px 0px -4px rgba(0, 26, 57, 0.93)',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        flexDirection: 'column',
        width: "507.61px",
        height: "341px"
      }}
    >
      <img
        loading='lazy'
        src={content.image}
        style={{
          borderRadius: "17px 17px 0 0",
          width: "501.61px",
          height: "260px"
        }}
        alt='Aluminium Stearate'
      />
      <Typography
        sx={{
          color: '#10417a',
          textAlign: 'center',
          margin: '25px 0 25px 0',
          fontWeight: 800,
          fontSize: 25,
          fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif'
        }}
      >
        {content.header}
      </Typography>
    </Box>
  )
}

export default MyUpdatedComponent

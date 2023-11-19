import React from 'react'
import { Box, Typography } from '@mui/material'

function Card2 ({content}) {
  return (
    <Box
      sx={{
        borderRadius: '20px',
        backgroundColor: '#f1f4f6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '337px',
        height: '216px'
      }}
    >
      <Typography
        variant='h1'
        sx={{
          marginTop: '40px',
          color: '#ee6c4d',
          letterSpacing: '-3.8px',
          fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
          fontWeight: 700,
          fontSize: '60px',
          lineHeight: '85px'
        }}
      >
        {content.header}
      </Typography>
      <Typography
        sx={{
          justifyContent: 'center',
          color: '#10417a',
          textAlign: 'center',
          letterSpacing: '-1.2px',
          fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
          fontWeight: 800,
          fontSize: '24px',
          lineHeight: '30px'
        }}
      >
        {content.text}
      </Typography>
    </Box>
  )
}
export default Card2

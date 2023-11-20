import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Card5({ content }) {
  return (
    <Box
      sx={{
        alignItems: 'start',
        borderRadius: '20px',
        background: `${content.backColor}`,
        boxShadow: `${content.shadow}`,
        display: 'flex',
        flexDirection: 'column',
        padding: ['20px', '30px', '50px'],
        height: 'auto',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          alignItems: ['center', 'start'],
          gap: '12px',
        }}
      >
        <img
          loading='lazy'
          src={content.header.image}
          alt='logo'
          style={{
            width: ['100%', '78px'],
            marginBottom: ['10px', '0'],
          }}
        />
        <Typography
          sx={{
            justifyContent: 'center',
            color: `${content.header.color}`,
            textAlign: ['center', 'left'],
            font: '800 40px Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            flex: 1,
            overflowWrap: 'break-word'
          }}
        >
          {content.header.mark}
        </Typography>
      </Box>
      <Typography
        sx={{
          justifyContent: 'center',
          color: '#10417a',
          alignSelf: 'stretch',
          maxWidth: '100%',
          margin: '20px 0 30px',
          font: '500 14px/24px Manrope, -apple-system, Roboto, Helvetica, sans-serif',
        }}
      >
        {content.text}
      </Typography>
    </Box>

  )
}

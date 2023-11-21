import React from 'react';
import { Box, Typography } from '@mui/material';

function Card8({ content }) {
  return (
    <Box
      style={{
        height: "auto",
        justifyContent: 'center',
        alignItems: 'start',
        borderRadius: '20px',
        boxShadow: `${content.shadowColor}`,
        backgroundColor: '#f1f4f6',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        '@media (min-width: 600px)': {
          flexDirection: 'row',
        },
      }}
    >
      <img
        loading='lazy'
        src={content.image}
        style={{
          width: '95px',
          height: '95px',
          marginRight: '10px',
        }}
        alt='Warehousing Facilities'
      />
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          style={{
            fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '32px',
            marginBottom: '10px',
          }}
        >
          {content.header}
        </Typography>
        <Typography
          style={{
            fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '24px',
          }}
        >
          {content.text}
        </Typography>
      </Box>
    </Box>
  );
}

export default Card8;

import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Card3({ content }) {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          borderRadius: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.09)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 10px', // Padding adjusted for smaller screens
          width: '100%',
          height: '196px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '70px',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px'
          }}
        >
          <img
            loading="lazy"
            src={content.image}
            alt="Powder"
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
              width: '100%',
              height: '70px' // Adjusted height for smaller screens
            }}
          />
          <Typography
            sx={{
              justifyContent: 'center',
              color: '#fff',
              textAlign: 'center',
              letterSpacing: '-0.2px',
              whiteSpace: 'nowrap',
              fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 700,
              fontSize: 16, // Font size adjusted for smaller screens
              lineHeight: '20px', // Line height adjusted for smaller screens
              marginTop: '10px' // Adjusted margin for smaller screens
            }}
          >
            {content.text1}
          </Typography>
          <Typography
            sx={{
              justifyContent: 'center',
              color: '#fff',
              textAlign: 'center',
              letterSpacing: '-0.2px',
              fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 700,
              fontSize: 16, // Font size adjusted for smaller screens
              lineHeight: '20px' // Line height adjusted for smaller screens
            }}
          >
            {content.text2}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Card3;

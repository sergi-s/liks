import React from 'react';
import { Grid, Typography } from '@mui/material';
import Card3 from '../../../../components/Card3';
import PowderBlending from '../../../../assets/Homepage/svg/PowderBlending.svg';
import LiquidBlending from '../../../../assets/Homepage/svg/LiquidBlending.svg';
import Packaging from '../../../../assets/Homepage/svg/Packaging.svg';
import TechnicalServices from '../../../../assets/Homepage/svg/TechnicalServices.svg';

export default function index() {
  const cardItems = [
    { id: 1, image: PowderBlending, text1: 'Powder', text2: 'Blending' },
    { id: 2, image: LiquidBlending, text1: 'Liquid', text2: 'Blending' },
    { id: 3, image: Packaging, text1: 'Packaging', text2: '' },
    { id: 4, image: TechnicalServices, text1: 'Technical', text2: 'Services' }
  ];

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        padding: '20px', // Padding adjusted for smaller screens
        backgroundColor: '#2B2C2F',
        display: 'flex'
      }}
    >
      <Grid item xs={12}>
        <Typography
          sx={{
            fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: '800',
            fontSize: '28px', // Font size adjusted for smaller screens
            lineHeight: '32px', // Line height adjusted for smaller screens
            letterSpacing: '-2.2px',
            color: '#FFF',
            textAlign: 'center'
          }}
        >
          Our Capabilities
        </Typography>
      </Grid>
      {cardItems.map((cardItem) => (
        <Grid item key={cardItem.id} xs={12} sm={6} md={3}>
          <Card3
            content={{
              image: cardItem.image,
              text1: cardItem.text1,
              text2: cardItem.text2
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}

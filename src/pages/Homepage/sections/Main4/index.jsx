import React from 'react'
import { Grid, Typography } from '@mui/material'
import Card3 from '../../../../components/Card3'
import PowderBlending from '../../../../assets/Homepage/svg/PowderBlending.svg'
import LiquidBlending from '../../../../assets/Homepage/svg/LiquidBlending.svg'
import Packaging from '../../../../assets/Homepage/svg/Packaging.svg'
import TechnicalServices from '../../../../assets/Homepage/svg/TechnicalServices.svg'

export default function index () {
  const cardItems = [
    { id: 1, image: PowderBlending, text1: 'Powder', text2: 'Blending' },
    { id: 2, image: LiquidBlending, text1: 'Liquid', text2: 'Blending' },
    { id: 3, image: Packaging, text1: 'Packaging', text2: '' },
    { id: 4, image: TechnicalServices, text1: 'Technical', text2: 'Services' }
  ]

  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{
        height: '369.59px',
        padding: '76.8px',
        backgroundColor: '#2B2C2F',
        display: 'flex'
      }}
    >
      <Grid item>
        <Typography
          sx={{
            fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: '800',
            fontSize: '40px',
            lineHeight: '40px',
            letterSpacing: '-2.2px',
            color: '#FFF',
            textAlign: 'center'
          }}
        >
          Our Capabilities
        </Typography>
      </Grid>
      {cardItems.map(cardItem => (
        <Grid item key={cardItem.id}>
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
  )
}

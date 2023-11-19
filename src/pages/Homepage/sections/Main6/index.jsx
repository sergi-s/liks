import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import CardImage1 from '../../../../assets/Homepage/images/cardImage1.png'
import CardImage2 from '../../../../assets/Homepage/images/cardImage2.png'
import CardImage3 from '../../../../assets/Homepage/images/cardImage3.png'
import Card4 from '../../../../components/Card4'
const Main5 = () => {
  const cardItems = [
    {
      image: CardImage1,
      text: {
        header: 'Drilling Additives',
        options: [
          { text: 'Deflocculants Thinners and Dispersants', url: 'url' },
          { text: 'Filtration Control Agents', url: 'url' },
          { text: 'Shale Stabilizers', url: 'url' },
          { text: "LCM's", url: 'url' },
          { text: 'Viscosifiers', url: 'url' },
          { text: 'Weighting Agents', url: 'url' }
        ]
      },
      button: { text: 'Learn More', url: '' }
    },
    {
      image: CardImage2,
      text: {
        header: 'Industrail Chemicals',
        options: [
          { text: 'Deflocculants Thinners and Dispersants', url: 'url' },
          { text: 'Filtration Control Agents', url: 'url' },
          { text: 'Shale Stabilizers', url: 'url' },
          { text: "LCM's", url: 'url' },
          { text: 'Viscosifiers', url: 'url' },
          { text: 'Weighting Agents', url: 'url' }
        ]
      },
      button: { text: 'Learn More', url: '' }
    },
    {
      image: CardImage3,
      text: {
        header: 'Agro Chemicals',
        options: [
          { text: 'Deflocculants Thinners and Dispersants', url: 'url' },
          { text: 'Filtration Control Agents', url: 'url' },
          { text: 'Shale Stabilizers', url: 'url' },
          { text: "LCM's", url: 'url' },
          { text: 'Viscosifiers', url: 'url' },
          { text: 'Weighting Agents', url: 'url' }
        ]
      },
      button: { text: 'Learn More', url: '' }
    }
  ]

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        height: '1142.39px',
        padding: '96px 192px 96px 192px',
        alignItems: 'flex-start'
      }}
    >
      <Grid item container md={3}>
        <Grid item container md={12}>
          <Typography
            sx={{
              width: '100%',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: '800',
              fontSize: '50px',
              lineHeight: '50px',
              letterSpacing: '-1.2px'
            }}
          >
            Product
          </Typography>
        </Grid>
        <Grid item container md={12}>
          <Typography
            sx={{
              width: '100%',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: '800',
              fontSize: '50px',
              lineHeight: '50px',
              letterSpacing: '-1.2px'
            }}
          >
            Range
          </Typography>
        </Grid>
      </Grid>
      <Grid item container md={9}>
        {cardItems.map((cardItem, index) => (
          <Grid key={index} item padding>
            <Card4 content={cardItem} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Main5

import React from 'react'
import { Grid, Typography } from '@mui/material'
import Card9 from '../../../../components/Card9'
import Vector1 from '../../../../assets/Quality/SVG/card1.svg'
import Vector2 from '../../../../assets/Quality/SVG/card2.svg'
import Vector3 from '../../../../assets/Quality/SVG/card3.svg'
import Vector4 from '../../../../assets/Quality/SVG/card4.svg'
import Vector5 from '../../../../assets/Quality/SVG/card5.svg'
import Vector6 from '../../../../assets/Quality/SVG/card6.svg'
import Vector7 from '../../../../assets/Quality/SVG/card7.svg'
import Vector8 from '../../../../assets/Quality/SVG/card8.svg'
import Vector9 from '../../../../assets/Quality/SVG/card9.svg'

// const content={
//   shadowColor: "10px 10px 0px -2px rgba(255, 179, 34, 0.52)",
//   image: SVG,
//   header: 'HP/HT Rheometer',
// }

const Main2 = props => {
  const cardItems1 = [
    {
      id: 1,
      shadowColor: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
      image: Vector1,
      header: 'HP/HT Rheometer'
    },
    {
      id: 2,
      shadowColor: '10px 10px 0px -2px rgba(255, 179, 34, 0.52)',
      image: Vector2,
      header: 'UV/Vis Spectrophotometry'
    },
    {
      id: 3,
      shadowColor: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
      image: Vector3,
      header: 'Specific gravity by pycnometer'
    },
    {
      id: 4,
      shadowColor: '10px 10px 0px -2px rgba(255, 179, 34, 0.52)',
      image: Vector4,
      header: 'Sieve analysis – Wet and Dry'
    }
  ]
  const cardItems2 = [
    {
      id: 5,
      shadowColor: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
      image: Vector5,
      header: 'pH'
    },
    {
      id: 6,
      shadowColor: '10px 10px 0px -2px rgba(255, 179, 34, 0.52)',
      image: Vector6,
      header: 'Viscosity'
    },
    {
      id: 7,
      shadowColor: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
      image: Vector7,
      header: 'Titrations'
    },
    {
      id: 8,
      shadowColor: '10px 10px 0px -2px rgba(255, 179, 34, 0.52)',
      image: Vector8,
      header: 'Density'
    },
    {
      id: 9,
      shadowColor: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
      image: Vector9,
      header: 'Fluid Loss'
    }
  ]
  return (
    <Grid
      container
      sx={{
        padding: '0 153.59px 10px 153.59px'
      }}
    >
      <Grid container spacing={3} sx={{ marginTop: '30px' }}>
        {cardItems1.map(cardItem => (
          <Grid item md={3}>
            <Card9 content={cardItem} />
          </Grid>
        ))}
      </Grid>
      <Grid container columns={10} spacing={3} sx={{ marginTop: '60px' }}>
        {cardItems2.map(cardItem => (
          <Grid item md={2}>
            <Card9 content={cardItem} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Main2

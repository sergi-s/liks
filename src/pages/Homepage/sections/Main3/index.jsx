import React from 'react'
import { Grid, Typography, Link } from '@mui/material'
import Card1 from '../../../../components/Card1'
import Card2 from '../../../../components/Card2'

const Main3 = () => {
  const cardItems = [
    { id: 1, header: '30', text: 'Countries' },
    { id: 2, header: '1,500', text: 'On-Time Shipments' },
    { id: 3, header: '6000', text: 'Man-hours on R&D Projects' },
    { id: 4, header: '0', text: 'Customer Complaints' }
  ]
  return (
    <Grid container sx={{ display: 'flex', height: '605px',padding: '0 192px 154px 192px' }}>
      <Grid item md={6} >
        <Card1
          content={{
            header: 'Excellence, Dependability, and Honesty.',
            text: 'At Liks, our dedication lies in delivering top-tier engineered materials and additives designed for the worldwide energy market. Our distinction arises from an unwavering commitment to product excellence, quality, and process innovation, complemented by unparalleled technical support and service. Immerse yourself in the Proec distinction—where innovation, collaboration, and excellence converge.'
          }}
          button={{ text: 'About Our Company' }}
        />
      </Grid>
      <Grid
        item
        container
        md={6}
        sx={{ paddingLeft: '30px', alignItems: 'start' }}
      >
        {cardItems.map(cardItem => (
          <Grid key={cardItem.id} item md={6} sx={{ padding: '0 40px 10px 10px' }}>
            <Card2 content={cardItem} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Main3

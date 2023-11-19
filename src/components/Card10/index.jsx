import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material'

// import SVG from '../src/assets/svg/SVG.svg'
// const content={
//   shadowColor: "10px 10px 0px -2px rgba(90, 165, 255, 0.53)",
//   svg: SVG ,
//   header: 'Processing Units',
//   text: "Liks Ltd. boasts an advanced processing facility that is at the forefront of manufacturing various approved sophisticated additives and materials through exclusive manufacturing processes. Our adaptable manufacturing infrastructure allows us to diversify our product range and adjust our product mix according to shifts in customer demand, catering to a spectrum of customer requirements, from laboratory-scale research to commercial production. We uphold rigorous adherence and compliance with our customers' packaging policies.Facility – Located in the Netherlands, 50 kilometers east of Amsterdam, the facility specializes in powder products and custom powder blends. It stands as one of the company's longest-serving plants, equipped with highly skilled personnel."
// }

function ProcessingUnitsComponent ({content}) {
  return (
    <Container
      sx={{
        alignItems: 'start',
        borderRadius: '20px',
        boxShadow: `${content.shadowColor}`,
        backgroundColor: '#f1f4f6',
        display: 'flex',
        flexDirection: 'column',
        padding: '50px 50px 0 50px',
        height: "547.56px"
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Box
            sx={{
              display: 'flex',
              width: '336px',
              gap: '20px'
            }}
          >
            <img
              loading='lazy'
              src={content.svg}
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                width: '82px',
                overflow: 'hidden'
              }}
              alt='Processing Units'
            />
            <Typography
              sx={{
                justifyContent: 'center',
                color: `${content.header.color}`,
                letterSpacing: '-0.5px',
                alignSelf: 'center',
                whiteSpace: 'nowrap',
                margin: 'auto 0',
                font: '800 30px/32px Manrope, -apple-system, Roboto, Helvetica, sans-serif'
              }}
              variant='h2'
            >
              {content.header.text}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '20px' }}>
          <Typography
            sx={{
              //justifyContent: 'center',
              //alignSelf: 'stretch',
              font: '500 16px/24px Manrope, -apple-system, Roboto, Helvetica, sans-serif'
            }}
            variant='body1'
          >
            {content.text}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProcessingUnitsComponent

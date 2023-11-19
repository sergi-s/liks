import React from 'react'
import { Box, Typography, } from '@mui/material'

// import SVG from '../src/assets/svg/SVG.svg'
// const content={
//   shadowColor1: "10px 10px 0px -2px rgba(255, 179, 34, 0.52)",
//   shadowColor2: "10px 10px 0px -2px rgba(90, 165, 255, 0.53)",
//   image: SVG,
//   header: 'Warehousing Facilities',
//   text: 'Each production unit is equipped with self-contained open and losed warehouses designed for the storage of raw materials, onsumables,        packing materials, and a dedicated space for finished goods. The total        covered storage area spans 100,000 square feet, including a 50,000        square feet warehouse located at Mundra port. Additionally, there is an        open storage facility covering approximately 400,000 square feet. All        manufacturing units are outfitted with a range of customized packaging        solutions to meet specific requirements.'
// }

function Card8 ({content}) {

  return (
    <Box
      sx={{
        height: "466px",
        justifyContent: 'center',
        alignItems: 'start',
        borderRadius: '20px',
        boxShadow: `${content.shadowColor}`,
        backgroundColor: '#f1f4f6',
        display: 'flex',
        flexDirection: 'column',
        padding: '50px'
      }}
    >
      <img
        loading='lazy'
        src={content.image}
        style={{
          width: '95px',
          marginBottom: "7px"
        }}
        alt='Warehousing Facilities'
      />
      <Typography
        sx={{
          justifyContent: 'center',
          alignSelf: 'stretch',
          fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
          fontWeight: '700',
          fontSize: '32px',
          lineHeight: '32px',
          padding: "20px 0 20px 0"
        }}
      >
        {content.header}
      </Typography>
      <Typography
        sx={{
          justifyContent: 'center',
          width: '674px',
          fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
          fontWeight: '600',
          fontSize: '16px',
          lineHeight: '24px'
        }}
      >
        {content.text}
      </Typography>
    </Box>
  )
}

export default Card8

import React from 'react'
import { Box, Typography } from '@mui/material'


// import Logo from '../src/assets/svg/logo.svg'
// const contentColor="linear-gradient(127deg, #eff6ff 0%, #deedff 100%)" 
// const content={
//   header: { image: Logo, mark: 'Liks' },
//   text: "Liks B.V. is led by Daan van der Velden as part of the KN Van der Velden Group. This group stands as one of the Netherlands' oldest industrial entities with diverse interests encompassing chemicals, industrial gases, distilleries, and higher education. It has solidified its position as a leading business entity in the country since its establishment during earlier periods. The group brings extensive expertise in Manufacturing, Finance, Commerce, Procurement, IT, HR & Industrial Relations. Professionally managed by a team of dynamic and experienced techno-commercial individuals from the Dutch Chemical, Mining, and Oil & Gas Industries, Liks B.V. is headquartered in Amsterdam, with a manufacturing facility in the Netherlands."
// }

export default function Card5 ({content}) {
  return (
    <Box
      sx={{
        alignItems: 'start',
        borderRadius: '20px',
        background: `${content.backColor}`,
        boxShadow: `${content.shadow}`,
        display: 'flex',
        flexDirection: 'column',
        padding: '50px',
        height: "442.78px"
      }}
    >
      <Box
        sx={{
          display: 'flex',
          paddingTop: '28.41px',
          gap: '12px'
        }}
      >
        <img
          loading='lazy'
          src={content.header.image}
          alt='logo'
          style={{
            width: '78px',
          }}
        />
        <Typography
          sx={{
            justifyContent: 'center',
            color: `${content.header.color}`,
            textAlign: 'center',
            font: '800 69.54px Manrope, -apple-system, Roboto, Helvetica, sans-serif'          
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
          maxWidth: '641px',
          margin: '33px 0 49px',
          font: '500 16px/24px Manrope, -apple-system, Roboto, Helvetica, sans-serif'
        }}
      >
        {content.text}
      </Typography>
    </Box>
  )
}

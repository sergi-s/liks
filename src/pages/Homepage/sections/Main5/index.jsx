import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Image1 from '../../../../assets/Homepage/images/image1.png'
import Image2 from '../../../../assets/Homepage/images/image2.png'

const Main5 = () => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        height: "900px",
        padding: '96px 192px 96px 192px',
        alignItems: 'flex-start'
      }}
    >
      <Grid item container md={6}>
        <Grid item container md={12}>
          <Typography
            sx={{
              width: '100%',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: '800',
              fontSize: '40px',
              lineHeight: '40px',
              letterSpacing: '-1.2px',
              paddingBottom: '20px'
            }}
          >
            About Liks
          </Typography>
        </Grid>
        <Grid item container md={12}>
          <Typography
            sx={{
              width: '100%',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: '500',
              fontSize: '18px',
              lineHeight: '27px',
              letterSpacing: '-0.4px',
              padding: '0 69.85px 29.16px 0'
            }}
          >
            Liks stands out as a leading exporter of Speciality Chemicals based
            in the Netherlands, serving the global markets of Oil & Gas, Mining,
            Refractories, Industrial Chemicals, and Agro-Chemicals. Specializing
            in Drilling Fluid Additives, Cementing Additives, Production
            Chemicals, Industrial Chemicals, and Agro-Chemicals, Liks caters to
            regions including the Middle East, Far East, Africa, Europe, and the
            United States. With an impressive track record spanning over 18
            years, Liks has established itself as a reliable and esteemed vendor
            for major multinational corporations. The organization possesses
            extensive manufacturing capabilities, producing both powder and
            liquid chemicals for various applications across diverse sectors.
          </Typography>
        </Grid>
        <Grid item container md={12}>
          <Button
            variant='contained'
            sx={{
              marginTop: '23.8px',
              width: '271px',
              height: '58px',
              color: '#fff',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '18px',
              borderRadius: '10px',
              backgroundColor: '#10417A',
              textTransform: 'none'
            }}
            endIcon={<ArrowRightIcon />}
          >
            Enquire Now
          </Button>
        </Grid>
      </Grid>
      <Grid item container md={6} >
        <img
          loading='lazy'
          src={Image2}
          alt='Powder'
          style={{
            objectPosition: 'center',
            width: '416px',
            height: '582px',
            overflow: 'hidden',
            borderRadius: '44px',
            position: 'absolute',
            margin: '126px 192px 0 366px'
          }}
        />
        <img
          loading='lazy'
          src={Image1}
          alt='Powder'
          style={{
            width: '416px',
            height: '582px',
            overflow: 'hidden',
            borderRadius: '44px',
            position: 'absolute'
          }}
        />
      </Grid>
    </Grid>
  )
}

export default Main5

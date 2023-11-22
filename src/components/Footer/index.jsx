import React from 'react'
import { Typography, Grid, Box } from '@mui/material'
import Logo from '../../assets/Logo.svg'
import Email from '../../assets/Email_white.svg'
import Vector1 from '../../assets/Vector 1.svg'
import Vector2 from '../../assets/Vector 2.svg'
import Telephone from '../../assets/Phone_white.svg'
import BlueArrow from '../../assets/BlueArrow.svg'
function Footer({ content }) {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={{ margin: '100px 0 43px 0' }}
    >
      <Grid
        container
        sx={{
          borderRadius: '20px',
          backgroundColor: '#141414',
          padding: '32px',
          width: '100%',
          maxWidth: '1766.39px',
          height: 'auto',
          minHeight: '300px',
          '@media (max-width:600px)': {
            padding: '16px',
          },
        }}
      >
        <Grid item container md={12} sx={{ padding: '10px' }}>
          <Grid item container sx={{ height: '256.83px', width: '435.22px' }}>
            <Grid item md={12} sx={{ display: 'flex' }}>
              <img
                alt=''
                src={Logo}
                style={{
                  width: '53.448px',
                  height: '40px'
                }}
              />
              <div
                style={{
                  color: '#F8B232',
                  fontFamily:
                    'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '47.414px',
                  fontStyle: 'normal',
                  fontWeight: 800,
                  lineHeight: '43.103px'
                }}
              >
                Liks
              </div>
            </Grid>
            <Grid item md={12}>
              <div
                style={{
                  fontFamily:
                    'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '24px',
                  color: '#FFF'
                }}
              >
                At Liks, quality is our priority. We meticulously oversee
                production, aiming for innovation and high standards. Committed
                to continuous improvement, we tailor our product to meet
                customer needs. Our pride is delivering quality and
                effectiveness.
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            container
            sx={{
              height: '256.83px',
              width: '353.06px',
              paddingLeft: '20px'
            }}
          >
            <Grid item md={12}>
              <Typography
                sx={{
                  color: '#fff',
                  textAlign: 'left',
                  fontFamily:
                    'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                  fontWeight: 600,
                  fontSize: '30px',
                  lineHeight: '30px',
                  marginTop: '4px',
                  marginBottom: '20px'
                }}
              >
                Quick Links
              </Typography>
            </Grid>
            <Grid item container sx={{ margin: '0px 0 80px 0' }}>
              <Grid item md={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  alt='>'
                  src={BlueArrow}
                  style={{ width: '14px', height: '14px' }}
                />
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily:
                      'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '24px',
                    paddingLeft: '8.5px'
                  }}
                >
                  Home
                </Typography>
              </Grid>
              <Grid item md={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  alt='>'
                  src={BlueArrow}
                  style={{ width: '14px', height: '14px' }}
                />
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily:
                      'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '24px',
                    paddingLeft: '8.5px'
                  }}
                >
                  About
                </Typography>
              </Grid>
              <Grid item md={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  alt='>'
                  src={BlueArrow}
                  style={{ width: '14px', height: '14px' }}
                />
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily:
                      'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '24px',
                    paddingLeft: '8.5px'
                  }}
                >
                  Contact Us
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            sx={{
              height: '256.83px',
              width: '353.06px',
              paddingLeft: '20px'
            }}
          >
            <Grid item md={12}>
              <Typography
                sx={{
                  color: '#fff',
                  textAlign: 'left',
                  fontFamily:
                    'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                  fontWeight: 600,
                  fontSize: '30px',
                  lineHeight: '30px',
                  marginTop: '4px',
                  marginBottom: '20px'
                }}
              >
                Important Links
              </Typography>
            </Grid>
            <Grid item container sx={{ margin: '0px 0 50px 0' }}>
              <Grid item md={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  alt='>'
                  src={BlueArrow}
                  style={{ width: '14px', height: '14px' }}
                />
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily:
                      'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '24px',
                    paddingLeft: '8.5px'
                  }}
                >
                  QHSC
                </Typography>
              </Grid>
              <Grid item md={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  alt='>'
                  src={BlueArrow}
                  style={{ width: '14px', height: '14px' }}
                />
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily:
                      'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '24px',
                    paddingLeft: '8.5px'
                  }}
                >
                  Logistics
                </Typography>
              </Grid>
              <Grid item md={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  alt='>'
                  src={BlueArrow}
                  style={{ width: '14px', height: '14px' }}
                />
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily:
                      'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '24px',
                    paddingLeft: '8.5px'
                  }}
                >
                  Quality
                </Typography>
              </Grid>
              <Grid item md={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  alt='>'
                  src={BlueArrow}
                  style={{ width: '14px', height: '14px' }}
                />
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily:
                      'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '24px',
                    paddingLeft: '8.5px'
                  }}
                >
                  Facilities
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            sx={{
              height: '256.83px',
              width: '353.06px',
              paddingLeft: '20px'
            }}
          >
            <Grid item md={12}>
              <Typography
                sx={{
                  color: '#fff',
                  textAlign: 'left',
                  fontFamily:
                    'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                  fontWeight: 600,
                  fontSize: '30px',
                  lineHeight: '30px',
                  marginTop: '4px',
                  marginBottom: '20px'
                }}
              >
                Products
              </Typography>
            </Grid>
            <Grid item container sx={{ margin: '0px 0 80px 0' }}>
              <Grid item md={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  alt='>'
                  src={BlueArrow}
                  style={{ width: '14px', height: '14px' }}
                />
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily:
                      'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '24px',
                    paddingLeft: '8.5px'
                  }}
                >
                  Drilling Additives
                </Typography>
              </Grid>
              <Grid item md={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  alt='>'
                  src={BlueArrow}
                  style={{ width: '14px', height: '14px' }}
                />
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily:
                      'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '24px',
                    paddingLeft: '8.5px'
                  }}
                >
                  Industrial Chemicals
                </Typography>
              </Grid>
              <Grid item md={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  alt='>'
                  src={BlueArrow}
                  style={{ width: '14px', height: '14px' }}
                />
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily:
                      'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '24px',
                    paddingLeft: '8.5px'
                  }}
                >
                  Agro Chemicals
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/*  ************************************************ */}

        <Grid item container spacing={3} md={12} sx={{ padding: '10px', width: '100%' }} flexWrap="wrap">
          <Grid item xs={12} md={6} style={{ maxWidth: '504.8px' }}>
            <Box
              sx={{
                justifyContent: 'center',
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.09)',
                padding: '26.5px 20px 26.5px 20px'
              }}
            >
              <Grid container sx={{ display: 'flex' }}>
                <img
                  loading='lazy'
                  src={Email}
                  alt='envelope'
                  style={{ width: '55px', height: '55px' }}
                />
                <Typography
                  variant='body1'
                  align='center'
                  sx={{
                    color: '#fff',
                    margin: 'auto 0',
                    fontFamily:
                      'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: '22px',
                    paddingLeft: '15px'
                  }}
                >
                  info@liks.com
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={{ maxWidth: '504.8px' }}>
            <Box
              sx={{
                justifyContent: 'center',
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.09)',
                padding: '26.5px 20px 26.5px 20px'
              }}
            >
              <Grid container sx={{ display: 'flex' }}>
                <img
                  loading='lazy'
                  src={Telephone}
                  alt='image'
                  style={{ width: '55px', height: '55px' }}
                />
                <Typography
                  variant='body1'
                  align='center'
                  sx={{
                    color: '#fff',
                    margin: 'auto 0',
                    fontFamily:
                      'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: '22px',
                    paddingLeft: '15px'
                  }}
                >
                  31-11-47929151
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={{ maxWidth: '504.8px' }}>
            <Box sx={{}}>
              <Grid container sx={{ display: 'flex' }}>
                <Grid item>
                  <Typography
                    variant='body1'
                    align='center'
                    sx={{
                      color: '#fff',
                      margin: 'auto 0',
                      fontFamily:
                        'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
                      fontWeight: '600',
                      fontSize: '15px',
                      lineHeight: '22px',
                      paddingLeft: '15px',
                      paddingTop: '55px'
                    }}
                  >
                    Website Developed by
                  </Typography>
                </Grid>
                <Grid item sx={{ padding: '50px 0 0 10px', display: 'flex' }}>
                  <img
                    loading='lazy'
                    src={Vector1}
                    alt='vector1'
                    style={{ width: '20.92px', height: '24.6px' }}
                  />
                  <img
                    loading='lazy'
                    src={Vector2}
                    alt='vector2'
                    style={{ width: '17.2px', height: '23.3px' }}
                  />
                </Grid>
                <Grid item sx={{ paddingLeft: '5px' }}>
                  <Typography
                    variant='body1'
                    align='left'
                    sx={{
                      color: '#fff',
                      letterSpacing: '-0.328px',
                      fontFamily:
                        'Montserrat, -apple-system, Roboto, Helvetica, sans-serif',
                      fontWeight: '700',
                      fontSize: '16px',
                      lineHeight: '17.2px',
                      paddingTop: '47px'
                    }}
                  >
                    WEIRD
                  </Typography>
                  <Typography
                    variant='body1'
                    align='left'
                    sx={{
                      color: '#fff',
                      letterSpacing: '1.4px',
                      fontFamily:
                        'Montserrat, -apple-system, Roboto, Helvetica, sans-serif',
                      fontWeight: '500',
                      fontSize: '13px',
                      lineHeight: '12.7px'
                    }}
                  >
                    STUDIO
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer

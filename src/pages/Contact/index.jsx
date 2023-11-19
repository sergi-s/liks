import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import './style.css'
import Card11 from '../../components/Card11'
import Email from '../../assets/ContactUs/SVG/email.svg'
import Phone from '../../assets/ContactUs/SVG/phone.svg'

const Contact = props => {
  const cardItems = [
    { id: 1, svg: Email, header: 'Email', text: 'info@like.com' },
    { id: 2, svg: Phone, header: 'Phone', text: '31-11-47929151' }
  ]
  return (
    <Grid
      container
      direction='column'
      justifyContent='flex-start'
      alignItems='center'
    >
      <Grid
        item
        sx={{
          width: '1640px',
          marginTop: '192px'
        }}
      >
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid
            item
            className='contactBackground'
            sx={{
              width: '1066px',
              height: '574px',
              borderRadius: '30px'
            }}
          ></Grid>
          <Grid item>
            <Grid
              container
              direction='column'
              justifyContent='center'
              alignItems='center'
            >
              {cardItems.map(cardItem => (
                <Grid item key={cardItem.id} margin>
                  <Card11 content={cardItem} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          width: '1640px',
          marginTop: '75px'
        }}
      >
        <Grid
          container
          direction='column'
          justifyContent='space-evenly'
          alignItems='flex-start'
          sx={{
            padding: '103px',
            backgroundColor: '#ECEFF3',
            borderRadius: '30px'
          }}
        >
          <Grid item md={12}>
            <Typography
              sx={{
                color: 'rgba(0, 0, 0, 0.43)',
                fontSize: '32.5px',
                fontWeight: '800',
                letterSpacing: '-1.2px',
                fontFamily:
                  'Manrope, -apple-system, Roboto, Helvetica, sans-serif'
              }}
            >
              Get In Touch
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography
              sx={{
                textAlign: 'center',
                fontWeight: 800,
                fontSize: '62px',
                lineHeight: '62px',
                letterSpacing: '-1.12px',
                fontFamily:
                  'Manrope, -apple-system, Roboto, Helvetica, sans-serif'
              }}
            >
              Send Us A Message
            </Typography>
          </Grid>
          <Grid item md={12} sx={{ marginTop: '77px' }}>
            <Grid
              container
              direction='row'
              justifyContent='space-between'
              alignItems='center'
            >
              <Grid item md={5} sx={{ width: '640px' }}>
                <TextField label='Name' variant='outlined' fullWidth />
              </Grid>
              <Grid item md={7} sx={{ width: '800px', paddingLeft: '34px' }}>
                <TextField
                  label='Email'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container  sx={{ marginTop: '18px' }}>
              <Grid item md={5} sx={{ width: '640px' }}>
                <TextField label='Phone' variant='outlined' fullWidth />
              </Grid>
              <Grid item md={7} sx={{ width: '800px', paddingLeft: '34px' }}>
                <TextField label='Subject' variant='outlined' fullWidth />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            md={12}
            sx={{ marginTop: '18px', width: '1433px', height: '170px' }}
          >
            <TextField
              label='Message'
              variant='outlined'
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item md={12} sx={{ marginTop: '37px' }}>
            <Button
              variant='contained'
              sx={{
                width: '506px',
                height: '87px',
                padding: '30.3px',
                borderRadius: '15px',
                fontSize: '26.6px',
                textTransform: 'none',
                fontWeight: '500',
                backgroundColor: '#10417A'
              }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contact

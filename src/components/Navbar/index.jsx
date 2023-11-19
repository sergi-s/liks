import React from 'react'
import {  Grid } from '@mui/material'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'

function Navbar () {
  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid
        item
        sx={{
          width: '1152px',
          height: '72.34px',
          borderRadius: 80,
          border: '2px solid rgba(237, 238, 241, 0.36)',
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          marginTop: '240px'
        }}
      >
        <LinkContainer to={'/'}>
          <Grid
            item
            md={12}
            sx={{
              display: 'flex',
              marginLeft: '41.37px',
              cursor: 'pointer'
            }}
          >
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
        </LinkContainer>
        <Grid
          item
          sx={{
            alignSelf: 'center',
            alignItems: 'flex-start',
            maxWidth: '100%',
            flexWrap: 'wrap'
          }}
        >
          <Link
            to='/about'
            style={{
              justifyContent: 'center',
              color: '#000',
              alignSelf: 'start',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '20px',
              paddingRight: '30px',
              textDecoration: 'none'
            }}
          >
            About
          </Link>
          <Link
            to='/products'
            className='link'
            style={{
              justifyContent: 'center',
              color: '#000',
              alignSelf: 'start',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '20px',
              paddingRight: '30px',
              textDecoration: 'none'
            }}
          >
            Products
          </Link>
          <Link
            to='/logistics'
            className='link'
            style={{
              justifyContent: 'center',
              color: '#000',
              alignSelf: 'start',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '20px',
              paddingRight: '30px',
              textDecoration: 'none'
            }}
          >
            Logistics
          </Link>
          <Link
            to='/quality'
            className='link'
            style={{
              justifyContent: 'center',
              color: '#000',
              alignSelf: 'start',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '20px',
              paddingRight: '30px',
              textDecoration: 'none'
            }}
          >
            Quality
          </Link>
          <Link
            to='/facilities'
            className='link'
            style={{
              justifyContent: 'center',
              color: '#000',
              alignSelf: 'start',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '20px',
              paddingRight: '30px',
              textDecoration: 'none'
            }}
          >
            Facilities
          </Link>
          <Link
            to='/QHSE'
            className='link'
            style={{
              justifyContent: 'center',
              color: '#000',
              alignSelf: 'start',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '20px',
              paddingRight: '30px',
              textDecoration: 'none'
            }}
          >
            QHSE
          </Link>
          <Link
            to='/contact'
            className='link'
            style={{
              justifyContent: 'center',
              color: '#000',
              alignSelf: 'start',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              lineHeight: '20px',
              paddingRight: '52px',
              textDecoration: 'none'
            }}
          >
            Contact
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Navbar

import React from 'react'
import { Grid, Typography } from '@mui/material'
import MainLogo from '../../../../assets/Logistics/SVG/main.svg'
import './style.css'

function Main2() {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      sx={{
        marginTop: '96px',
        padding: { xs: '10px', sm: '50px 20px', md: '106.8px 153.59px 10px 153.59px' }
      }}

    >
      <Grid
        container
        className='logiscticsback'
        direction='row'
        alignItems='center'
        justifyContent='center'
        sx={{
          width: '100%',
          maxWidth: '1574.41px',
          borderRadius: '20px',
          boxShadow: '10px 10px 0px 0px rgba(0, 26, 57, 0.93)',
          padding: '20px',
        }}
      >
        <Grid item md={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            alt=''
            src={MainLogo}
            style={{
              width: '82px',
              height: '82px',
              marginBottom: '20px',
            }}
          />
          <Typography
            variant='body1'
            sx={{
              color: '#FFF',
              fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '24px',
              textAlign: 'center',
            }}
          >
            Liks boasts an in-house shipping and logistics team proficient in
            managing both containerized and break bulk cargo. Our company
            maintains strong partnerships with highly reputable shipping lines,
            allowing us to provide our customers with the most competitive ocean
            freight rates. The collaboration between our shipping and logistics
            team and the packaging department is seamless, ensuring top-notch
            palletization quality and the optimal utilization of container
            space. This meticulous approach guarantees the safe stuffing of the
            maximum possible cargo under secure conditions.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Main2

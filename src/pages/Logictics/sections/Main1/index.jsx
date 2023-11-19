import React from 'react'
import { Grid, Typography } from '@mui/material'
import MainLogo from '../../../../assets/Logistics/SVG/main.svg'
import './style.css'
function Main2 () {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      sx={{ marginTop: '96px' }}
    >
      <Grid
        container
        className='logiscticsback'
        direction='row'
        alignItems='center'
        justifyContent='center'
        sx={{
          width: '1574.41px',
          height: '168px',
          borderRadius: '20px',
          boxShadow: '10px 10px 0px 0px rgba(0, 26, 57, 0.93)'
        }}
      >
        <Grid item md={12} sx={{ display: 'flex' }}>
          <img
            alt=''
            src={MainLogo}
            style={{
              width: '82px',
              height: '82px',
              marginLeft: '40px'
            }}
          />
          <div
            style={{
              color: '#FFF',
              fontFamily:
                'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '24px',
              margin: "auto",
              paddingLeft: "15px"
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
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Main2

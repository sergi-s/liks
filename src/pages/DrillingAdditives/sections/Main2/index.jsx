import React from 'react'
import { Grid } from '@mui/material'
import Image from '../../../../assets/About/images/Image.png'
import './style.css'
function Main2 () {
  return (
    <Grid
      item
      container
      direction='column'
      alignItems='center'
    >
      <Grid
        className='back'        
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{
          width: '1574.41px',
          height: '335.39px',
          textAlign: 'center',
          borderRadius: '20px',
          boxShadow: "10px 10px 0px 0px rgba(0, 26, 57, 0.93)"
        }}
      >

      </Grid>
    </Grid>
  )
}

export default Main2

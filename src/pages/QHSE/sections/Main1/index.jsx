import React from 'react'
import { Grid, Typography } from '@mui/material'
import Main2Image from '../../../../assets/QHSE/images/Main2.png'
import Main3Image from '../../../../assets/QHSE/images/Main3.png'


function Main2 () {
  return (
    <Grid
      container
      direction='row'
      justifyContent='flex-start'
      alignItems='center'
      sx={{ padding: '96px 153px 96px 153px' }}
    >
      <Grid item>
        <img
          src={Main2Image}
          alt=''
          style={{
            width: '578px',
            height: '368px',
            borderRadius: '20px'
          }}
        />
      </Grid>
      <Grid item sx={{ padding: '70px', width: '1015px' }}>
        <Typography
          sx={{
            textAlign: 'left',
            fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: 700,
            fontSize: '30px',
            lineHeight: '30px',
            letterSpacing: '-0.8px'
          }}
        >
          We are serious about Safety!
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            marginTop: '20px'
          }}
        >
          Liks is dedicated to attaining, sustaining, and surpassing excellence
          in the management of all aspects related to Quality, Health, Safety,
          and the Environment (QHSE) in our operations. Our QHSE Values
          articulate our commitments in these domains, serving as a binding
          framework alongside more detailed guidelines and procedures. These
          values underscore the centrality of safeguarding people and the
          environment in all our activities, and we are committed to a
          continuous enhancement of our QHSE performance. <br />
          The QHSE Values serve as the foundation for policies and objectives
          that guide the management of QHSE across the entirety of Liks.
        </Typography>
      </Grid>
      <Grid item sx={{ padding: '70px', width: '1015px' }}>
        <Typography
          sx={{
            textAlign: 'left',
            fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: 700,
            fontSize: '30px',
            lineHeight: '30px',
            letterSpacing: '-0.8px'
          }}
        >
          Liks is committed to diligently pursuing the following objectives:
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            marginTop: '20px'
          }}
        >
          Compliance: Adhering to relevant laws, regulations, and industry
          standards. Continuous Improvement: Identifying and addressing QHSE
          aspects, implementing controls, and continually enhancing them. Health
          and Safety: Ensuring the well-being of employees and all engaged in
          our operations. Resource Optimization and Environmental
          Responsibility: Efficiently using natural resources and minimizing
          environmental impact. QHSE Information Dissemination: Providing and
          updating QHSE information for a safer work environment.
        </Typography>
      </Grid>
      <Grid item>
        <img
          src={Main3Image}
          alt=''
          style={{
            width: '578px',
            height: '368px',
            borderRadius: '20px'
          }}
        />
      </Grid>
    </Grid>
  )
}

export default Main2

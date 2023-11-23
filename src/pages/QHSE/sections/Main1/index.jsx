import React from 'react'
import { Grid, Typography } from '@mui/material'
import Main2Image from '../../../../assets/QHSE/images/Main2.png'
import Main3Image from '../../../../assets/QHSE/images/Main3.png'
import { QAGoal } from '../../../Quality/sections/Main1'


function Main2() {
  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{
        padding: { xs: '5% 15%', md: '5% 7%' },
      }}
    >
      <QAGoal image={Main2Image}
        title={'We are serious about Safety!'}
        text={` Liks is dedicated to attaining, sustaining, and surpassing excellence
          in the management of all aspects related to Quality, Health, Safety,
          and the Environment (QHSE) in our operations. Our QHSE Values
          articulate our commitments in these domains, serving as a binding
          framework alongside more detailed guidelines and procedures. These
          values underscore the centrality of safeguarding people and the
          environment in all our activities, and we are committed to a
          continuous enhancement of our QHSE performance. <br />
          The QHSE Values serve as the foundation for policies and objectives
          that guide the management of QHSE across the entirety of Liks.`} />

      <QAGoal isRight={true} image={Main3Image}
        title={'Liks is committed to diligently pursuing the following objectives:'}
        text={`Compliance: Adhering to relevant laws, regulations, and industry
      standards. Continuous Improvement: Identifying and addressing QHSE
      aspects, implementing controls, and continually enhancing them. Health
      and Safety: Ensuring the well-being of employees and all engaged in
      our operations. Resource Optimization and Environmental
      Responsibility: Efficiently using natural resources and minimizing
      environmental impact. QHSE Information Dissemination: Providing and
      updating QHSE information for a safer work environment.`} />
    </Grid>
  )
}

export default Main2

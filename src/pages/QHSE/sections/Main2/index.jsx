import React from 'react';
import { Grid, Typography } from '@mui/material';
import Card9 from '../../../../components/Card9';
import Vector1 from '../../../../assets/QHSE/SVG/card1.svg';
import Vector2 from '../../../../assets/QHSE/SVG/card2.svg';
import Vector3 from '../../../../assets/QHSE/SVG/card3.svg';
import Vector4 from '../../../../assets/QHSE/SVG/card4.svg';
import Vector5 from '../../../../assets/QHSE/SVG/card5.svg';
import Vector6 from '../../../../assets/QHSE/SVG/card6.svg';
import Vector7 from '../../../../assets/QHSE/SVG/card7.svg';
import Vector8 from '../../../../assets/QHSE/SVG/card8.svg';

const Main2 = (props) => {
  const cardItems = [
    {
      id: 1,
      shadowColor: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
      image: Vector1,
      header: 'Adherence to legal requirements',
    },
    {
      id: 2,
      shadowColor: '10px 10px 0px -2px rgba(255, 179, 34, 0.52)',
      image: Vector2,
      header: 'Management of risk',
    },
    {
      id: 3,
      shadowColor: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
      image: Vector3,
      header: 'Maintenance of policies and documentation',
    },
    {
      id: 4,
      shadowColor: '10px 10px 0px -2px rgba(255, 179, 34, 0.52)',
      image: Vector4,
      header: 'Provision of information',
    },
    {
      id: 5,
      shadowColor: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
      image: Vector5,
      header: 'Training',
    },
    {
      id: 6,
      shadowColor: '10px 10px 0px -2px rgba(255, 179, 34, 0.52)',
      image: Vector6,
      header: 'Emergency response',
    },
    {
      id: 7,
      shadowColor: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
      image: Vector7,
      header: 'Commitment to ongoing improvements',
    },
    {
      id: 8,
      shadowColor: '10px 10px 0px -2px rgba(255, 179, 34, 0.52)',
      image: Vector8,
      header: 'Community interaction',
    },
  ];

  return (
    <Grid container sx={{ padding: '0 15px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ marginTop: '30px' }}>
        {cardItems.map((cardItem) => (
          <Grid item xs={12} sm={6} md={3} key={cardItem.id}>
            <Card9 content={cardItem} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Main2;

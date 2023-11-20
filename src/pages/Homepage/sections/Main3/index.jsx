import React from 'react';
import { Grid } from '@mui/material';
import Card1 from '../../../../components/Card1';
import Card2 from '../../../../components/Card2';

const Main3 = () => {
  const cardItems = [
    { id: 1, header: '30', text: 'Countries' },
    { id: 2, header: '1,500', text: 'On-Time Shipments' },
    { id: 3, header: '6000', text: 'Man-hours on R&D Projects' },
    { id: 4, header: '0', text: 'Customer Complaints' }
  ];

  return (
    <Grid
      container
      spacing={3}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        padding: '0 16px',
        paddingY: '30px'
      }}
    >
      <Grid item xs={12} md={6}>
        <Card1
          content={{
            header: 'Excellence, Dependability, and Honesty.',
            text: 'At Liks, our dedication lies in delivering top-tier engineered materials and additives designed for the worldwide energy market. Our distinction arises from an unwavering commitment to product excellence, quality, and process innovation, complemented by unparalleled technical support and service. Immerse yourself in the Proec distinction—where innovation, collaboration, and excellence converge.',
          }}
          button={{ text: 'About Our Company' }}
        />
      </Grid>
      <Grid item container md={6} spacing={2}>
        {cardItems.map((cardItem) => (
          <Grid key={cardItem.id} item xs={12} sm={6} md={6} lg={6}>
            <Card2 content={cardItem} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Main3;

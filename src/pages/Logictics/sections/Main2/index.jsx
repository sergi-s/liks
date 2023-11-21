import React from 'react'
import { Grid } from '@mui/material'
import Card8 from '../../../../components/Card8'
import Vector1 from '../../../../assets/Logistics/SVG/card1.svg'
import Vector2 from '../../../../assets/Logistics/SVG/card2.svg'

const Main2 = (props) => {
  const cardItems = [
    {
      id: 1,
      shadowColor: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
      image: Vector1,
      header: 'Warehousing Facilities',
      text:
        'Each production unit is equipped with self-contained open and closed warehouses designed for the storage of raw materials, consumables, packing materials, and a dedicated space for finished goods. The total covered storage area spans 100,000 square feet, including a 50,000 square feet warehouse located at Mundra port. Additionally, there is an open storage facility covering approximately 400,000 square feet. All manufacturing units are outfitted with a range of customized packaging solutions to meet specific requirements.',
    },
    {
      id: 2,
      shadowColor: '10px 10px 0px -2px rgba(255, 179, 34, 0.52)',
      image: Vector2,
      header: 'Material Handling Equipment',
      text:
        'All our factories are fully equipped with a range of material handling equipment, including forklifts, JCBs, wheel loaders, hydraulic cranes, and EOT cranes. Our Container Freight Stations boast comprehensive facilities, including hydra equipment for efficient break bulk cargo handling. We ensure direct movement to Jawaharlal Nehru Port Trust (JNPT) and Mundra Ports. Our operations run 24/7, allowing for continuous stuffing and de-stuffing activities to meet the dynamic demands of our logistics operations.',
    },
  ];

  return (
    <Grid
      container
      spacing={3}
      sx={{
        padding: { xs: '10px', sm: '50px 20px', md: '106.8px 153.59px 10px 153.59px' },
      }}
    >
      {cardItems.map((cardItem) => (
        <Grid item key={cardItem.id} xs={12} md={6}>
          <Card8 content={cardItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Main2;

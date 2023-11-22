import React from 'react'
import { Grid } from '@mui/material'

import image1 from '../../../assets/AgroChemicals/images/insecticides.webp'
import image2 from '../../../assets/AgroChemicals/images/insecticides.webp.png'
import image3 from '../../../assets/AgroChemicals/images/herbicides.webp'
import image4 from '../../../assets/AgroChemicals/images/pesticides.webp'
import Card12 from '../../../components/Card12'

const cardItems = [
  {
    id: 1,
    image: image1,
    title: 'Insecticides',
    text: "Liks provides a variety of potent insecticides meticulously crafted to manage and eradicate detrimental insects, safeguarding crops and preventing yield reduction. Our insecticides exert their effects by disrupting the nervous system or impeding the physical development of insects, ultimately resulting in their demise. Within our range, you'll find both contact and systemic pesticides, adaptable for foliar or soil applications. Our formulations are tailored to suit various crops and diverse application methods."
  },
  {
    id: 2,
    image: image2,
    title: 'Fungicides',
    text: "Liks provides an array of fungicides precisely formulated to combat fungal diseases that pose a threat to crops, potentially leading to reduced yields. Our selection encompasses both preventive and curative options, suitable for various types of crops. These fungicides are engineered to inhibit or eliminate the growth of fungal spores. Available in diverse formulations, including liquids, powders, and granules, they can be applied as soil or foliar treatments to effectively manage fungal diseases."
  },
  {
    id: 3,
    image: image3,
    title: 'Herbicides',
    text: "At Liks, we provide herbicides designed to effectively control unwanted plants (weeds) that compete with crops for essential resources like water, nutrients, and sunlight. Our range encompasses both selective and non-selective options, suitable for pre-emergence and post-emergence weed control. These herbicides disrupt the growth or metabolism of weeds, leading to their demise. We offer diverse formulations tailored for various crops and application methods, including pre-mixed solutions and granular formulations."
  },
  {
    id: 4,
    image: image4,
    title: 'Pesticides',
    text: "Our range of pesticides comprises chemical substances designed to safeguard crops from a spectrum of pests, including insects, mites, nematodes, rodents, and birds. This comprehensive collection includes insecticides, fungicides, and herbicides, providing solutions for pest control in various crops. We offer a diverse array of formulations, such as liquid sprays, granules, and powders, tailored for different crops and application methods. Our pesticides are crafted to efficiently control pests while prioritizing environmental sustainability and minimizing harm to non-target species."
  },
]

const Main2 = () => {
  return (
    <Grid container
      sx={{ padding: '20px', flexDirection: 'column', alignItems: 'center', width: '100%' }}
    >
      {cardItems.map((content, index) => Card12(content, index))}
    </Grid>
  );
}

export default Main2

import React from 'react'
import { Grid, Typography } from '@mui/material'

import image1 from '../../../../assets/DrillingAdditivies/images/product1.png'
import image2 from '../../../../assets/DrillingAdditivies/images/product2.png'
import image3 from '../../../../assets/DrillingAdditivies/images/product3.png'
import image4 from '../../../../assets/DrillingAdditivies/images/product4.png'
import image5 from '../../../../assets/DrillingAdditivies/images/product5.png'
import image6 from '../../../../assets/DrillingAdditivies/images/product6.png'
import image7 from '../../../../assets/DrillingAdditivies/images/product7.png'
import Card13 from '../../../../components/Card12'

const cardItems = [
  {
    id: 1,
    image: image1,
    title: 'Lost-Circulation Materials',
    text: "It is employed to manage and prevent lost circulation arising from fractures and broken formations. Lost-circulation materials encompass any substance that seals or forms a bridge against permeable or fractured formations to impede the loss of the entire drilling fluid. A wide array of materials has been utilized to bridge, mat, and/or plug voids to address the challenge of circulation loss. These materials can be categorized into four groups: fibrous materials, flake materials, granular materials, and combinations that include fibrous, flake, and granular components."
  },
  {
    id: 2,
    image: image2,
    title: 'Drilling Starch',
    text: "Liks Starch for Drilling is a premium starch product designed to mitigate mud filtrate in various water-based mud systems, particularly in polymer non-dispersed systems. This drilling starch is effective across freshwater to saturated salt environments and maintains fluid viscosity without increase. It functions well in a temperature range up to approximately 250°F (121°C) and serves the additional purpose of encapsulating drill cuttings and exposed wellbore formations. This encapsulation aids in reducing particle dispersion and mitigating swelling in reactive clay/shale formations. Drilling Starch, known for being non-damaging, is suitable for both Drilling Fluid and reservoir Drill-in Fluid applications. Compliant with API 13A specifications, it stands out as an economical and highly efficient filtration control additive."
  },

  {
    id: 3,
    image: image3,
    title: "Shale Stabilizers",
    text: `It enhances the stability of shale formations, prevents the dispersion of drilled solids, improves lubricity, and reduces the torque and drag experienced by the drilling string. Additionally, it regulates High-Temperature High-Pressure (HTHP) fluid loss by creating a thin, robust, and compressible wall cake.\nWhen shale is encountered during drilling, the water in the drilling fluid may interact with clay materials in the formation, leading to shale swelling. This can result in wellbore instability and the dispersion of shale particles into the drilling fluid, eventually causing hole washout.\nTo address these challenges, we've developed a range of shale inhibitors with varying molecular weights, ionicity, and product forms to accommodate different conditions and fluid systems. Our products include hydration inhibitors and multifunctional polymers that provide additional viscosity and carrying capacity.\nFor scenarios where high viscosity is not desired, such as in low solids non-dispersed muds or mud pre-mix concentrates, we minimize this effect while still maintaining effective shale inhibition. This is achieved by carefully controlling polymer molecular weight during the manufacturing process.`
  },
  {
    id: 4,
    image: image4,
    title: "Filtration Control Agents",
    text: "Filtrate refers to the liquid component of the mud system that is pushed through a filter cake and into the formation. This process occurs due to the difference between the hydrostatic pressure of the mud column and the pressure within the formation."
  },
  {
    id: 5,
    image: image5,
    title: "Weighting Agents",
    text: "In both water-based and oil-based mud systems, weighting agents play a crucial role in regulating the density of drilling fluids. We offer various materials to cater to the specific needs of designing drilling fluids within the required density range for diverse operations."
  },
  {
    id: 6,
    image: image6,
    title: "Viscosifiers",
    text: `These vital additives are instrumental in establishing the necessary carrying capacity to efficiently transport cuttings and debris away from the drill bit. They aid in maintaining the appropriate pressure within the borehole and reducing filtration. Moreover, when mud circulation is temporarily halted, such as during drill-string addition, these additives create a flat gel strength that keeps cuttings in suspension, preventing blockages at the drill bit.\n\nOur product offerings include a diverse range of viscosifiers with variations in molecular weight, ionicity, and product form, addressing a spectrum of requirements.`
  },
  {
    id: 7,
    image: image7,
    title: "Oil Based Mud Products",
    text: `Oil-based muds are employed in situations where controlling the rheology of water-based muds poses challenges. Typically composed of water in oil, with the oil component ranging from diesel to synthetic oils, these muds necessitate specific additives to emulsify water in oil. Additionally, wetting agents and gelling agents are incorporated. Below is a list of additives within our range designed to address these requirements.`
  },
]

const Main2 = () => {
  return (
    <Grid container
      sx={{ padding: '20px', flexDirection: 'column', alignItems: 'center', width: '100%' }}
    >
      {cardItems.map((content, index) => Card13(content, index))}
    </Grid>
  );
}

export default Main2

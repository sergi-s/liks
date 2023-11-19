import React from 'react'
import { Grid, Typography } from '@mui/material'
import Card10 from '../../../../components/Card10'
import Vector1 from '../../../../assets/Facilities/SVG/card1.svg'
import Vector2 from '../../../../assets/Facilities/SVG/card2.svg'
import Vector3 from '../../../../assets/Facilities/SVG/card3.svg'
import Vector4 from '../../../../assets/Facilities/SVG/card4.svg'

// const content={
//   shadowColor: "10px 10px 0px -2px rgba(90, 165, 255, 0.53)",
//   svg: SVG ,
//   header: 'Processing Units',
//   text: "Liks Ltd. boasts an advanced processing facility that is at the forefront of manufacturing various approved sophisticated additives and materials through exclusive manufacturing processes. Our adaptable manufacturing infrastructure allows us to diversify our product range and adjust our product mix according to shifts in customer demand, catering to a spectrum of customer requirements, from laboratory-scale research to commercial production. We uphold rigorous adherence and compliance with our customers' packaging policies.Facility – Located in the Netherlands, 50 kilometers east of Amsterdam, the facility specializes in powder products and custom powder blends. It stands as one of the company's longest-serving plants, equipped with highly skilled personnel."
// }

const Main2 = props => {
  const cardItems = [
    {
      id: 1,
      shadowColor: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
      svg: Vector1,
      header: {text:'Processing Units',color:"#10417A"},
      text: "Liks Ltd. boasts an advanced processing facility that is at the forefront of manufacturing various approved sophisticated additives and materials through exclusive manufacturing processes. Our adaptable manufacturing infrastructure allows us to diversify our product range and adjust our product mix according to shifts in customer demand, catering to a spectrum of customer requirements, from laboratory-scale research to commercial production. We uphold rigorous adherence and compliance with our customers' packaging policies. Facility – Located in the Netherlands, 50 kilometers east of Amsterdam, the facility specializes in powder products and custom powder blends. It stands as one of the company's longest-serving plants, equipped with highly skilled personnel."
    },
    {
      id: 2,
      shadowColor: '10px 10px 0px -2px rgba(255, 179, 34, 0.52)',
      svg: Vector2,
      header: {text:'R&D Centre',color:"#F8B232"},
      text: 'Liks Ltd. ensures that both our manufacturing facility and R&D lab adhere to internationally recognized Environment, Health, and Safety (EHS) standards, namely ISO 9001:2015, ISO 14001:2004, and OHSAS 18001:2007 certifications. Over the years, substantial investments have been made and will continue to be made in our manufacturing and R&D facilities, following a predetermined objective of augmenting our capabilities to better serve our customers. Liks is led by a professional management team comprising dynamic and experienced techno-commercial individuals from the Chemical, Mining, and Oil & Gas Industries in the Netherlands.'
    },
    {
      id: 3,
      shadowColor: '10px 10px 0px -2px rgba(255, 179, 34, 0.52)',
      svg: Vector3,
      header: {text:'',color:""},
      text: "From tailor-made blends to materials preventing fluid loss, engineered solutions for shale drilling to unconventional applications, Liks provides a comprehensive range of high-quality engineered materials and additives for the global energy market. Our goal is to provide top-notch solutions that enable our customers to enhance drilling performance, mitigate risks, and boost productivity. We blend a dedication to research and development with extensive industry expertise, ensuring that our customers have the abundant resources necessary to tackle today's challenges in oil and gas drilling. With a team of 150 professionals, Liks has established a robust reputation for reliability and integrity. Our close partnerships with reputable international suppliers, cutting-edge engineering, and state-of-the-art processing and manufacturing facilities position Liks optimally to consistently meet the needs of our customers."
    },
    {
      id: 4,
      shadowColor: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
      svg: Vector4,
      header: {text:'',color:""},
      text: "Our industry-focused operations empower us to supply top-quality powder products or customized liquid blends according to your specifications swiftly, efficiently, and safely. Furthermore, Liks' state-of-the-art R&D center excels in product development and offers unparalleled technical support to our global customers. What truly distinguishes us from the competition is our unwavering commitment to customer service excellence. Our comprehensive range of specialty products and services is meticulously crafted to complement your business. Rest assured, we are dedicated to working around the clock to deliver the high-quality products you require precisely when you need them. Liks takes pride in its employees. The growth and success we've achieved wouldn't have been possible without the dedication and hard work of our team. Many of our core operations are now supported by personnel who have demonstrated loyalty to our company over the years, contributing their thoughts, ideas, and enthusiasm. We believe that this dedication to building strong relationships is the source of our success and the foundation for our future."
    }
  ]
  return (
    <Grid
      container
      sx={{
        padding: '0 153.59px 10px 153.59px'
      }}
    >
      <Grid container spacing={7} sx={{ marginTop: '30px' }}>
        {cardItems.map(cardItem => (
          <Grid item md={6}>
            <Card10 content={cardItem} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Main2

import React from 'react'
import { Grid } from '@mui/material'
import Card5 from '../../../../components/Card5'
import Vector1 from '../../../../assets/About/svg/Vector1.svg'
import Vector2 from '../../../../assets/About/svg/Vector2.svg'
import Vector3 from '../../../../assets/About/svg/Vector3.svg'
import Vector4 from '../../../../assets/About/svg/Vector4.svg'

const Main2 = props => {
  const cardItems = [
    {
      id: 1,
      backColor: 'linear-gradient(127deg, #eff6ff 0%, #deedff 100%)',
      shadow: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
      header: { image: Vector1, mark: 'Liks', color: '#F8B232' },
      text: "Liks B.V. is led by Daan van der Velden as part of the KN Van der Velden Group. This group stands as one of the Netherlands' oldest industrial entities with diverse interests encompassing chemicals, industrial gases, distilleries, and higher education. It has solidified its position as a leading business entity in the country since its establishment during earlier periods. The group brings extensive expertise in Manufacturing, Finance, Commerce, Procurement, IT, HR & Industrial Relations. Professionally managed by a team of dynamic and experienced techno-commercial individuals from the Dutch Chemical, Mining, and Oil & Gas Industries, Liks B.V. is headquartered in Amsterdam, with a manufacturing facility in the Netherlands."
    },
    {
      id: 2,
      backColor: 'linear-gradient(127deg, #FFF8EB 0%, #FFF6E5 100%)',
      shadow: '10px 10px 0px -2px rgba(255, 179, 34, 0.52)',
      header: { image: Vector2, mark: 'Achievement', color: '#F8B232' },
      text: "From carbohydrates to materials addressing issues with fluid loss, tailored solutions for shale drilling to unconventional uses, Liks offers a comprehensive range of top-tier engineered materials and additives for the global energy sector. Our objective is to provide cutting-edge solutions that empower our clients to enhance drilling efficiency, mitigate risks, and boost productivity. We meld a steadfast commitment to research and development with extensive industry expertise, ensuring our customers access the ample resources necessary to confront today's challenges in oil and gas drilling. With a team of 150 professionals, Liks has earned a robust reputation for dependability and ethical conduct. Our close partnerships with reputable international suppliers, world-class engineering capabilities, and cutting-edge processing and manufacturing facilities position Liks optimally to consistently meet our customers' needs."
    },
    {
      id: 3,
      backColor: 'linear-gradient(127deg, #FFF8EB 0%, #FFF6E5 100%)',
      shadow: '10px 10px 0px -2px rgba(255, 179, 34, 0.52)',
      header: { image: Vector3, mark: 'High Quality', color: '#F8B232' },
      text: "Our operations, specifically tailored to the industry, empower us to supply premium-quality products according to your specifications with speed, efficiency, and safety in mind. Additionally, Liks' cutting-edge Research and Development laboratory ensures unparalleled product development and superior technical support for our global clientele. What truly distinguishes us from our competitors is our unwavering commitment to customer service excellence. Our extensive range of specialized products and services is uniquely crafted to enhance your business. Be assured that we are dedicated to working tirelessly to deliver the high-quality products you require precisely when you need them."
    },
    {
      id: 4,
      backColor: 'linear-gradient(127deg, #eff6ff 0%, #deedff 100%)',
      shadow: '10px 10px 0px -2px rgba(90, 165, 255, 0.53)',
      header: { image: Vector4, mark: 'Our People', color: '#10417A' },
      text: "Liks takes great pride in its team members. The growth and achievements we've attained owe much to the dedication and hard work of our personnel. A significant number of individuals supporting our key operations have showcased their loyalty to our organization, contributing their insights, ideas, and enthusiasm throughout the years. We firmly believe that this commitment to fostering robust relationships is the bedrock of our current success and serves as the cornerstone for our future endeavors."
    }
  ]
  return (
    <Grid
      container
      sx={{
        // padding: '106.8px 153.59px 106.8px 153.59px'
        padding: '15% 17%',
      }}
      spacing={10}
    >
      {cardItems.map(cardItem => (
        <Grid item lg={6} md={12} sm={12}>
          <Card5 content={cardItem} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Main2

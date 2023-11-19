import React from 'react'
import { Grid, Typography } from '@mui/material'
import Main2Image from '../../../../assets/QHSE/images/Main2.png'
import Main3Image from '../../../../assets/QHSE/images/Main3.png'

function Main2() {
  return (
    <Grid
      container
      direction='row'
      justifyContent='flex-start'
      alignItems='center'
      sx={{
        padding: '96px 24px',
        '@media (min-width: 600px)': {
          padding: '96px 48px',
        },
        '@media (min-width: 960px)': {
          padding: '96px 96px',
        },
      }}
    >
      <Grid item xs={12} md={6} sx={{ marginBottom: { xs: '40px', md: 0 } }}>
        <img
          src={Main2Image}
          alt=''
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '20px',
            maxWidth: '578px',
            marginBottom: '20px',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ padding: { xs: '20px', md: '70px' } }}>
        <Typography
          sx={{
            textAlign: 'left',
            fontFamily:
              'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: 700,
            fontSize: '30px',
            lineHeight: '30px',
            letterSpacing: '-0.8px',
          }}
        >
          Our Dedication to Quality Assurance
        </Typography>
        Liks maintains fully equipped testing facilities within its plants for
        both Quality Assurance (QA) and Quality Control (QC) purposes. With
        state-of-the-art and reliable testing equipment, our quality systems
        guarantee that our products undergo thorough testing at each stage of
        manufacturing. We only ship products to customers when all required
        parameters meet our stringent standards. <br />
        To ensure traceability, all produced items are assigned unique batch
        numbers. Samples from shipped products are retained by our respective
        labs, serving as reference points for technical support purposes.{' '}
        <br />
        Our documentation processes adhere to the highest standards, aligning
        with the company's Quality Management System (QMS). This commitment
        underscores our dedication to delivering products of the utmost
        quality to our customers.

      </Grid>
      <Grid item xs={12} md={6} sx={{ padding: { xs: '20px', md: '70px' } }}>
        Our Research and Development (R&D) team collaborates closely with our
        manufacturing units and customers to craft products that surpass
        existing offerings in the Oilfield market, ensuring cost-effectiveness
        through the use of local raw materials. The entire product lifecycle,
        from design and development to performance testing, as well as the
        meticulous inspection of incoming raw materials and in-process and
        final testing, adheres to comprehensive Quality Plans. We allocate
        nearly 2% of our Sales Revenue to Research and Development activities,
        with active development teams engaged in all our product areas and
        exploring expansion into different verticals. Our Drilling fluids
        products cater to various operations, including Oilfield, Horizontal
        Drilling, and Shale Gas. Each product is tailored to meet the specific
        end-use requirements of our customers, delivering optimal performance
        at competitive prices. All our testing and R&D facilities hold ISO
        certification, and they are approved by major customers for their
        reliability and accuracy. This ensures that our commitment to quality
        and innovation is upheld at every stage of product development and
        testing.
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={Main3Image}
          alt=''
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '20px',
            maxWidth: '578px',
          }}
        />
      </Grid>
    </Grid>
  )
}

export default Main2

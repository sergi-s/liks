import image1 from '../../../assets/IndustrialChemicals/images/aluminium-stearate-1024x684.webp'
import image2 from '../../../assets/IndustrialChemicals/images/caustic-potash-1024x795.webp'
import image3 from '../../../assets/IndustrialChemicals/images/Citric_Acid.webp'
import image4 from '../../../assets/IndustrialChemicals/images/Hydrated-Lime.webp'
import image5 from '../../../assets/IndustrialChemicals/images/soda-ash.webp'
import image6 from '../../../assets/IndustrialChemicals/images/sodium-carbonate.webp'
import image7 from '../../../assets/IndustrialChemicals/images/Calcium-Chloride.webp'
import image8 from '../../../assets/IndustrialChemicals/images/calcium-chloride-94-96.webp'
import image9 from '../../../assets/IndustrialChemicals/images/Glycols-1024x1024.webp'
import image10 from '../../../assets/IndustrialChemicals/images/oil-wetting-agent-969x1024.webp'
import image11 from '../../../assets/IndustrialChemicals/images/potassium-sulphate-1024x685.webp'
import image12 from '../../../assets/IndustrialChemicals/images/Magnesium-Oxide-1024x768.webp'
import image13 from '../../../assets/IndustrialChemicals/images/potassium-chloride-e1678876736503.webp'
import image14 from '../../../assets/IndustrialChemicals/images/Magnesium-Oxide-1024x768.webp'
import image15 from '../../../assets/IndustrialChemicals/images/potassium-chloride-e1678876736503.webp'
import { Grid } from '@mui/material'
import { CardA7a } from './cards'


export const Chemicals = [
    { id: 1, title: 'Aluminium Stearate', source: image1 },
    { id: 2, title: 'Caustic Potash', source: image2 },
    { id: 3, title: 'Citric Acid', source: image3 },
    { id: 4, title: 'Hydrated Lime', source: image4 },
    { id: 5, title: 'Soda Ash', source: image5 },
    { id: 6, title: 'Sodium Carbonate', source: image6 },
    { id: 7, title: 'Caustic Potash', source: image7 },
    { id: 8, title: 'Sodium Bicarbonate', source: image8 },
    { id: 9, title: 'Calcium Chloride Min 74-77%', source: image9 },
    { id: 10, title: 'Calcium Chloride Min 94-96%', source: image10 },
    { id: 11, title: 'Glycols', source: image11 },
    { id: 12, title: 'Oil Wetting Agent', source: image12 },
    { id: 13, title: 'Potassium Sulphate', source: image13 },
    { id: 14, title: 'Magnesium Oxide', source: image14 },
    { id: 15, title: 'Potassium Chloride', source: image15 },

]
const ChemicalPage = () => {
    return <Grid container sx={{ justifyContent: 'center', alignItems: 'center', marginTop: '170px' }}>
        {Chemicals.map(({ title, source }, index) =>
            <CardA7a title={title} source={source} index={index} />
        )}
    </Grid>
}

export default ChemicalPage 
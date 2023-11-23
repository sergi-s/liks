import React from 'react';
import Header from '../../components/Header'
import Main from '../../assets/IndustrialChemicals/images/Main.png'
import ChemicalPage from './Chemicals/mainChemcicals'


const IndustrialChemicals = () => {
    return (
        <>
            <Header image={Main} text1={'Our Products'} text2={'Industrial Chemicals'} />
            <ChemicalPage />
        </>
    )
};

export default IndustrialChemicals;

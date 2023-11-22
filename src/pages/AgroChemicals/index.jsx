import React from 'react';
import Header from '../../components/Header';

import Main from '../../assets/Homepage/images/cardImage3.png'
import Main2 from './Main1';

const AgroChemicals = (props) => {
    return (
        <>
            <Header image={Main} text1={'Our Products'} text2={'Agro Chemicals'} />
            <Main2 />
        </>)
};

export default AgroChemicals;

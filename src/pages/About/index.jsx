import React from 'react'

import Header from '../../components/Header'
import Main from '../../assets/About/images/Main.png'
import Main1 from './sections/Main1';
import Main2 from './sections/Main2';
// import Main3 from './sections/Main3';
// import Main4 from './sections/Main4';
// import Main5 from './sections/Main5';
// import Main6 from './sections/Main6';
// import Main7 from './sections/Main7';

function index () {
  return (
    <>
      <Header image={Main} text1={'Our Products'} text2={'Company Profile'} />
      <Main1/>
      <Main2/>
      {/* 
      <Main3/>
      <Main4/>
      <Main5/>
      <Main6/>
      <Main7/> */}
    </>
  )
}
export default index

import React from 'react'

import Header from '../../components/Header'
import Main from '../../assets/Quality/images/Main.png'
import Main1 from './sections/Main1';
import Main2 from './sections/Main2';

function index () {
  return (
    <>
      <Header image={Main} text1={''} text2={'Quality'} />
      <Main1/>
      <Main2/>
    </>
  )
}
export default index

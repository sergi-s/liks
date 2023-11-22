import React from 'react'

import Header from '../../components/Header'
import Main from '../../assets/Homepage/images/cardImage1.png'
import Main1 from './sections/Main1';

function index() {
  return (
    <>
      <Header image={Main} text1={'Our Products'} text2={'Drilling Additives'} />
      <Main1 />
    </>
  )
}
export default index

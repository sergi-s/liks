import React from 'react'

import Header from '../../components/Header'
import Main from '../../assets/Facilities/images/Main.png'
import Main1 from './sections/Main1'

function index () {
  return (
    <>
      <Header
        image={Main}
        text1={'Proec Ltd.'}
        text2={'Quality, Health, Safety & Enviornment'}
      />
      <Main1 />
    </>
  )
}
export default index

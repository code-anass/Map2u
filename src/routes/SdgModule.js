import Hello from 'SdgModule/Hello';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Pemantauan1 from '../SdgModule/screens/pemantauan1/Pemantauan1'
import Pemantauan2 from '../SdgModule/screens/pemantauan2/Pemantauan2'
import Pemantauan3 from '../SdgModule/screens/pemantauan3/Pemantauan3'

const SdgModule = () => {
  return (
    
    <>
<Routes>
        <Route path="/sdg" element={<Hello/>} />
        <Route path="/pemantauan1" element={<Pemantauan1/>} />
        <Route path="/pemantauan2" element={<Pemantauan2/>} />
        <Route path="/pemantauan3" element={<Pemantauan3/>} />
    
        </Routes>


    </>
  )
}

export default SdgModule
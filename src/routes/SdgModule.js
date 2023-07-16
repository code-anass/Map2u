import Hello from 'SdgModule/Hello';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pemantauan1 from '../SdgModule/screens/pemantauan1/Pemantauan1'

const SdgModule = () => {
  return (
    
    <>
<Routes>
        <Route path="/sdg" element={<Hello/>} />
        <Route path="/pemantauan1" element={<Pemantauan1/>} />
    
        </Routes>


    </>
  )
}

export default SdgModule
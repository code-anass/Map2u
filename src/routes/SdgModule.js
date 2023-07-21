import Hello from 'SdgModule/Hello';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Pemantauan1 from '../SdgModule/screens/pemantauan1/Pemantauan1'
import Pemantauan2 from '../SdgModule/screens/pemantauan2/Pemantauan2'
import Pemantauan3 from '../SdgModule/screens/pemantauan3/Pemantauan3'
import Pemantauan4 from 'SdgModule/screens/pemantauan4/Pemantauan4';
// import Pemantauan5 from 'SdgModule/screens/pemantauan5/Pemantauan5';
// import Pemantauan6 from 'SdgModule/screens/pemantauan6/Pemantauan6';

const SdgModule = () => {
  return (
    
    <>
<Routes>
        <Route path="/sdg" element={<Hello/>} />
        <Route path="/pemantauan1" element={<Pemantauan1/>} />
        <Route path="/pemantauan2" element={<Pemantauan2/>} />
        <Route path="/pemantauan3" element={<Pemantauan3/>} />
        <Route path="/pemantauan4" element={<Pemantauan4/>} />
        {/* <Route path="/pemantauan5" element={<Pemantauan5/>} /> */}
        {/* <Route path="/pemantauan6" element={<Pemantauan6/>} /> */}
    
        </Routes>


    </>
  )
}

export default SdgModule
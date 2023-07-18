import React from 'react'
import Sidebar from '../../layout/sidebar/Sidebar'
import Navbar from '../../layout/navbar/Navbar'
import './Pemantauan2.scss'
import { ReactComponent as Logoo } from './assets/image 48.svg'
import Dalls3 from './assets/Screenshot_2022-01-13_114415-removebg-preview 2.png'
import Dalls4 from './assets/IKP Dimensi Alam Sekitar 2.png'
import Dalls5 from './assets/IKP Dimensi Sosial 3.png'
import Pic1 from './assets/pic1.png'
import Pic2 from './assets/pic2.png'
import Map from './assets/map.png'
import Dalls6 from './assets/210058.svg'
import Dalls7 from './assets/Plan Malaysia ngn jata negara.svg'

const Pemantauan2 = () => {
  return (
    <>

      <div className='peman1' style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>

        <div className='navbar-peman'>
          <Navbar style={{ border: "1px solid blue" }} />


          
          <div className='newpeman2'>
            <div className='inner-peman2'>
              <div className='logo-headp2'>
                <Logoo style={{ width: "250px" }} />
                <span> <strong>Dashboard Indeks Komposit Pembangunan </strong> </span>

              </div>
              <div className='komponenp2'>
                <div className='inner1-komponen2'>
                  <img src={Dalls3} alt='' style={{ width: "40px", marginRight: "20px" }} />
                  <span>Dimensi Ekonomi</span>
                </div>
                <div className='inner2-komponen2'>
                  <img src={Dalls5} alt='' style={{ width: "40px", marginRight: "20px" }} />
                  <span>Dimensi Ekonomi</span>
                </div>
                <div className='inner3-komponen2'>
                  <img src={Dalls4} alt='' style={{ width: "40px", marginRight: "20px" }} />
                  <span>Dimensi Ekonomi</span>
                </div>

              </div>

              <div className='inputs-p2'>
                <div className='inner1-p2'>
                  <span>Komponen</span><br />
                  <input placeholder='Pengangkutan' />
                </div>
                <div className='inner2-p3'>
                  <span>Indekatar</span><br />
                  <input placeholder='Perkhidmatan Jalan Setiap 1000 Penduduk' />
                </div>
                <div className='btn-p2'>

                  <button style={{border:"none",color:"#FF4B55", background:"pink",width:"100px",height:"35px", margin:" 0 10px 0 0"}}>
                    Reset
                  </button>
                  <button style={{border:"none",color:"white", background:"#63B2FC",width:"100px",height:"35px"}}>
                    cari
                  </button>
                </div>



              </div>
              <div className='maps-p2'>


<div className='inner-maps-p2'>
<div className='inner-pic1-p2' >
  <img src={ Pic1  } alt='' style={{width:"300px", height:"280px"}}/>
</div>
<div className=' inner-pic1-p2' style={{width:"320px", height:"300px"}}>
  <img src={ Pic2  } alt=''/>
</div>
</div>
            <div className=' inner-map-p2'>
  <img src={ Map  } alt=''/>
</div>
              </div>





            </div>
          </div>
          <div className='final-img'>
    <img src={Dalls6} alt='' style={{margin:"15px"}} />
    <img src={Dalls7} alt='' style={{margin:"15px 0 0 0"}} />
</div>
        </div>


      </div>

    </>
  )
}

export default Pemantauan2
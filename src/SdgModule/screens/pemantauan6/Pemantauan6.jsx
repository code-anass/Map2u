import React from 'react'
import Sidebar from '../../layout/sidebar/Sidebar'
import Navbar from '../../layout/navbar/Navbar'
import './Pemantauan6.scss'
import { ReactComponent as Logoo } from './assets/image 48.svg'
import Dalls3 from './assets/Screenshot_2022-01-13_114415-removebg-preview 2.png'
import Vector1 from './assets/Vector (1).svg'
import Dalls4 from './assets/IKP Dimensi Alam Sekitar 2.png'
import Dalls5 from './assets/IKP Dimensi Sosial 3.png'
import Img1 from './assets/image 56.svg'
import Img2 from './assets/image 57.svg'
import Dalls6 from './assets/210058.svg'
import Dalls7 from './assets/Plan Malaysia ngn jata negara.svg'
import Export from './assets/Export button.svg'

import { AiOutlineShareAlt } from 'react-icons/ai';

const Pemantauan6 = () => {
    return (
        <>

            <div className='peman1' style={{ display: "flex" }}>
                <div>
                    <Sidebar />
                </div>

                <div className='navbar-peman'>
                    <Navbar style={{ border: "1px solid blue" }} />



                    <div className='newpeman6'>
                        <div className='inner-peman2'>
                            <div className='logo-headp2'>
                                <Logoo style={{ width: "250px" }} />
                                <span> <strong>Dashboard Indeks Komposit Pembangunan </strong> </span>
                                <div className='Logo-p6'>
<img src={ Export } alt=''  />
<AiOutlineShareAlt style={{marginRight:"10px"}}/>
                                </div>
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

                           

                            <div className='inputs-p6'>

                                <div className='inputs-inner-p6'>
                                    <div className='inner1-p6'>
                                        <img src={ Vector1 }  alt=''/>
                                        <span>Komponen</span><br />
                                        <input placeholder='Semua' />
                                    </div>
                                    <div className='inner1-p6'>
                                        <img src={ Vector1 }  alt=''/>
                                        <span>Indikator</span><br />
                                        <input placeholder='Pilih Indikator' />
                                    </div>
                                    <div className='inner1-p6'>
                                        <img src={ Vector1 }  alt=''/>
                                        <span>Tahun</span><br />
                                        <input placeholder='2021' />
                                    </div>
                                    <div className='inner1-p6'>
                                        <img src={ Vector1 }  alt=''/>
                                        <span>Wilayah</span><br />
                                        <input placeholder='Semua' />
                                </div>
                                </div>
                                <div className='btn-p6' style={{float:"right"}}>
                                    <button style={{ border: "none", color: "#FF4B55", background: "pink", width: "100px", height: "35px", margin: " 0 10px 0 0" }}>
                                        Reset
                                    </button>
                                    <button style={{ border: "none", color: "white", background: "#63B2FC", width: "100px", height: "35px" }}>
                                        cari
                                    </button>

                                    </div>
                                    </div>
                            </div>



                            <div className='maps-p6'>
                              <div className='inner-maps-p6'>
<h6><strong>Perlis</strong></h6>
<img src={ Img1  } alt='' />
<p>KETERANGAN WILAYAH...</p>

                                </div>
                                <div className='inner-maps-p6'>

                                <h6><strong>Sabah</strong></h6>
<img src={ Img2  } alt='' />
<p>KETERANGAN WILAYAH...</p>
</div>

                            </div>





                        </div>
                    </div>
                    <div className='final-img'>
                        <img src={Dalls6} alt='' style={{ margin: "15px" }} />
                        <img src={Dalls7} alt='' style={{ margin: "15px 0 0 0" }} />
                    </div>
                </div>


            </div>

        </>
    )
}

export default Pemantauan6
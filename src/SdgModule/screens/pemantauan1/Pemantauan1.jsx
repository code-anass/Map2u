import React from 'react'
import "./Pemantauan1.scss"
import { ReactComponent as Doublearrow } from './assets/Doublearrow.svg'
import { ReactComponent as Shape } from './assets/Shape.svg'
import { ReactComponent as Path } from './assets/Box #3.svg'
import { ReactComponent as Belllight } from './assets/Bell_light.svg'
import { ReactComponent as Initialicon } from './assets/Initial icon.svg'
import { ReactComponent as Logoo } from './assets/image 48.svg'
import { ReactComponent as Dropdown } from './assets/dropdown.svg'
import { ReactComponent as Dropdown1 } from './assets/dropdown (1).svg'
// import { ReactComponent as Third } from './assets/Screenshot.svg'
// import { ReactComponent as Fourth } from './assets/IKP Dimensi Alam Sekitar 2.svg'
// import { ReactComponent as Fifth } from './assets/IKP Dimensi Sosial 3.svg'
import Dalls from './assets/image 58.png'
import Dalls3 from './assets/Screenshot_2022-01-13_114415-removebg-preview 2.png'
import Dalls4 from './assets/IKP Dimensi Alam Sekitar 2.png'
import Dalls5 from './assets/IKP Dimensi Sosial 3.png'
// import  Dalls   from './assets/image 58.png'


const Pemantauan1 = () => {
    return (
        <>
            <div className='main-both'>
                <div className="side-bar-main">

                    <div className='side-header'>
                        <h4 style={{ fontWeight: "bold" }}>MUO</h4>
                        <div className='double-arrow'>
                            <Doublearrow style={{ MarginLeft: "50px" }} />
                        </div>
                    </div>
                    <div className='shape'>
                        <Shape />
                        <p>Dashboard Pencapaian MUO</p>
                    </div>
                    <span>Pemantauan Dan Pelaporan</span>
                    <p>Pembandaran Mampan</p>

                    <div className='path'>
                        <Path style={{ marginTop: "10px" }} />
                        <p>Indeks Komposit <br /> Pembangunan (IKP)</p>
                    </div>
                    <ul>
                        <li>Dashboard</li>
                        <li>Kemasikini</li>
                        <li>Pelaporan</li>
                    </ul>
                </div>
                <div className='nav-bar'>
                    <div className='navbar-name'>
                        <Belllight style={{ marginTop: "10px" }} />
                        <p>Hi, Luqman Hakeem</p>
                        <div className='icon-navbar'>
                            <Initialicon />
                        </div>
                    </div>
                    <p className='navbar-p1'>Indeks Komposit Pembangunan (IKP)</p>


                    <div className='main-content'>
                        <div className='inner-content'>
                            <div className='logo-head'>
                                <Logoo style={{ width: "250px" }} />
                                <span> <strong>Dashboard Indeks Komposit Pembangunan </strong> </span>
                                <p className='pengenalan'>PENGENALAN</p>
                            </div>


                            {/* main inner content */}
                            <div className='content-div'>

                                {/* div1 */}
                                <div className='index-1'>
                                    <div className='inner-index1'>
                                        <p>INDEKS
                                            KOMPOSIT
                                            PEMBANGUNAN
                                            (IKP)</p>
                                    </div>
                                    <Dropdown style={{ margin: "60px 0 0 85px", width: "40px" }} />
                                    <div className='index-text1'>
                                        Indeks Komposit Pembangunan (IKP) yang dicadangkan di dalam RWB ini merupakan IKP versi kedua yang terkini menggantikan IKP versi pertama yang telah diadakan semasa Rancangan Malaysia (RMK) pada tahun 1990- an dan awal tahun 2000. Justeru, IKP yang dibentuk dalam RWB ini dinamakan sebagai IKP 2.0 yang merupakan sebuah output utama Rangka Kerja Pembangunan Wilayah Bersepadu (RWB).
                                    </div>
                                    <div className='index-text1'>
                                        IKP 2.0 mempunyai 3 Dimensi (Ekonomi, Sosial dan Alam Sekitar), 13 Komponen dan 53 indikator
                                        <img src={Dalls} alt='' style={{ width: "170px" }} />
                                    </div>
                                    <div>

                                    </div>

                                </div>
                                {/* 2/ */}
                                <div className='index-22'>
                                    <div className='inner-index22'>
                                        <p>FUNGSI <br /> UTAMA  <br />IKP</p>
                                    </div>
                                    <Dropdown style={{ margin: "60px 0 0 85px", width: "40px" }} />
                                    <div className='index-text22'>
                                        Mengukur dan memantau tahap pembangunan sesuatu wilayah di Malaysia.
                                    </div>
                                    <div className='index-text22'>
                                        Menentukan tahap pencapaian yang berbeza dalam pembangunan oleh negeri-negeri di Malaysia.
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className='index-3323'>
                                    <div className='inner-index3'>
                                        <span>DIMENSI <br /> SOSIAL</span><br />
                                        <img src={Dalls3} alt='' style={{ width: "45px", height: "45px" }} />
                                    </div>
                                    <Dropdown style={{ margin: "60px 0 0 85px", width: "40px" }} />
                                    <div className='index-text33'>
                                        1. PENDAPATAN & AGIHAN
                                    </div>
                                    <div className='index-text4'>
                                        1. KDNK per kapita [+]
                                    </div>
                                    <div className='index-text4'>
                                        2. Pekali Gini [ - ]
                                    </div>
                                    <div className='index-text4'>
                                        3. Insiden kemiskinan
                                        [ - ]
                                    </div>
                                    <div className='index-text4'>
                                        4. Pendapatan
                                        penengah bulanan isi
                                        rumah [ + ]
                                    </div>
                                    <div className='index-text33'>
                                    2. PENGANGKUTAN
                                    </div>
                                    <div className='index-text4'>
                                    5. Indeks pembangunan jalan raya [ + ]
                                    </div>
                                    <div className='index-text4'>
                                    6. Perkhidmatan jalan setiap 1000 penduduk [ + ]
                                    </div>
                                    <div className='index-text4'>
                                    7. Pemilikan Kenderaan Motor Swasta [ + ]
                                    </div>
                                    <div className='index-text33'>
                                    3. KOMUNIKASI
                                    </div>
                                    <div className='index-text4'>
                                    8.Kadar Penembusan Jalur Lebar/100 Penduduk [ + ]
                                    </div>
                                    <div className='index-text4'>
                                    9. Kadar Penebusan Selular Mudah Alih/100 penduduk [ + ]
                                    </div>
                                    <div className='index-text4'>
                                    10. % Isirumah dengan Telefon Selular [ + ]
                                    </div>
                                    <div className='index-text33'>
                                    4. PENDIDIKAN
                                    </div>
                                    <div className='index-text4'>
                                    11. Kadar Celik Huruf (% tenaga buruh dengan Pendidikan formal) [+]
                                    </div>
                                    <div className='index-text4'>
                                    12. Kadar penyertaan murid sekolah menengah /1000 penduduk berumur 13-17 tahun [ + ]
                                    </div>
                                    <div className='index-text4'>
                                    13. % Gunatenaga dengan pendidikan tinggi [ + ]
                                    </div>
                                  


                                </div>
                                {/* 4 */}
                                <div className='index-4'>
                                    <div className='inner-index4'>
                                        <span>DIMENSI <br/> SOSIAL</span><br/>
                                        <img src={Dalls4} alt='' style={{ width: "45px", height: "45px" }} />
                                                                            </div>
                                        <Dropdown1 style={{ margin: "60px 0 0 85px", width: "40px" }} />

                                </div>
                                {/* 5 */}
                                <div className='index-5'>
                                    <div className='inner-index5'>
                                        <span>DIMENSI <br/> ALAM SEKITAR/</span><br/>
                                        <img src={Dalls5} alt='' style={{ width: "45px", height: "45px" }} />
                                                                            </div>
                                                                            <Dropdown1 style={{ margin: "60px 0 0 85px", width: "40px" }} />

                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>









                </div>

            </div>
        </>
    )
}

export default Pemantauan1
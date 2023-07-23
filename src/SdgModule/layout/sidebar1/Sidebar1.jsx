import React from 'react'
import "./Sidebar1.scss"
import { ReactComponent as Doublearrow } from './assets/Doublearrow.svg'
import { ReactComponent as Shape } from './assets/Shape.svg'
import { ReactComponent as Path } from './assets/Box #3.svg'
import PicNav1 from './assets/Attachment 2.svg'
import PicNav2 from './assets/Layout-Vertical.svg'
import PicNav3 from './assets/Layout-left-panel-2.svg'




const Sidebar1 = () => {
    return (
        <>
                <div className="side-bar-main1
                ">

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
                    <div className='path1'>
                        <img src={ PicNav1 } alt=' '/>
                        <span>Rancangan Fizikal Negara (RFN)</span>
                    </div>
                    <div className='path1'>
                        <img src={ PicNav2 } alt=' '/>
                        <span>Indeks Komposit Pembangunan (IKP)</span>
                    </div>
                    <div className='path1'>
                        <img src={ PicNav3 } alt=' '/>
                        <span>Rancangan Fizikal Negara (RFN)</span>
                    </div>

                </div>
              

            
        </>
    )
}

export default Sidebar1
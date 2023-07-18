import React from 'react'
import "./Sidebar.scss"
import { ReactComponent as Doublearrow } from './assets/Doublearrow.svg'
import { ReactComponent as Shape } from './assets/Shape.svg'
import { ReactComponent as Path } from './assets/Box #3.svg'





const Sidebar = () => {
    return (
        <>
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
              

            
        </>
    )
}

export default Sidebar
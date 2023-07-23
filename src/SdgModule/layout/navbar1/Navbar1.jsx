import React, { useState } from 'react';
import './Navbar1.scss';
import '../sidebar1/Sidebar1.scss';
import { ReactComponent as Belllight } from './assets/Bell_light.svg';
import { ReactComponent as Initialicon } from './assets/Initial icon.svg';
import { BellOutlined, MenuOutlined } from '@ant-design/icons';
import Sidebar from '../sidebar/Sidebar';
import { ReactComponent as Doublearrow } from './assets/Doublearrow.svg';
import { ReactComponent as Shape } from './assets/Shape.svg';
import { ReactComponent as Path } from './assets/Box #3.svg';
import Group from './assets/Group 1565.svg';
import Initial from './assets/Initial icon (1).svg';
import PicNav1 from './assets/Attachment 2.svg'
import PicNav2 from './assets/Layout-Vertical.svg'
import PicNav3 from './assets/Layout-left-panel-2.svg'

const Navbar1 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the value of isSidebarOpen
  };

  return (
    <>
      {isSidebarOpen && (
        <div className="side-bar-main-navbar">
          <div className="side-header">
            <h4 style={{ fontWeight: 'bold' }}>MUO</h4>
            <div className="double-arrow">
              <Doublearrow style={{ MarginLeft: '50px' }} />
            </div>
            <button className="close-icon" onClick={() => setIsSidebarOpen(false)}
            style={{background:"none", border:"none", color:"white"}}
            >
              X
            </button>
          </div>
          <div className="shape">
            <Shape />
            <p>Dashboard Pencapaian MUO</p>
          </div>
          <span>Pemantauan Dan Pelaporan</span>
          <p>Pembandaran Mampan</p>
          <div className="path">
            <Path style={{ marginTop: '10px' }} />
            <p>
              Indeks Komposit <br /> Pembangunan (IKP)
            </p>
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
      )}

      <div className="nav-bar">
        <MenuOutlined
          style={{ width: '25px', height: '25px', margin: '35px 0 0 20px' }}
          className="menu"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <div className="navbar-name">
          <Belllight style={{ marginTop: '10px' }} />
          <p><strong>Hi, Admin</strong>  </p>
          <div className="icon-navbar" onClick={() => setIsSidebarOpen(true)}>
            <img src={Initial} alt='' onChange={toggleSidebar} />
          </div>
        </div>
        <p className="navbar-p1">Indeks Komposit Pembangunan (IKP)</p>
      </div>
    </>
  );
};

export default Navbar1;

import React, { useState} from 'react'
import Sidebar1 from '../../layout/sidebar1/Sidebar1'
import Navbar1 from '../../layout/navbar1/Navbar1'
import './Pemantauan10.scss'
import Dalls6 from './assets/210058.svg'
import Dashboard1 from './assets/Dashboard Card.svg'
import Dashboard2 from './assets/Dashboard Card (1).svg'
import Dashboard3 from './assets/Dashboard Card (2).svg'
import   Dashboard4  from './assets/Screenshot (269).png'

import Dalls7 from './assets/Plan Malaysia ngn jata negara.svg'
import Dalls8 from './assets/Success.svg'
import Vector2 from './assets/Vector (2).svg'
import Vector3 from './assets/Vector (3).svg'
import Fasaf from './assets/fas.fa-filter.svg'
import Openfilter from './assets/FilterOpen — All.svg'
import { RxCross2 } from 'react-icons/rx'
import { IoMdArrowDropup } from 'react-icons/io'
import { Pagination } from 'antd';
import { Button, Modal } from 'antd';
import ModalBigg from '../pemantauan4/ModalBig'
import { SearchOutlined  } from '@ant-design/icons';
import { Input } from 'antd';
import { FiEdit } from 'react-icons/fi';



const Pemantauan10 = () => {




  return (
    <>

      <div className='peman1' style={{ display: "flex" }}>
        <div>
          <Sidebar1 />
        </div>

        <div className='navbar-peman7'>
          <Navbar1 style={{ border: "1px solid blue" }} />
          <div className='newpeman7'>
            <div className='inner-peman10'>
              <div className='p4-input10'>

<h6> <strong>Dashboard Admin</strong></h6>





              

              


              
                  </div>
                  <div className='divs-p10'>
<img src={ Dashboard1} alt=' '/>
<img src={ Dashboard2} alt=' '/>
<img src={ Dashboard3} alt=' '/>
<img src={ Dashboard4} alt=' '/>
<div className='divs1-10'>
<p>Peratusan Kemaskini</p>
<div style={{display:'flex'}}>
<p style={{width:"40px",height:"8px",backgroundColor:"red",borderRadius:'5px',margin:'4px 10px 0px 0px'}}></p><span>7% Belum Dikemaskini</span>
</div>
<div style={{display:'flex'}}>
<p style={{width:"40px",height:"8px",backgroundColor:"#00CE08 ",borderRadius:'5px',margin:'4px 10px 0px 0px'}}></p><span>62% Telah Dikemaskini</span>
</div>
<div style={{display:'flex'}}>
<p style={{width:"40px",height:"8px",backgroundColor:"#1F80DA",borderRadius:'5px',margin:'4px 10px 0px 0px'}}></p><span>25% Belum Disahkan</span>
</div>
</div>
                  </div>
                 
                <div>






                
                
<div className='inner-inputs-p7'>
<Input placeholder="Carian..." prefix={<SearchOutlined  />} />
<img src={Vector3  } alt=''/>
<img src={ Fasaf } alt=''/>

        <img src={Vector2} alt='' />
      
</div>
                 

               
              
                </div>


              <div className='tables-p10'>
             <table>
      <thead style={{background:"black", color:"white"}}>
        <tr style={{textAlign:"center"}}>
          <th >No.</th>
          <th>Nma</th>
          <th>I/C No.</th>
          <th>Status</th>
          <th>Tarikh</th>
          <th>Tindakan</th>
        
        </tr>
      </thead>
      <tbody style={{fontSize:"15px"}}>
        {/* Row 1 */}
        <tr style={{textAlign:"center"}}>
          <td>1</td>
          <td>Rohei Bin Abdullah </td>
          <td>820315-05-6987</td>
          <td><button style={{marginLeft:'30px',width:"90px",height:"25px",color:"black" ,background:"#FFE600", border:"none", borderRadius:"10px"}}>Dalam Proses</button></td>
          <td> 30/08/2021</td>
          <td><button style={{marginLeft:'30px',width:"120px",height:"30px",color:"black" ,background:"#1BC5BD", border:"none", borderRadius:"2px"}}>SEMAK</button></td>
        </tr>

        {/* Row 2 */}
        <tr style={{textAlign:"center"}}>
          <td>2</td>
          <td>Muhammad Farhan RIdwan Bin Jamaludin </td>
          <td>820315-05-6987</td>
          <td><button style={{marginLeft:'30px',width:"90px",height:"25px",color:"white" ,background:"#FD397A", border:"none", borderRadius:"10px"}}>Batal</button></td>
          <td> 30/08/2021</td>
          <td><button style={{marginLeft:'30px',width:"120px",height:"30px",color:"black" ,background:"#1BC5BD", border:"none", borderRadius:"2px"}}>SEMAK</button></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td>3</td>
          <td>Abdul Wafiq Bin Jantan </td>
          <td>820315-05-6987</td>
          <td><button style={{marginLeft:'30px',width:"90px",height:"25px",color:"white" ,background:"#47C4AB", border:"none", borderRadius:"10px"}}>Rejected</button></td>
          <td> 30/08/2021</td>
          <td><button style={{marginLeft:'30px',width:"120px",height:"30px",color:"black" ,background:"#1BC5BD", border:"none", borderRadius:"2px"}}>SEMAK</button></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td>4</td>
          <td>Munir Bin Muhsin </td>
          <td>820315-05-6987</td>
          <td><button style={{marginLeft:'30px',width:"90px",height:"25px",color:"black" ,background:"#FFE600", border:"none", borderRadius:"10px"}}>Dalam Proses</button></td>
          <td> 30/08/2021</td>
          <td><button style={{marginLeft:'30px',width:"120px",height:"30px",color:"black" ,background:"#1BC5BD", border:"none", borderRadius:"2px"}}>Rejected</button></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td>5</td>
          <td>Laila Aroha Binti Zamaini </td>
          <td>820315-05-6987</td>
          <td><button style={{marginLeft:'30px',width:"90px",height:"25px",color:"black" ,background:"#FFE600", border:"none", borderRadius:"10px"}}>Dalam Proses</button></td>
          <td> 30/08/2021</td>
          <td><button style={{marginLeft:'30px',width:"120px",height:"30px",color:"black" ,background:"#1BC5BD", border:"none", borderRadius:"2px"}}>Rejected</button></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td>6</td>
          <td>Sila Kemaskini</td>
          <td>820315-05-6987</td>
          <td><button style={{marginLeft:'30px',width:"90px",height:"25px",color:"white" ,background:"black", border:"none", borderRadius:"10px"}}>Dalam Proses</button></td>
          <td> 30/08/2021</td>
          <td><button style={{marginLeft:'30px',width:"120px",height:"30px",color:"black" ,background:"#1BC5BD", border:"none", borderRadius:"2px"}}>Rejected</button></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td>7</td>
          <td>Kassim Bin Baba</td>
          <td>820315-05-6987</td>
          <td><button style={{marginLeft:'30px',width:"90px",height:"25px",color:"white" ,background:"black", border:"none", borderRadius:"10px"}}>Dalam Proses</button></td>
          <td> 30/08/2021</td>
          <td><button style={{marginLeft:'30px',width:"120px",height:"30px",color:"black" ,background:"#1BC5BD", border:"none", borderRadius:"2px"}}>Rejected</button></td>
        </tr>

         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td>8</td>
          <td>Abu Aliyas Bin Abu Hanafi</td>
          <td>820315-05-6987</td>
          <td><button style={{marginLeft:'30px',width:"90px",height:"25px",color:"white" ,background:"black", border:"none", borderRadius:"10px"}}>Dalam Proses</button></td>
          <td> 30/08/2021</td>
          <td><button style={{marginLeft:'30px',width:"120px",height:"30px",color:"black" ,background:"#1BC5BD", border:"none", borderRadius:"2px"}}>Rejected</button></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td>9</td>
          <td>Amira Farhana BInti Jalil</td>
          <td>820315-05-6987</td>
          <td><button style={{marginLeft:'30px',width:"90px",height:"25px",color:"white" ,background:"black", border:"none", borderRadius:"10px"}}>Dalam Proses</button></td>
          <td> 30/08/2021</td>
          <td><button style={{marginLeft:'30px',width:"120px",height:"30px",color:"black" ,background:"#1BC5BD", border:"none", borderRadius:"2px"}}>Rejected</button></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td>10</td>
          <td>Iqbal Farhan Bin Rizal</td>
          <td>820315-05-6987</td>
          <td><button style={{marginLeft:'30px',width:"90px",height:"25px",color:"white" ,background:"black", border:"none", borderRadius:"10px"}}>Dalam Proses</button></td>
          <td> 30/08/2021</td>
          <td><button style={{marginLeft:'30px',width:"120px",height:"30px",color:"black" ,background:"#1BC5BD", border:"none", borderRadius:"2px"}}>Rejected</button></td>
        </tr>
         {/* Row 2 */}
       



        {/* Add more rows here if needed */}
      </tbody>
    </table>

              </div>
              <div className='ant-p4'>
              <Pagination defaultCurrent={1} total={50} />
              <p>Jumlah Rekod 1 daripada 10</p>
              </div>





            </div>
            <div className='maps-p2'>








            </div>
          </div>
          <div className='final-img7'>
          <div>

            <img src={Dalls6} alt='' style={{ margin: "15px" }} />
            <img src={Dalls7} alt='' style={{ margin: "15px 0 0 0" }} />
          </div>
            <p>Jumlah Rekod 1 daripada 10</p>
          </div>
        </div>


      </div>

    </>
  )
}

export default Pemantauan10
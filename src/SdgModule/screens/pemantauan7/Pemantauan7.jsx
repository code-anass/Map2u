import React, { useState} from 'react'
import Sidebar1 from '../../layout/sidebar1/Sidebar1'
import Navbar1 from '../../layout/navbar1/Navbar1'
import './Pemantauan7.scss'
import Dalls6 from './assets/210058.svg'
import Dalls7 from './assets/Plan Malaysia ngn jata negara.svg'
import Dalls8 from './assets/Success.svg'
import Vector2 from './assets/Vector (2).svg'
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


const Pemantauan7 = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };




  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleOk2 = () => {
    setIsModalOpen2(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };


  return (
    <>

      <div className='peman1' style={{ display: "flex" }}>
        <div>
          <Sidebar1 />
        </div>

        <div className='navbar-peman7'>
          <Navbar1 style={{ border: "1px solid blue" }} />
          <div className='newpeman7'>
            <div className='p4-btns'>
  


              <button style={{ background: "#90BFCA",marginTop:"10px" }}>
            <ModalBigg showModal2={showModal2} isModalOpen2={isModalOpen2} handleOk2={handleOk2} handleCancel2={handleCancel2} />
              </button>
              <Button style={{width:"130px", marginTop:"10px" ,height:"45px", marginLeft:"20px" ,color:"black", background: "#DADADA" }} type="primary" onClick={showModal1}>
              Telah Disahkan
      </Button>
      <Modal title="PERINGATAN" open={isModalOpen1} onOk={handleOk1} onCancel1={handleCancel1}>
        <p style={{borderTop:'1px solid gray'}}></p>
        
        <img src={ Dalls8 } alt='' style={{width:"60px",height:"60px", marginRight:"10px" }} />

        <span>Maklumat berjaya dihantar. <br/> Pengesahan akan mengambil masa 3 hingga 7 hari bekerja.</span>
      </Modal>

      <Button style={{width:"130px" ,marginTop:"10px",height:"45px" , marginLeft:"20px",background: "#DADADA", color:"black"}} type="primary" onClick={showModal}>
      Belum Disahkan
      </Button>
      <Modal title="PERINGATAN" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p style={{borderTop:'1px solid #495057',margin:"10px 0 20px 0"}}></p>
         <p>Adakah anda pasti untuk mengemaskini maklumat ini?</p>
      </Modal>
            </div>
            <img src={Openfilter} alt='' style={{position:"absolute", top :"60px", right:"10px"}}/>




            <div className='inner-peman7'>
              <div className='p4-input'>

<div className='p7-inner'>
<p>Senarai Maklumat Indeks Komposit Pembangunan (IKP)</p>
</div>
<div className='inner-inputs-p7'>
<Input placeholder="Carian..." prefix={<SearchOutlined  />} />
<button style={{width:"60px", height:"35px",margin:'0 15px 0 15px ' , background:"#63B2FC", color:"white", border:"none "}}>Cari</button>
<img src={ Fasaf } alt=''/>
<img src={Vector2  } alt=''/>
</div>



              

              


              
                  </div>
                  <div className='p4inner-input7'>
                  <span>Dimensi</span><br/>
                  <input placeholder='Sila Pilih' />
                  <div className='icons'>
                    <RxCross2/>
                    <IoMdArrowDropup style={{ marginBottom:"10px"}}/>
                  </div>
                </div>
                <div className='p4inner-input7'>
                  <span>Indikator</span><br/>
                  <input placeholder='Sila Pilih' />
                  <div className='icons'>
                    <RxCross2/>
                    <IoMdArrowDropup style={{ marginBottom:"10px"}}/>
                  </div>
                </div>


              <div className='tables-p4'>
             <table>
      <thead style={{background:"black", color:"white"}}>
        <tr style={{textAlign:"center"}}>
          <th >No.</th>
          <th>Dimensi</th>
          <th>Komponen</th>
          <th>Indikatar</th>
          <th>Data</th>
          <th>Status</th>
          <th>Tindakan</th>
        </tr>
      </thead>
      <tbody style={{fontSize:"15px"}}>
        {/* Row 1 */}
        <tr style={{textAlign:"center"}}>
          <td>1</td>
          <td>Dimensi Ekonomi</td>
          <td>Komunikasi</td>
          <td>Pelanggan internet/10000 <br/> pendukuk</td>
          <td>Pelanggan internet/10000 <br/> pendukuk</td>
          <td></td>
          <td><button style={{width:"90px", height:"20px",paddingLeft:"30px", borderRadius:"10px", border:"none",background:"white"
          }}><FiEdit style={{width:"20px",height:"20px"}}/></button></td>
        </tr>

        {/* Row 2 */}
        <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
         {/* Row 2 */}
         <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

         {/* Row 2 */}
        <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr> {/* Row 2 */}
        <tr style={{textAlign:"center"}}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>


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

export default Pemantauan7
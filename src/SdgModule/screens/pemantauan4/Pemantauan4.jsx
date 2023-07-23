import React, { useState} from 'react'
import Sidebar from '../../layout/sidebar/Sidebar'
import Navbar from '../../layout/navbar/Navbar'
import './Pemantauan4.scss'
import Dalls6 from './assets/210058.svg'
import Dalls7 from './assets/Plan Malaysia ngn jata negara.svg'
import Dalls8 from './assets/Success.svg'
import { RxCross2 } from 'react-icons/rx'
import { IoMdArrowDropup } from 'react-icons/io'
import { Pagination } from 'antd';
import { Button, Modal } from 'antd';
import ModalBig from './ModalBig'


const Pemantauan4 = () => {
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
          <Sidebar />
        </div>

        <div className='navbar-peman'>
          <Navbar style={{ border: "1px solid blue" }} />
          <div className='newpeman4'>
            <div className='p4-btns'>


              <button style={{ background: "#90BFCA" }}>
            <ModalBig showModal2={showModal2} isModalOpen2={isModalOpen2} handleOk2={handleOk2} handleCancel2={handleCancel2} />

              </button>
              <button style={{ background: "#DADADA" }}>SEMAKAN</button>
            </div>
            <div className='inner-peman4'>
              <div className='p4-input'>




                <div className='p4inner-input'>
                  <span>Dimensi</span>
                  <input placeholder='Pilih Dimensi' />
                  <div className='icons'>
                    <RxCross2/>
                    <IoMdArrowDropup style={{ marginBottom:"10px"}}/>
                  </div>
                  <p style={{ paddingTop: "10px" }}><b>Dimensi Ekonomi</b></p>
                  <p>Dimensi Alam Sekitar</p>
                  <p>Dimensi social</p>
                </div>

                <div className='p4inner-input1'>
                  <span>Dimensi</span>
                  <input placeholder='Pilih Komponen' />
                  <div className='icons'>
                    <RxCross2/>
                    <IoMdArrowDropup style={{ marginBottom:"10px"}}/>
                  </div>
                  <p style={{ paddingTop: "10px" }}> Pendapatan dan pandapatan</p>
                  <p>Penganagkutan</p>
                  <p ><b> Komunikasi </b></p>
                  <p> Pendidikan</p>
                  <p>Kehidupankerja</p>
                </div>

                <div className='p4inner-input'>
                  <span>intikatar</span>
                  <input placeholder='Pilih Dimensi' />
                  <div className='icons'>
                    <RxCross2/>
                    <IoMdArrowDropup style={{ marginBottom:"10px"}}/>
                  </div>
                  <p style={{ paddingTop: "10px" }}>Pellangan talian talipon tetap dan selular /1000 penduduk</p>
                  <p > <b>Pelanggan internet/1000 pendukk</b></p>
                  
                </div>

                <div className='p4inner-input'>
                  <span>Dimensi</span>
                  <input placeholder='Pilih Dimensi' />
                  <div className='icons'>
                    <RxCross2/>
                    <IoMdArrowDropup style={{ marginBottom:"10px"}}/>
                  </div>
                  <p style={{ paddingTop: "10px" }}><b>2021</b></p>               
                  <p>2021</p>
                </div>
                <div className='p4-buttonz'>
                    {/* <button style={{width:"80px" ,height:"30px" ,color:"#63B2FC", marginLeft:"20px"}}> Cari</button> */}
                    {/* <button style={{width:"80px" ,height:"30px" ,color:"#FF4B55", background:"#FF99AA"}}> Reset</button> */}
                    <Button style={{width:"80px" ,height:"30px", marginLeft:"20px" ,color:"white", background:"#63B2FC"}} type="primary" onClick={showModal1}>
     Cari
      </Button>
      <Modal title="PERINGATAN" open={isModalOpen1} onOk={handleOk1} onCancel1={handleCancel1}>
        <p style={{borderTop:'1px solid gray'}}></p>
        
        <img src={ Dalls8 } alt='' style={{width:"60px",height:"60px", marginRight:"10px" }} />

        <span>Maklumat berjaya dihantar. <br/> Pengesahan akan mengambil masa 3 hingga 7 hari bekerja.</span>
      </Modal>

      <Button style={{width:"80px" ,height:"30px" ,color:"#63B2FC", marginLeft:"20px",background:"#FF99AA", color:"#FF4B55"}} type="primary" onClick={showModal}>
        Reset
      </Button>
      <Modal title="PERINGATAN" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p style={{borderTop:'1px solid #495057',margin:"10px 0 20px 0"}}></p>
         <p>Adakah anda pasti untuk mengemaskini maklumat ini?</p>
        
      </Modal>
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
          <td><button style={{width:"90px", height:"20px", borderRadius:"10px", border:"none",background:"black"
          ,color:"white"
          }}>kemaskini</button></td>
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
          <div className='final-img'>
            <img src={Dalls6} alt='' style={{ margin: "15px" }} />
            <img src={Dalls7} alt='' style={{ margin: "15px 0 0 0" }} />
          </div>
        </div>


      </div>

    </>
  )
}

export default Pemantauan4
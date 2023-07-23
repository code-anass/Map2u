import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './Pemantauan4.scss'
import Xl from './assets/xlsx.svg'


const ModalBig = ({ showModal2, isModalOpen2, handleOk2, handleCancel2 }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

  return (
    <>
      <Button type="primary" onClick={showModal2} style={{ background: "#90BFCA" , margin:"0 10px 0 0"}}>
        Open Modal
      </Button>
      <Modal
        title="KEMASKINI MAKLUMAT"
        visible={isModalOpen2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      >
      <div style={{ border: "0.1px solid rgba(128, 128, 128, 0.3)" }}></div>
      <h6 style={{marginTop:"30px"}}  >Data</h6>
      <div className='inner-contentp44'>
    <label>Dimensi</label><br/>
    <input placeholder='Dimensi Ekonomi'/>
    <label>KOMPONEN</label><br/>
    <input placeholder='KOMPONEN'/>
    <label>INDIKATOR</label><br/>
    <input placeholder='Pelanggan internet/1000 penduduk'/>
    <label>NILAI INDEKS</label>
    <div className='white-line'>0.25</div>
      </div>
      <h6>Lampiram</h6>
       <div className='mta-p4'>
       <label>Muatnaik Lampiran</label><br></br>
<img src={Xl} alt='' /> <span>data_ekonomi.xlsx</span>
       </div>
       <h6 style={{marginTop:"30px"}}>Maklumat Agensi</h6>
      <div className='inner-contentp44'>
      <label>Nama   </label>
    <div className='white-line'>Penolong Pegawai J21</div>
    <label>Jawatan</label>
    <div className='white-line'>Penolong Pegawai J21</div>

      <label>Sumber Data</label>
    <div className='white-line'>Majlis Perbandaran Klang</div>
      
    <label>NJabatan/Agensi/Unit</label>
    <div className='white-line'>PlanMalaysia</div>
      
      </div>
      </Modal>
    </>
  );
};

export default ModalBig

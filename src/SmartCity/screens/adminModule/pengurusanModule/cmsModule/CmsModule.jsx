import React, { useState, useEffect } from "react";
import "./cmsmodule.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import CmsModuleTable from "components/smartCity/Tables/CmsModuleTable";
import TambahModal from "components/smartCity/modals/tambahmodal/TambahModal";
import AOS from "aos";
function CmsModule() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="cms-module" data-aos="fade-down" data-aos-duration="1000">
      {show ? <TambahModal show={show} setShow={setShow} /> : null}

      <h3>PENGURUSAN DASAR PERBANDARAN DPN2</h3>
      <div className="table-data">
        <h4>Senarai Makhlumat DPN2</h4>
        <div className="row-data">
          <p>Sila kemaskini maklumat di bawah</p>
          <div className="tambah" onClick={() => setShow(true)}>
            <AiFillPlusCircle />
            <p>Tambah</p>
          </div>
        </div>
        <CmsModuleTable />
      </div>
    </div>
  );
}

export default CmsModule;

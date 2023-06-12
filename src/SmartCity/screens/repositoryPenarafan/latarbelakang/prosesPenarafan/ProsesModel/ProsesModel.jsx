import React, { useState } from "react";
import { Button, Modal, QRCode } from "antd";
import "./processmodel.scss";
import { ImDownload3 } from "react-icons/im";
const ProsesModal = ({ show, setShow }) => {
  return (
    <>
      <Modal
        open={show}
        onCancel={() => setShow(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        onOk={() => setShow(false)}
        okText="Tutup"
      >
        <div className="process-modal">
          <p></p>
          <p>Scan QR code dibawah untuk pembelian MS ISO 37122:2019</p>
          <QRCode value="atau klik pautan dibawah" />
          <p>atau klik pautan dibawah</p>
          <Button type="primary" icon={<ImDownload3 />}>
            Pembelian MS ISO 37122:2019
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ProsesModal;

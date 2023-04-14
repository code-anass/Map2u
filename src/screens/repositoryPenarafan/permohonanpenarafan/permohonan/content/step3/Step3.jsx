import React from "react";
import { Form, Row, Col, Input, Select, Radio, Button } from "antd";
import "./step3.scss";
import { FolderOpenOutlined } from "@ant-design/icons";

let kategory = ["Sila Pilih", "Tahap 1 : Smart City Early Adopter"];
let years = [
  "Sila Pilih",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
];
const { Option } = Select;

function Step3({ current, setCurrent }) {
  const [form] = Form.useForm();

  return (
    <div className="step3-form">
      <h3 className="heading">PERMOHONAN PENARAFAN BANDAR PINTAR</h3>
      <div className="notice">
        Sila isi maklumat - maklumat dibawah dan tekan butang&nbsp;
        <b>"Simpan & Seterusnya."</b>
      </div>
      <h3>1. PENGENALAN</h3>
      <i>
        Permohonan Penarafan Bandar Pintar Malaysia boleh dikemukakan oleh
        mana-mana Pihak Berkuasa Tempatan (PBT) yang layak dan telah melepasi
        senarai kriteria yang telah ditetapkan. Tiga (3) kriteria utama yang
        wajib dipatuhi di peringkat PBT termasuk :
      </i>
      <ol>
        <li>Mempunyai Blueprint atau Pelan Tindakan Bandar Pintar;</li>
        <li>Menubuhkan Unit/Jawatankuasa Bandar Pintar; dan</li>
        <li>Mempunyai Initial Dashboard/ Mini Command Center.</li>
      </ol>
      <p>
        PBT juga perlu dinilai dari segi pematuhan kepada 10 indikator daripada
        MS ISO 37122:2019.
      </p>
      <Form form={form} className="" onFinish={alert} style={{ zIndex: 0 }}>
        <div className="steps-footer">
          {current > 0 ? (
            <Button onClick={() => setCurrent(current - 1)}>Previous</Button>
          ) : (
            <div></div>
          )}
          <div className="btn-x">
            <Button type="primary" htmlType="submit">
              Simpan
            </Button>
            <Button type="primary" onClick={() => setCurrent(0)}>
              Seterusnya
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Step3;

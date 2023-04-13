import React, { useEffect } from "react";
import permohonan from "../../../../assets/repositoryPenarafan/permohan/permohonan.png";
import "./permohonan.scss";
import { Form, Row, Col, Input, Select, Steps } from "antd";
import AOS from "aos";
const { Option } = Select;
function Permohonan() {
  const [form] = Form.useForm();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
  return (
    <div className="permohonan" data-aos="fade-right" data-aos-duration="2000">
      <img src={permohonan} alt="" />
      <div className="form">
        <Steps
          size="large"
          current={5}
          style={{
            padding: "20px 0px",
          }}
          items={[
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
            {
              title: "",
            },
          ]}
        />
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
          PBT juga perlu dinilai dari segi pematuhan kepada 10 indikator
          daripada MS ISO 37122:2019.
        </p>
        <Form form={form} className="" onFinish={alert} style={{ zIndex: 0 }}>
          <div className="form-inputs">
            <Row justify="space-between">
              <Col span={5}>
                <p>
                  Nama PBT <span>*</span>
                </p>
              </Col>
              <Col span={18}>
                <Form.Item
                  label=""
                  name="kodPbt"
                  rules={[
                    {
                      required: true,
                      message: "Maklumat wajib diisi.",
                    },
                  ]}
                >
                  <Input className="input-primary" placeholder="" value="" />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col span={5}>
                <p>
                  Kategory Permohonan <span>*</span>
                </p>
              </Col>
              <Col span={18}>
                <Form.Item
                  name="kategory"
                  rules={[
                    {
                      required: true,
                      message: "Kategory is required",
                    },
                  ]}
                >
                  <Select>
                    {kategory?.map((v) => {
                      return (
                        <Option value={v}>
                          {v.charAt(0).toUpperCase() + v.slice(1)}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col span={5}>
                <p>
                  Tahun <span>*</span>
                </p>
              </Col>
              <Col span={18}>
                <Form.Item
                  name="kategory"
                  rules={[
                    {
                      required: true,
                      message: "Kategory is required",
                    },
                  ]}
                >
                  <Select>
                    {years?.map((v) => {
                      return (
                        <Option value={v}>
                          {v.charAt(0).toUpperCase() + v.slice(1)}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Form>
        <h3>2. ARAHAN</h3>
        <i>
          Berikut merupakan kriteria yang wajib dipatuhi untuk dinilai bagi
          permohonan Penarafan Bandar Pintar Malaysia Sila tanda dan lampirkan
          malkumat yang berkaitan:
        </i>
      </div>
    </div>
  );
}

export default Permohonan;

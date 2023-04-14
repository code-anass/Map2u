import React from "react";
import { Form, Row, Col, Input, Select, Radio, Button } from "antd";
import "./step1.scss";
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

function Step1({ current, setCurrent }) {
  const [form] = Form.useForm();

  return (
    <div className="step1-form">
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
        <h3>2. ARAHAN</h3>
        <i>
          Berikut merupakan kriteria yang wajib dipatuhi untuk dinilai bagi
          permohonan Penarafan Bandar Pintar Malaysia Sila tanda dan lampirkan
          malkumat yang berkaitan:
        </i>
        <Row justify="space-between" className="my-row">
          <Col span={9}>
            <div className="spn">
              1. Mempunyai Blueprint atau Pelan Tindakan Bandar Pintar
            </div>
          </Col>
          <Col span={5}>
            <div className="spn">
              <Radio.Group value={"1"}>
                <Radio value={1}>
                  <div className="spn">Ya</div>
                </Radio>
                <Radio value={2}>
                  <div className="spn">Tidak</div>
                </Radio>
              </Radio.Group>
            </div>
          </Col>
          <Col span={8}>
            <Input
              addonAfter={<FolderOpenOutlined className="spn" />}
              defaultValue="mysite"
            />
          </Col>
        </Row>
        <Row justify="space-between" className="my-row">
          <Col span={9}>
            <div className="spn">
              2. Menubuhkan Unit/Jawatankuasa Bandar Pintar
            </div>
          </Col>
          <Col span={5}>
            <div className="spn">
              <Radio.Group value={"1"}>
                <Radio value={1}>
                  <div className="spn">Ya</div>
                </Radio>
                <Radio value={2}>
                  <div className="spn">Tidak</div>
                </Radio>
              </Radio.Group>
            </div>
          </Col>
          <Col span={8}>
            <Input
              addonAfter={<FolderOpenOutlined className="spn" />}
              defaultValue="mysite"
            />
          </Col>
        </Row>
        <Row justify="space-between" className="my-row">
          <Col span={9}>
            <div className="spn">
              3. Mempunyai sekurang-kurangnya Initial Dashboard/ Mini Command
              Center
            </div>
          </Col>
          <Col span={5}>
            <div className="spn">
              <Radio.Group value={"1"}>
                <Radio value={1}>
                  <div className="spn">Ya</div>
                </Radio>
                <Radio value={2}>
                  <div className="spn">Tidak</div>
                </Radio>
              </Radio.Group>
            </div>
          </Col>
          <Col span={8}>
            <Input
              addonAfter={<FolderOpenOutlined className="spn" />}
              defaultValue="mysite"
            />
          </Col>
        </Row>
        <div className="steps-footer">
          {current > 0 ? <Button>Previous</Button> : <div></div>}
          <div className="btn-x">
            <Button type="primary" htmlType="submit">
              Simpan
            </Button>
            <Button type="primary" onClick={() => setCurrent(current + 1)}>
              Seterusnya
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Step1;

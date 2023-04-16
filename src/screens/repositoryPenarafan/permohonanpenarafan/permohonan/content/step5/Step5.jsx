import React, { useState } from "react";
import { Form, Row, Col, Input, Select, Table, Button } from "antd";
import "./step5.scss";
import { FolderOpenOutlined } from "@ant-design/icons";
import InputModal from "./InputModal";
let kategory = [
  "Sila Pilih",
  "Melaksanakan tempahan perkhidmatan rekreasi awam secara atas talian",
  "Tidak melaksanakan tempahan perkhidmatan rekreasi awam secara atas talian",
];
const columns = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Pekhidmatan",
    dataIndex: "pekhidmatan",
    key: "pekhidmatan",
  },

  {
    title: "Pautan",
    dataIndex: "pautan",
    key: "pautan",
  },
];
const { Option } = Select;

function Step5({ current, setCurrent }) {
  const [form] = Form.useForm();
  const [inputModal, setInputModal] = useState(false);
  const [data, setData] = useState([]);
  return (
    <div className="step5-form">
      {inputModal ? (
        <InputModal
          inputModal={inputModal}
          setInputModal={setInputModal}
          data={data}
          setData={setData}
        />
      ) : null}
      <h3 className="heading">PERMOHONAN PENARAFAN BANDAR PINTAR</h3>
      <div className="notice">
        Sila&nbsp; <b>isi &nbsp;</b> maklumat - maklumat dibawah dan tekan
        butang&nbsp;
        <b>"Simpan"</b>
      </div>
      <h3>
        Q4 : PERCENTAGE OF PUBLIC SPORT AND RECREATION FACILITIES SERVICES THAT
        CAN BE BOOKED ONLINE
      </h3>
      <Form form={form} className="" onFinish={alert} style={{ zIndex: 0 }}>
        <div className="form-inputs">
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
          <span className="span-x">
            Tempahan sukan dan rekreasi secra dalam talian memudahkan orang awam
            untuk membuat tempahan pada bila-bila masa dan dimana saja. Melalui
            rekod tempahan dalam talian dapat memudahkan PBT untuk menguruskan
            kemudahan sukan dan rekreasi dengan lebih efektif.
          </span>
        </div>

        <Row>
          <Col span={17}>
            <p>
              Jumlah perkhidmatan sukan dan rekreasi awam yang ditawarkan oleh
              PBT <span>*</span>
            </p>
          </Col>
          <Col span={3}>
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
              <Input className="input-primary" placeholder="ex: 100" value="" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={17}>
            <p>
              Perkhidmatan rekreasi awam yang boleh ditempah secara dalam
              talian)<span>*</span>
            </p>
          </Col>
          <Col span={3}>
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
              <Input className="input-primary" placeholder="ex: 100" value="" />
            </Form.Item>
          </Col>
        </Row>
        <div className="table-data">
          <div className="table-content">
            <Table dataSource={data} columns={columns} rowKey={"i"} />
          </div>
          <div className="table-footer">
            <Button type="primary" onClick={() => setInputModal(true)}>
              +Tambah
            </Button>
            <div className="notice">
              Sila tekan butang "Tambah" untuk menambah maklumat Perkhidmatan.
            </div>
          </div>
        </div>
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
            <Button type="primary" onClick={() => setCurrent(current + 1)}>
              Seterusnya
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Step5;

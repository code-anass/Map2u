import React, { useState, useEffect } from "react";
import "./smartcitynewform.scss";
import AOS from "aos";
import pengurusan from "../../../../../assets/repositoryPenarafan/pengurusan.png";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  message,
  Col,
  Row,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
const { Option } = Select;
let kategory = [
  "Sila Pilih",
  "Smart Government",
  "Smart Economy",
  "Smart Living",
  "Smart Environment",
  "Smart Mobility",
  "Smart Digital Infrastructure",
  "Smart People",
  "Smart City",
];
function SmartCityNewForm() {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="smartcitynewform"
      data-aos="fade-down"
      data-aos-duration="3000"
    >
      <div className="top">
        <div>
          <h3>TAMBAH INDIKATOR BANDAR PINTAR</h3>
        </div>
        <div className="img">
          <img src={pengurusan} alt="" />
        </div>
      </div>
      <div className="form-data">
        <div className="left">
          <Form
            form={form}
            layout="vertical"
            className="push-notification-form"
            onFinish={alert}
          >
            <Form.Item
              label="Komponen"
              name="komponen"
              rules={[
                {
                  required: true,
                  message: "Maklumat wajib diisi.",
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
            <Form.Item
              label="Indikator Bandar"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Maklumat wajib diisi.",
                },
              ]}
            >
              <Input placeholder="Title" value="" />
            </Form.Item>
            <Form.Item
              label="Indikator"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Maklumat wajib diisi.",
                },
              ]}
            >
              <Input placeholder="Title" value="" />
            </Form.Item>
            <Form.Item
              label="ISO"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Maklumat wajib diisi.",
                },
              ]}
            >
              <Input placeholder="Title" value="" />
            </Form.Item>
            <Form.Item
              label="Numerator"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Maklumat wajib diisi.",
                },
              ]}
            >
              <Input.TextArea rows={5} placeholder="Title" value="" />
            </Form.Item>
            <Form.Item
              label="Denominator"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Maklumat wajib diisi.",
                },
              ]}
            >
              <Input.TextArea rows={5} placeholder="Title" value="" />
            </Form.Item>
            <Form.Item
              label="Formula"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Maklumat wajib diisi.",
                },
              ]}
            >
              <Input.TextArea rows={5} placeholder="Title" value="" />
            </Form.Item>
            <Form.Item
              label="Status"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Maklumat wajib diisi.",
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "jack",
                    label: "Sila Pilih",
                  },
                  {
                    value: "lucy",
                    label: "Aktif",
                  },
                  {
                    value: "tom",
                    label: "Tidak Aktif",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className="btn-primary" type="primary">
                Simpan
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="right">
          <h3>SKOR INDIKATOR</h3>
          <hr />
          <Form form={form2} className="" onFinish={alert} layout="vertical">
            <Row justify="space-between">
              <Col span={15}>
                <Form.Item
                  label="Skor"
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
              <Col span={8}>
                <Form.Item
                  label="Markah"
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
            <Form.Item>
              <Button htmlType="submit" type="primary" danger>
                Tambah
              </Button>
            </Form.Item>
          </Form>
          <table>
            <tr>
              <th>Skor</th>
              <th>Markah</th>
              <th></th>
            </tr>
            <tr>
              <td>skor 1</td>
              <td>1</td>
              <td>
                <DeleteOutlined className="icon" />
              </td>
            </tr>
            <tr>
              <td>skor 1</td>
              <td>1</td>
              <td>
                <DeleteOutlined className="icon" />
              </td>
            </tr>
            <tr>
              <td>skor 1</td>
              <td>1</td>
              <td>
                <DeleteOutlined className="icon" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SmartCityNewForm;

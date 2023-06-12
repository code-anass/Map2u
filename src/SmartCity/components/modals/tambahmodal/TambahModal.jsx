import React from "react";
import "./tambah.scss";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  message,
  Col,
  Modal,
  Row,
} from "antd";
function TambahModal({ show, setShow, data }) {
  const [form] = Form.useForm();

  return (
    <Modal
      open={show}
      onCancel={() => setShow(false)}
      closable={false}
      footer={null}
      className="modalStyle"
    >
      <div className="tambah-modal">
        <div className="top-header">
          <p>
            <b>Tambah Pemantuan</b>
          </p>
          <h2 className="btnCnl" onClick={() => setShow(false)}>
            <b>X </b>
          </h2>
        </div>
        <div className="content-row">
          <p>Sila isi maklumat di bawah dengan cermat dan tepat</p>
          <Form form={form} className="" onFinish={alert} layout="vertical">
            <Form.Item
              label="Item"
              name="item"
              rules={[
                {
                  required: true,
                  message: "Maklumat wajib diisi.",
                },
              ]}
            >
              <Input
                className="input-primary"
                placeholder=""
                defaultValue="Princip 1"
              />
            </Form.Item>

            <Form.Item
              label="Perkara"
              name="perkara"
              rules={[
                {
                  required: true,
                  message: "Maklumat wajib diisi.",
                },
              ]}
            >
              <Input className="input-primary" placeholder="" value="" />
            </Form.Item>
            <Form.Item
              label="Status"
              name="status"
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
            <div className="btn-row">
              <Form.Item>
                <Button
                  type="primary"
                  className="btn-kembali"
                  onClick={() => setShow(false)}
                >
                  Kembali
                </Button>
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Simpan
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

export default TambahModal;

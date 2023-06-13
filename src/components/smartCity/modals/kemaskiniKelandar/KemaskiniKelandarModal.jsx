import React from "react";
import "./kemaskiniKelandar.scss";
import { Button, Form, Input, Select, Modal, Row, Col } from "antd";
function KemaskiniKelandarModal({ show, setShow, data }) {
  const [form] = Form.useForm();

  return (
    <Modal
      open={show}
      onCancel={() => setShow(false)}
      closable={false}
      footer={null}
      className="modalKemStyle"
    >
      <div className="kemaskini-modal">
        <div className="top-header">
          <p>
            <b>KEMASKINI KALENDAR JANGKA MASA</b>
          </p>
          <h2 className="btnCnl" onClick={() => setShow(false)}>
            <b>X </b>
          </h2>
        </div>
        <div className="content-row">
          <p>Sila isi maklumat di bawah dengan cermat dan tepat</p>
          <Form form={form} className="" onFinish={alert} layout="vertical">
            <Row justify="space-between">
              <Col span={11}>
                <Form.Item
                  label="Tarikh Mula"
                  name="tarikhmula"
                  rules={[
                    {
                      required: true,
                      message: "Maklumat wajib diisi.",
                    },
                  ]}
                >
                  <Input className="input-primary" placeholder="" />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item
                  label="Tarikh Tamat"
                  name="tarikhtamat"
                  rules={[
                    {
                      required: true,
                      message: "Maklumat wajib diisi.",
                    },
                  ]}
                >
                  <Input className="input-primary" placeholder="" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Jangka Masa"
              name="jangkamasas"
              rules={[
                {
                  required: true,
                  message: "Maklumat wajib diisi.",
                },
              ]}
            >
              <Input className="input-primary" placeholder="" value="" />
            </Form.Item>
            <div className="btn-row">
              <div className="btns-jangka">
                <p className="jm-pendek">Jangka Masa Pendek</p>
                <p className="jm-sederhana">Jangka Masa Sederhana</p>
                <p className="jm-penjang">Jangka Masa Panjang</p>
              </div>
              <Form.Item>
                <Button htmlType="submit" type="primary" className="simpan">
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

export default KemaskiniKelandarModal;

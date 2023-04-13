import React, { useEffect, useState } from "react";
import { Row, Col, Form, Input, Button, Select } from "antd";
import MapContainer from "../../../../components/map/currentlocation/CurrentLocation";
import { useNavigate } from "react-router-dom";
import permohonan from "../../../../assets/repositoryPenarafan/permohan/permohonan.png";
import "./profilePbt.scss";
import AOS from "aos";
function ProfilePbt() {
  const [currentPosition, setCurrentPosition] = useState({});
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { Option } = Select;
  let kategory = [
    "Sila Pilih",
    "Majlis Bandaraya",
    "Perbandaran",
    "Majlis Daerah",
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    form.setFieldsValue({
      latitude: currentPosition.lat,
      longitude: currentPosition.lng,
    });
  }, [currentPosition]);
  return (
    <div className="profile-pbt" data-aos="fade-down" data-aos-duration="2000">
      <img src={permohonan} alt="" />
      <div className="form">
        <h3 className="heading">PROFILE PBT</h3>
        <div className="notice">
          Sila isi maklumat - maklumat dibawah dan tekan butang "Simpan."
        </div>
        <Form form={form} className="" onFinish={alert} style={{ zIndex: 0 }}>
          <div className="form-inputs">
            <Row justify="space-between">
              <Col span={6}>
                <p>
                  Kod PBT <span>*</span>
                </p>
              </Col>
              <Col span={15}>
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
            </Row>{" "}
            <Row justify="space-between">
              <Col span={6}>
                <p>
                  Nama PBT <span>*</span>
                </p>
              </Col>
              <Col span={15}>
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
            </Row>{" "}
            <Row justify="space-between">
              <Col span={6}>
                <p>
                  Kategory PBT <span>*</span>
                </p>
              </Col>
              <Col span={15}>
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
              <Col span={6}>
                <p>
                  Jumlah Penduduk (Orang)
                  <span>*</span>
                </p>
              </Col>
              <Col span={15}>
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
              <Col span={6}>
                <p>
                  Person In Charge (PIC)
                  <span>*</span>
                </p>
              </Col>
              <Col span={15}>
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
            <div style={{ marginBottom: "15px" }}>
              <MapContainer
                currentPosition={currentPosition}
                setCurrentPosition={setCurrentPosition}
              />
            </div>
            <Row justify="space-between">
              <Col span={6}>
                <p>
                  Latitude
                  <span>*</span>
                </p>
              </Col>
              <Col span={15}>
                <Form.Item
                  label=""
                  name="latitude"
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
              <Col span={6}>
                <p>
                  Longitude
                  <span>*</span>
                </p>
              </Col>
              <Col span={15}>
                <Form.Item
                  label=""
                  name="longitude"
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
          </div>
          <Form.Item>
            <Button htmlType="submit" type="primary" block>
              Simpan
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ProfilePbt;

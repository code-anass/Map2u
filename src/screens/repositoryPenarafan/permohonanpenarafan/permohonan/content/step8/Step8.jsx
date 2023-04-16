import React, { useState } from "react";
import { Form, Row, Col, Input, Select, Table, Button, Space } from "antd";
import "./step8.scss";
import {
  EyeOutlined,
  DeleteOutlined,
  ZoomInOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Document, Page, pdfjs } from "react-pdf";
import ViewDetailsModal from "./ViewDetailsModal";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
let kategory = [
  "Sila Pilih",
  "Mempunyai lampu jalan yang diubahsuai refurbished dan baru dipasang newly installed",
  "Tidak mempunyai lampu jalan yang diubahsuai refurbished dan baru dipasang newly installed",
];

const { Option } = Select;

function Step8({ current, setCurrent }) {
  const [form] = Form.useForm();
  const [files, setFiles] = useState([]);
  const [myNumPages, setMyNumPages] = useState([]);
  const [file, setFile] = useState({});
  const [viewDetails, setViewDetails] = useState(false);
  const [ext, setExt] = useState("");
  function onDocumentLoadSuccess({ numPages }, index) {
    let arr = myNumPages;
    arr.splice(index, 0, numPages);
    setMyNumPages([...arr]);
  }

  const handleFiles = (e) => {
    let fle = e.target.files[0];
    fle.id = files.length + 1;
    setFiles((prev) => [...prev, fle]);
  };
  const viewDetailsHandler = (file) => {
    let ext = file?.name?.split(".").at(-1);

    setFile(file);
    setExt(ext);
    setViewDetails(true);
  };
  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Tajuk",
      dataIndex: "name",
      key: "pekhidmatan",
      width: "70%",
    },
    {
      title: "",
      dataIndex: "id",
      key: "action",
      render: (record) => {
        return (
          <Space>
            <EyeOutlined
              className="icon-permohonan"
              onClick={() => {
                let file = files.find((val) => val.id == record);
                viewDetailsHandler(file);
              }}
            />
            <DeleteOutlined
              className="icon-permohonan icon-del"
              onClick={() => {
                let index = files.findIndex((val) => val.id == record);
                let arr = files;
                arr.splice(index, 1);
                setFiles([...arr]);
              }}
            />
          </Space>
        );
      },
    },
  ];

  return (
    <div className="step8-form">
      {viewDetails ? (
        <ViewDetailsModal
          viewDetails={viewDetails}
          setViewDetails={setViewDetails}
          file={file}
          ext={ext}
        />
      ) : null}
      <h3 className="heading">PERMOHONAN PENARAFAN BANDAR PINTAR</h3>
      <div className="notice">
        Sila&nbsp; <b>isi &nbsp;</b> maklumat - maklumat dibawah dan tekan
        butang&nbsp;
        <b>"Simpan"</b>
      </div>
      <h3>
        Q7 : STREET LIGHTING THAT HAS BEEN REFURBISHED AND NEWLY INSTALLED
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
            Membaik pulih lampu jalan dan memasang lampu jalan baru dapat
            membantu meningkatkan kecekapan tenaga dan mengurangkan kos utiliti
            dan penyelenggaraan.
          </span>
        </div>

        <Row>
          <Col span={16}>
            <p>
              Jumlah lampu jalan di kawasan PBT
              <span>*</span>
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
          <Col span={16}>
            <p>
              Lampu jalan menggunakan sistem pintar
              <span>*</span>
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
            <h2>DOKUMEN PEMBUKTIAN</h2>
            <hr />
            <div className="notice">
              Drag and Drop the files ke dalam Fileinput dan kemudian semua fail
              akan dimuat naik secara automatik. Fail yang dimuat naik akan
              dipaparkan dalam Senarai di bawah. Anda boleh mengedit butiran
              fail dalam Senarai. Padam dengan menekan ikon{" "}
              <DeleteOutlined className="icon-permohonan icon-del" /> .
              Kemaskini dengan menekan maklumat terlibat.
            </div>
            <div className="imgs-div">
              <div
                className="draggable-imgs"
                onClick={() => document.getElementById("upload-files").click()}
              >
                {files.map((val, index) => {
                  let ext = val?.name?.split(".").at(-1);
                  if (ext == "pdf") {
                    return (
                      <div
                        className="img-container"
                        key={index}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <div className="img-top">
                          <Document
                            file={val}
                            onLoadSuccess={(e) =>
                              onDocumentLoadSuccess(e, index)
                            }
                          >
                            {Array.from(
                              new Array(myNumPages[index]),
                              (el, index) => (
                                <Page
                                  key={`page_${index + 1}`}
                                  pageNumber={index + 1}
                                  width={210}
                                />
                              )
                            )}
                          </Document>
                        </div>
                        <div className="img-name">
                          <p>{val.name}</p>
                        </div>
                        <div className="img-footer">
                          <CheckOutlined className="icon-chk" />
                          <div className="img-zoom">
                            <ZoomInOutlined
                              className="permohonan-icon zoo"
                              onClick={() => viewDetailsHandler(val)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  } else if (["png", "jpeg"].includes(ext)) {
                    return (
                      <div
                        className="img-container"
                        key={index}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <div className="img-top">
                          <img src={URL.createObjectURL(val)} />
                        </div>
                        <div className="img-name">
                          <p>{val.name}</p>
                        </div>
                        <div className="img-footer">
                          <CheckOutlined className="icon-chk" />
                          <div className="img-zoom">
                            <ZoomInOutlined
                              className="permohonan-icon zoo"
                              onClick={() => viewDetailsHandler(val)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                  }
                })}
              </div>
            </div>
            <Button
              type="primary"
              className="btnn"
              onClick={() => document.getElementById("upload-files").click()}
            >
              Browse Files
            </Button>
            <input
              type="file"
              id="upload-files"
              className="imgs-upload"
              onChange={handleFiles}
            />
            <p className="ext-note">
              ampirkan pelan kawasan PBT dengan radius liputan CCTV (size fail
              maksima 2mb) File's Format : .pdf, .doc, .docx, .jpg, .png, .dwg,
              .shp
            </p>
            <h2>Senarai Dokumen yang telah dimasukkan</h2>
            <p>{`Total ${files.length} items`}</p>
            <Table dataSource={files} columns={columns} rowKey={"id"} />
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

export default Step8;

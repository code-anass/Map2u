import React from "react";
import { Select, Row, Col, Switch } from "antd";
const { Option } = Select;
function Common({ category, tableData }) {
  return (
    <>
      <p className="p-main">
        <b>KEMASKINI STATUS PELAKSANAAN TINDAKAN DAN STRATEGI</b>
      </p>
      <p>Kategori Teras :</p>
      <div className="select-cat">
        <Select
          // onChange={handleChange}
          style={{
            width: 400,
          }}
          placeholder="Select"
        >
          {category?.map((v) => {
            return <Option value={v}>{v}</Option>;
          })}
        </Select>
        <div className="inputs-col">
          <input type="text" placeholder="Search.." />
        </div>
      </div>
      <div className="table-row">
        <Row className="my-row">
          <Col span={1}>No.</Col>
          <Col span={11}>Inisiatif Utama </Col>
          <Col span={4}>Dalam Perancangan</Col>
          <Col span={4}>Dalam Pelaksanaan</Col>
          <Col span={4}>Siap Dilaksanakan</Col>
        </Row>
        {tableData.map((item, index) => {
          return (
            <>
              <Row className="heading-row">{item.heading}</Row>
              {item.data.map((item2, index2) => {
                return (
                  <Row>
                    <Col span={1}>{index2 + 1}</Col>
                    <Col span={11}>{item2.title}</Col>
                    <Col span={3} offset={1}>
                      <Switch defaultChecked />
                    </Col>
                    <Col span={3} offset={1}>
                      <Switch defaultChecked />
                    </Col>
                    <Col span={3} offset={1}>
                      <Switch defaultChecked />
                    </Col>
                  </Row>
                );
              })}
            </>
          );
        })}
      </div>
    </>
  );
}

export default Common;

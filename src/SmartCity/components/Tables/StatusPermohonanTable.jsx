import React, { useState } from "react";
import { Table, Button, Input, Popconfirm, Space, Select } from "antd";
import {
  PlusCircleOutlined,
  SearchOutlined,
  UploadOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import "./table.css";
import { useNavigate } from "react-router-dom";
export default function StatusPermohonanTable() {
  const navigate = useNavigate();
  return (
    <table>
      <tr>
        <th>#</th>
        <th>
          Kategori Permohonan
          <Select
            showSearch
            style={{
              width: "150px",
            }}
            placeholder="Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "jack",
                label: "Smart Governance",
              },
              {
                value: "lucy",
                label: "Smart Economy",
              },
              {
                value: "tom",
                label: "Smart Living",
              },
            ]}
          />
        </th>
        <th>
          Nama PBT
          <input type="text" />
        </th>
        <th>
          Tahun
          <input type="text" />
        </th>
        <th
          style={{
            width: "150px",
          }}
        >
          Tarikh Permohonan
          <input type="text" />
        </th>
        <th>
          Status
          <Select
            showSearch
            style={{
              width: "100px",
            }}
            placeholder="Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "jack",
                label: "Smart Governance",
              },
              {
                value: "lucy",
                label: "Smart Economy",
              },
              {
                value: "tom",
                label: "Smart Living",
              },
            ]}
          />
        </th>
        <th></th>
      </tr>
      <tr>
        <td>1</td>
        <td>Smart Government</td>
        <td>Governance</td>
        <td>In publishing</td>
        <td>Hellow ordasdf adfd</td>
        <td>In publishing and graphic design,</td>

        <td>
          <EyeOutlined
            className="icon"
            // onClick={() => navigate("/smartcity/details/1")}
          />
          <EditOutlined className="icon" />
          <DeleteOutlined className="icon" />
        </td>
      </tr>
    </table>
  );
}

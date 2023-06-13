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
export default function PengurusanTable() {
  const navigate = useNavigate();
  return (
    <table>
      <tr>
        <th>#</th>
        <th>
          Komponen{" "}
          <Select
            showSearch
            style={{
              width: 100,
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
        <th style={{ width: "140px" }}>
          Indikator Bandar
          <input type="text" />
        </th>
        <th>
          Indikator
          <input type="text" />
        </th>
        <th>
          ISO
          <input type="text" />
        </th>
        <th>
          Numerator
          <input type="text" />
        </th>
        <th>
          Denominator
          <input type="text" />
        </th>
        <th>
          Formula
          <input type="text" />
        </th>
        <th>
          Catan
          <input type="text" />
        </th>
        <th>
          Status
          <Select
            showSearch
            style={{
              width: 100,
            }}
            placeholder="Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
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
        </th>
        <th></th>
      </tr>
      <tr>
        <td>1</td>
        <td>Smart Government</td>
        <td>Governance</td>
        <td>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content
        </td>
        <td>Hellow ordasdf adfd</td>
        <td>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content
        </td>
        <td>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content
        </td>
        <td>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content
        </td>
        <td>adsf adsf asdf</td>
        <td>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content
        </td>
        <td>
          <EyeOutlined
            className="icon"
            onClick={() => navigate("/smartcity/details/1")}
          />
          <EditOutlined className="icon" />
          <DeleteOutlined className="icon" />
        </td>
      </tr>
    </table>
  );
}

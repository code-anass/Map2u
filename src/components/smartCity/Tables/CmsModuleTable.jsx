import { Switch } from "antd";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

function CmsModuleTable() {
  const data = [
    {
      no: 1,
      item: "Visi",
      penerangan: "Bandar Yang Mampan untuk Kesejahteraan Rakyat",
    },
    {
      no: 2,
      item: "Prinsip 1",
      penerangan: "Tadbir Urus Yang Baik",
    },
    {
      no: 3,
      item: "Prinsip 2",
      penerangan: "Bandar Yang Berdaya Huni",
    },
    {
      no: 4,
      item: "Prinsip 3",
      penerangan: "Ekonomy Yang Berdaya Saing",
    },
    {
      no: 4,
      item: "Prinsip 4",
      penerangan: "Pembangunan Bandar Yang Inklusif dan Saksama",
    },
  ];
  return (
    <>
      <table>
        <tr>
          <th>No</th>
          <th>Item</th>
          <th>Penerangan</th>
          <th>Status</th>
          <th>Tindakan</th>
        </tr>
        {data.map((row, key) => {
          return (
            <tr key={key}>
              <td>{row.no}</td>
              <td>{row.item}</td>
              <td>{row.penerangan}</td>
              <td>
                <Switch defaultChecked />
              </td>
              <td>
                <RiDeleteBin6Line className="icon-cms" />
                <BiEdit className="icon-cms" />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default CmsModuleTable;

import { Switch } from "antd";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

function KemaskiniFormulaTable() {
  const data = [
    {
      no: 1,
      item: "Prinsip",
    },
    {
      no: 2,
      item: "Objektif",
    },
    {
      no: 3,
      item: "Strategi",
    },
    {
      no: 4,
      item: "Tindakan",
    },
    {
      no: 5,
      item: "Indikator Pemantauan",
    },
  ];
  return (
    <>
      <table>
        <tr>
          <th>Bil</th>
          <th>Item</th>
          <th>Tindakan</th>
        </tr>
        {data.map((row, key) => {
          return (
            <tr key={key}>
              <td>{row.no}</td>
              <td>{row.item}</td>

              <td>
                <BiEdit className="icon-cms" />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default KemaskiniFormulaTable;

import { Switch } from "antd";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

function KemaskiniFormulaTable() {
  const data = [
    {
      no: 1,
      item: "Pemantauan Jangka Masa Pendek",
    },
    {
      no: 2,
      item: "Pemantauan Jangka Masa Sederhana",
    },
    {
      no: 3,
      item: "Pemantauan Jangka Masa Panjang",
    },
  ];
  return (
    <>
      <table>
        <tr>
          <th>Bil</th>
          <th>Jangka Masa</th>
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

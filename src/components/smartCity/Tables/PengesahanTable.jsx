import { Switch } from "antd";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function PengesahanTable({ isBelum }) {
  const dataSource = [
    {
      key: "1",
      no: "1",
      namepegawai: "Mahmud Abdullah",
      email: "mahmud@planmalaysia.com",
      jabatan: "PLANMalaysia",
      tarikh: "01/06/2023",
    },
    {
      key: "2",
      no: "2",
      namepegawai: "Muhammad Farhan Ridwan Bin Jamaludin",
      email: "farhan@dosm.com",
      jabatan: "PLANMalaysia",
      tarikh: "01/06/2023",
    },
    {
      key: "3",
      no: "3",
      namepegawai: "Munir Bin Muhsin",
      email: "munir@jpsm.com",
      jabatan: "PLANMalaysia",
      tarikh: "01/06/2023",
    },
    {
      key: "4",
      no: "4",
      namepegawai: "Laila Aroha Binti Zamaini",
      email: "laila@jpsm.com",
      jabatan: "PLANMalaysia",
      tarikh: "01/06/2023",
    },
  ];
  const navigate = useNavigate();
  const dataSourceActive = [
    {
      key: "1",
      no: "1",
      namepegawai: "Mahmud Abdullah",
      email: "mahmud@planmalaysia.com",
      jabatan: "PLANMalaysia",
      tarikh: "01/06/2023",
    },
    {
      key: "2",
      no: "2",
      namepegawai: "Muhammad Farhan Ridwan Bin Jamaludin",
      email: "farhan@dosm.com",
      jabatan: "PLANMalaysia",
      tarikh: "01/06/2023",
    },
    {
      key: "3",
      no: "3",
      namepegawai: "Munir Bin Muhsin",
      email: "munir@jpsm.com",
      jabatan: "PLANMalaysia",
      tarikh: "01/06/2023",
    },
    {
      key: "4",
      no: "4",
      namepegawai: "Laila Aroha Binti Zamaini",
      email: "laila@jpsm.com",
      jabatan: "PLANMalaysia",
      tarikh: "01/06/2023",
    },
  ];
  return !isBelum ? (
    <table>
      <tr>
        <th className="bill">Bil</th>
        <th>Nama Pegawai</th>
        <th>Emel</th>
        <th>Jabatan</th>
        <th>Status</th>
        <th>Tindakan</th>
        <th>Tarikh</th>
      </tr>
      {dataSource.map((row, key) => {
        return (
          <tr key={key}>
            <td className="bill">{row.no}</td>
            <td>{row.namepegawai}</td>
            <td>{row.email}</td>
            <td>{row.jabatan}</td>
            <td>
              <span className="td-disahkan">Disahkan</span>
            </td>

            <td>
              <AiOutlineEye className="icon-cms-eye" />
            </td>
            <td>{row.tarikh}</td>
          </tr>
        );
      })}
    </table>
  ) : (
    <table>
      <tr>
        <th className="bill">Bil</th>
        <th>Nama Pegawai</th>
        <th>Emel</th>
        <th>Jabatan</th>
        <th>Status</th>
        <th></th>
      </tr>
      {dataSourceActive.map((row, key) => {
        return (
          <tr key={key}>
            <td className="bill">{row.no}</td>
            <td>{row.namepegawai}</td>
            <td>{row.email}</td>
            <td>{row.jabatan}</td>
            <td>
              <span className="td-span">Dalam Proses Pengesahan</span>
            </td>

            <td>
              <BiEdit
                className="icon-penges"
                onClick={() => navigate("/admin/pengesahanpemant")}
              />
            </td>
          </tr>
        );
      })}
    </table>
  );
}

export default PengesahanTable;

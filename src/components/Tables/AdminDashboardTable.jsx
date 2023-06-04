import React from "react";
import { Table } from "antd";

function AdminDashboardTable() {
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
  return (
    <>
      <table>
        <tr>
          <th className="bill">Bil</th>
          <th>Nama Pegawai</th>
          <th>Emel</th>
          <th>Jabatan</th>
          <th>Tarikh Kemaskini Pemantauan</th>
        </tr>
        {dataSource.map((row, key) => {
          return (
            <tr key={key}>
              <td className="bill">{row.no}</td>
              <td>{row.namepegawai}</td>
              <td>{row.email}</td>
              <td>{row.jabatan}</td>
              <td>{row.tarikh}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default AdminDashboardTable;

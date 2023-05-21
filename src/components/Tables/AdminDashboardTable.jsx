import React from "react";
import { Table } from "antd";
function AdminDashboardTable() {
  const dataSource = [
    {
      key: "1",
      no: "1",
      namepegawai: 32,
      email: "anas@gmail.com",
      jabatan: "PLANMalaysia",
      tarikh: "01/06/2023",
    },
    {
      key: "2",
      no: "2",
      namepegawai: 32,
      email: "anas@gmail.com",
      jabatan: "PLANMalaysia",
      tarikh: "01/06/2023",
    },
    {
      key: "3",
      no: "3",
      namepegawai: 32,
      email: "anas@gmail.com",
      jabatan: "PLANMalaysia",
      tarikh: "01/06/2023",
    },
  ];

  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Nama Pegawai",
      dataIndex: "namepegawai",
      key: "namepegawai",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Jabatan",
      dataIndex: "jabatan",
      key: "jabatan",
    },
    {
      title: "Tarikh Kemaskini Pemantauan",
      dataIndex: "tarikh",
      key: "tarikh",
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
}

export default AdminDashboardTable;

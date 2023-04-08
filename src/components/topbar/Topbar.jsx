import React, { useState } from "react";
import "./topbar.scss";
import MUO from "../../assets/logo/MUO.png";
import secondlogo from "../../assets/logo/secondlogo.png";
import { DownOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate();
  const items = [
    {
      label: "Laman Utama",
      key: "1",
      onClick: () => navigate("/"),
    },
    {
      label: "Latar Belakang",
      key: "2",
      onClick: () => navigate("/latar-belakang"),
    },
    {
      label: "Profil",
      key: "3",

      children: [
        {
          label: "Profile Bandar Pintar Negeri",
          key: "sb11",
          onClick: () => navigate("/profile-bandar"),
        },
        {
          label: "Profile Bandar Pintar Pelan Tindakan",
          key: "sb12",
          onClick: () => null,
        },
        {
          label: "Profile Bandar Pintar Command Center",
          key: "sb13",
          onClick: () => null,
        },
      ],
    },
    {
      label: "Integrasi",
      key: "4",
      children: [
        {
          label: "Perbadanan Putrajaya",
          key: "sb21",
          onClick: () => navigate("/platform-integrasi"),
        },
        {
          label: "Dewan Bandaraya Kuala Lumpur",
          key: "sb22",
          onClick: () => null,
        },
        {
          label: "Majlis Bandaraya Johor Bharu",
          key: "sb23",
          onClick: () => null,
        },
        {
          label: "Majlis Bandaraya Petaling Jaya",
          key: "sb24",
          onClick: () => null,
        },
        {
          label: "Majlis Bandaraya Pulau Pilang",
          key: "sb25",
          onClick: () => null,
        },
        {
          label: "Majlis Bandaraya Perbandaran Kulim",
          key: "sb26",
          onClick: () => null,
        },
      ],
    },
    {
      label: "Analitik Data Raya",
      key: "5",
      children: [
        {
          key: "sb31",
          label: "Smart Governance",
          onClick: () => null,
        },
        {
          key: "sb32",
          label: "Smart Living",
          onClick: () => null,
        },
        {
          key: "sb33",
          label: "Smart Environment",
          onClick: () => null,
        },
        {
          key: "sb34",
          label: "Smart Mobility",
          onClick: () => null,
        },
        {
          key: "sb35",
          label: "Smart Economy",
          onClick: () => null,
        },
        {
          key: "sb36",
          label: "Smart People",
          onClick: () => null,
        },
        {
          key: "sb37",
          label: "Smart Digital Infrastructure",
          onClick: () => null,
        },
      ],
    },
    {
      label: "Repository Penarafan",
      key: "6",
      children: [
        {
          label: "Latar Belakang Penarafan",
          key: "sb41",
          onClick: () => navigate("/latar-penarafan"),
        },
        {
          label: "Ketegori Penarafan Bandar Pintar",
          key: "sb42",
          onClick: () => navigate("/kategory-penarafan"),
        },
        {
          label: "Permohonan Penarafan Bandar Pintar",
          key: "sb43",
          onClick: () => navigate("/profil-pbt"),
        },
        {
          label: "Status Pencapaian Penarafan Bandar Pintar",
          key: "sb44",
          onClick: () => navigate("/status-pencapaian"),
        },
        {
          label: "Pengurusan Penarafan Bandar Pintar",
          key: "sb45",
          onClick: () => navigate("/pengurusan-penarafan"),
        },
      ],
      //
    },
    {
      label: "Muat Turun",
      key: "7",
      children: [
        {
          label: "Pelan Tindakan Bandar Pintar",
          key: "sb51",
          onClick: () => navigate("/pilan-tindakan"),
        },
        {
          label: "Profil Bandar Pintar",
          key: "sb52",
        },
        {
          label: "Status Penarafan Bandar Pintar",
          key: "sb53",
        },
      ],
    },
    {
      label: "Hubungi Kami",
      key: "8",
      onClick: () => navigate("/hubungi-kami"),
    },
    {
      label: "Menu Utama",
      key: "9",
    },
  ];
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="top-bar">
      <div className="logox">
        <img src={MUO} alt="" />
        <img src={secondlogo} alt="" />
      </div>
      <div className="navbars">
        <Menu mode="horizontal" items={items} />
      </div>
    </div>
  );
}

export default Topbar;

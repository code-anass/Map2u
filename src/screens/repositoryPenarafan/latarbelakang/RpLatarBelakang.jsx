import React from "react";
import "./rplatarbelakang.scss";
// import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  ProSidebarProvider,
} from "react-pro-sidebar";

function RpLatarBelakang() {
  const navigate = useNavigate();
  const itemss = [
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
      label: "Profil Bandar Pintar",
      key: "3",
      children: [
        {
          label: "Negeri",
          key: "sb11",
          onClick: () => navigate("/profile-bandar"),
        },
        {
          label: "Pelan Tindakan",
          key: "sb12",
          onClick: () => null,
        },
        {
          label: "Command Center",
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
          onClick: () => null,
        },
        {
          label: "Status Pencapaian Penarafan Bandar Pintar",
          key: "sb44",
          onClick: () => null,
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
          onClick: () => navigate("/muat-turun"),
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
  return (
    // <Menu
    //   mode="inline"
    //   items={items}
    //   style={{ width: 256, minHeight: "100vh", zIndex: 1 }}
    //   theme="dark"
    // />

    <div style={{ display: "flex", minHeight: "90vh" }}>
      <ProSidebarProvider>
        <Sidebar backgroundColor="#272F3B" rootStyles={{ color: "grey" }}>
          <Menu>
            {itemss.map((val) => {
              if (val?.children?.length > 0) {
                return (
                  <SubMenu
                    label={val.label}
                    rootStyles={{
                      color: "grey",
                      backgroundColor: "#272F3B",
                    }}
                  >
                    {val.children.map((mi) => (
                      <MenuItem>{mi.label}</MenuItem>
                    ))}
                  </SubMenu>
                );
              } else {
                return <MenuItem>{val.label}</MenuItem>;
              }
            })}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>
    </div>
  );
}

export default RpLatarBelakang;

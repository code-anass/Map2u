import React, { useEffect } from "react";
import "./nestedlayout.scss";
import { BiHomeAlt, BiListUl } from "react-icons/bi";
import { GiChart } from "react-icons/gi";
import { ImDownload3 } from "react-icons/im";
import { HiCloud } from "react-icons/hi";
import { BsStack } from "react-icons/bs";
import { HiOutlineBuildingOffice2, HiOutlineWrench } from "react-icons/hi2";
import { FaEnvelopeOpenText, FaEnvelopeOpen } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  ProSidebarProvider,
  menuClasses,
  useProSidebar,
} from "react-pro-sidebar";
function NestedLayout({ children }) {
  const itemss = [
    {
      label: "Laman Utama",
      key: "1",
      icon: <BiHomeAlt />,
      link: "/",
    },
    {
      label: "Latar Belakang",
      key: "2",
      icon: <BiListUl />,
      link: "/latar-belakang",
    },
    {
      label: "Profil Bandar Pintar",
      key: "3",
      icon: <HiOutlineBuildingOffice2 />,
      children: [
        {
          label: "Negeri",
          key: "sb11",
          link: "/profile-bandar",
        },
        {
          label: "Pelan Tindakan",
          key: "sb12",
          link: "/",
        },
        {
          label: "Command Center",
          key: "sb13",
          link: "/",
        },
      ],
    },
    {
      label: "Penarafan Bandar Pintar",
      key: "6",
      icon: <BsStack />,
      children: [
        {
          label: "Latar Belakang Penarafan Bandar Pintar",
          key: "sb41",
          link: "/latar-penarafan",
          children: [
            {
              label: "Latar Belakang",
              link: "/latar-penarafan",
              key: "qwe1",
            },
            {
              label: "Proses Penarafan",
              link: "/latar_belakang/proses-penarafan",
              key: "qwe2",
            },
            {
              label: "Punca Kuasa",
              link: "/latar_belakang/punca-kuasa",
              key: "qwe3",
            },
            {
              label: "MS ISO 37122: 2019",
              link: "/latar_belakang/ms-iso",
              key: "qwe4",
            },
            {
              label: "Insentif Kepada PBT",
              link: "/latar_belakang/insentif-kepada",
              key: "qwe5",
            },
          ],
        },
        {
          label: "Ketegori Penarafan",
          key: "sb42",
          link: "/kategory-penarafan",
        },
        {
          label: "Permohonan Penarafan",
          key: "sb43",
          link: "/",
          children: [
            {
              label: "Profile PBT",
              link: "/profil-pbt",
              key: "qweY1",
            },
            {
              label: "Permohonan",
              link: "/permohonan_penarafan/permohonan",
              key: "qweY2",
            },
            {
              label: "Status Permohonan",
              link: "/permohonan_penarafan/statuspermohonan",
              key: "qweY3",
            },
            {
              label: "Peti Masuk",
              link: "/permohonan_penarafan/petimasuk",
              key: "qweY4",
            },
          ],
        },
        {
          label: "Keputusan Penarafan Bandar Pintar",
          key: "sb44",
          link: "/status-pencapaian",
        },
      ],
    },
    {
      label: "Integrasi",
      key: "4",
      icon: <HiCloud />,
      children: [
        {
          label: "Perbadanan Putrajaya",
          key: "sb21",
          link: "/platform-integrasi",
        },
        {
          label: "Dewan Bandaraya Kuala Lumpur",
          key: "sb22",
          link: "/",
        },
        {
          label: "Majlis Bandaraya Johor Bharu",
          key: "sb23",
          link: "/",
        },
        {
          label: "Majlis Bandaraya Petaling Jaya",
          key: "sb24",
          link: "/",
        },
        {
          label: "Majlis Bandaraya Pulau Pilang",
          key: "sb25",
          link: "/",
        },
        {
          label: "Majlis Bandaraya Perbandaran Kulim",
          key: "sb26",
          link: "/",
        },
      ],
    },
    {
      label: "Analitik Data Raya",
      key: "5",
      icon: <GiChart />,
      children: [
        {
          key: "sb31",
          label: "Smart Governance",
          link: "/",
        },
        {
          key: "sb32",
          label: "Smart Living",
          link: "/",
        },
        {
          key: "sb33",
          label: "Smart Environment",
          link: "/",
        },
        {
          key: "sb34",
          label: "Smart Mobility",
          link: "/",
        },
        {
          key: "sb35",
          label: "Smart Economy",
          link: "/",
        },
        {
          key: "sb36",
          label: "Smart People",
          link: "/",
        },
        {
          key: "sb37",
          label: "Smart Digital Infrastructure",
          link: "/",
        },
      ],
    },
    {
      label: "Muat Turun",
      key: "7",
      icon: <ImDownload3 />,
      children: [
        {
          label: "Pelan Tindakan Bandar Pintar",
          key: "sb51",
          link: "/muat-turun",
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
      label: "Pengurusan Penarafan",
      key: "10",
      icon: <HiOutlineWrench />,
      children: [
        {
          label: "Pelan Tindakan Bandar Pintar",
          key: "sb51",
          link: "/muat-turun",
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
      label: "Permohonan Penarafan",
      key: "10",
      icon: <FaEnvelopeOpen />,
      children: [
        {
          label: "Pelan Tindakan Bandar Pintar",
          key: "sb51",
          link: "/muat-turun",
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
      label: "Peti Masuk",
      key: "8",
      icon: <FaEnvelopeOpenText />,
      link: "/",
    },
  ];
  const { collapseSidebar } = useProSidebar();
  useEffect(() => {
    if (window.innerWidth < 700) {
      collapseSidebar();
    }
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        collapseSidebar();
      } else {
        collapseSidebar();
      }
    });
  }, [window.innerWidth]);
  return (
    <div className="nestedlayout">
      <div className="nested-sidebar">
        <Sidebar
          backgroundColor="#272F3B"
          rootStyles={{ color: "grey" }}
          // width="260px"
        >
          <Menu>
            <p
              style={{
                paddingLeft: "30px",
                paddingTop: "10px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              MAIN MENU
            </p>

            {itemss.map((val, index) => {
              if (val?.children?.length > 0) {
                return (
                  <SubMenu
                    label={val.label}
                    icon={val.icon}
                    rootStyles={{
                      color: "grey",
                      backgroundColor: "#272F3B",
                    }}
                  >
                    {val?.children.map((mi) => {
                      if (mi?.children?.length > 0) {
                        return (
                          <SubMenu
                            label={mi.label}
                            rootStyles={{
                              color: "grey",
                              backgroundColor: "#272F3B",
                            }}
                          >
                            {mi.children.map((mi2) => {
                              return (
                                <MenuItem
                                  rootStyles={{
                                    ["." + menuClasses.button]: {
                                      backgroundColor: "#272F3B",
                                      color: "#fff",
                                      "&:hover": {},
                                    },
                                  }}
                                  component={<Link to={mi2.link} />}
                                >
                                  {mi2.label}
                                </MenuItem>
                              );
                            })}
                          </SubMenu>
                        );
                      } else {
                        return (
                          <MenuItem
                            rootStyles={{
                              ["." + menuClasses.button]: {
                                backgroundColor: "#272F3B",
                                color: "#fff",
                                "&:hover": {},
                              },
                            }}
                            component={<Link to={mi.link} />}
                          >
                            {mi.label}
                          </MenuItem>
                        );
                      }
                    })}
                  </SubMenu>
                );
              } else {
                return val.icon ? (
                  <MenuItem icon={val.icon} component={<Link to={val.link} />}>
                    {val.label}
                  </MenuItem>
                ) : (
                  <MenuItem>{val.label}</MenuItem>
                );
              }
            })}
          </Menu>
        </Sidebar>
      </div>
      <div className="content-nested">{children}</div>
    </div>
  );
}

export default NestedLayout;

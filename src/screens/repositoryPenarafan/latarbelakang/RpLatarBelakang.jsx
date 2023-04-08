import React from "react";
import "./rplatarbelakang.scss";
// import { Menu } from "antd";
import { BiHomeAlt, BiListUl } from "react-icons/bi";
import { GiChart } from "react-icons/gi";
import { ImDownload3 } from "react-icons/im";
import { HiCloud } from "react-icons/hi";
import { BsStack } from "react-icons/bs";
import { HiOutlineBuildingOffice2, HiOutlineWrench } from "react-icons/hi2";
import { FaEnvelopeOpenText, FaEnvelopeOpen } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import about from "../../../assets/latarBelakang/about.png";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  ProSidebarProvider,
  menuClasses,
} from "react-pro-sidebar";

function RpLatarBelakang() {
  const navigate = useNavigate();
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
      label: "Repository Penarafan",
      key: "6",
      icon: <BsStack />,
      children: [
        {
          label: "Latar Belakang Penarafan",
          key: "sb41",
          link: "/latar-penarafan",
        },
        {
          label: "Ketegori Penarafan Bandar Pintar",
          key: "sb42",
          link: "/kategory-penarafan",
        },
        {
          label: "Permohonan Penarafan Bandar Pintar",
          key: "sb43",
          link: "/",
        },
        {
          label: "Status Pencapaian Penarafan Bandar Pintar",
          key: "sb44",
          link: "/",
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
  return (
    <div className="rplatarbelakang">
      <div className="sidbar">
        <ProSidebarProvider>
          <Sidebar
            backgroundColor="#272F3B"
            rootStyles={{ color: "grey" }}
            width="260px"
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
                      {val.children.map((mi) => (
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
                      ))}
                    </SubMenu>
                  );
                } else {
                  return val.icon ? (
                    <MenuItem
                      icon={val.icon}
                      component={<Link to={val.link} />}
                    >
                      {val.label}
                    </MenuItem>
                  ) : (
                    <MenuItem>{val.label}</MenuItem>
                  );
                }
              })}
            </Menu>
          </Sidebar>
        </ProSidebarProvider>
      </div>
      <div className="content-rplatar">
        <h2 className="main-h">LATAR BELAKANG</h2>
        <h3 className="main-h2">PENARAFAN BANDAR PINTAR NEGARA</h3>
        <img src={about} alt="" className="ltr-img" />
        <div className="desc">
          <p>
            Penarafan Bandar Pintar Negara adalah{" "}
            <b>
              rangka kerja peringkat kebangsaan yang menjadi panduan dan rujukan
            </b>{" "}
            kepada Pihak Berkuasa Tempatan sebagai pengurus bandar, kerajaan
            negeri, kementerian dan jabatan persekutuan, pemain industri, ahli
            akademik dan pihak berkepentingan lain dalam merancang dan
            membangunkan bandar pintar di Malaysia secara holistik dan selaras
            dengan perkembangan semasa.
          </p>
          <p>
            Dokumen tersebut merangkumi definisi bandar pintar dalam konteks
            Malaysia,{" "}
            <b>
              7 komponen utama bandar pintar, hala tuju dasar dan menggariskan
              cadangan strategi dan inisiatif bagi setiap komponen
            </b>{" "}
            yang boleh menjadi rujukan kepada mereka yang berminat untuk
            melaksanakan inisiatif bandar pintar di Malaysia.
          </p>
          <p>
            Dalam konteks Malaysia, bandar pintar ditakrifkan sebagai{" "}
            <b>
              'bandar yang menggunakan ICT dan kemajuan teknologi dan inovasi
            </b>{" "}
            untuk menangani isu-isu bandar termasuk untuk meningkatkan kualiti
            hidup, menggalakkan pertumbuhan ekonomi, membangunkan persekitaran
            yang mampan dan selamat dan menggalakkan amalan pengurusan bandar
            yang cekap. Bandar pintar Malaysia bermatlamat untuk menangani isu
            dan cabaran bandar ke arah mencapai tiga tonggak utama ekonomi
            berdaya saing, persekitaran mampan dan kualiti hidup yang lebih
            baik.
          </p>
          <h4>
            <b>7 komponen utama bandar pintar Malaysia ialah:</b>
          </h4>
          <br />
          <h4>1. Smart Economy</h4>
          <h4>2. Smart Living</h4>
          <h4>3. Smart Environment</h4>
          <h4>4. Smart People</h4>
          <h4>5. Smart Governance</h4>
          <h4>6. Smart Mobility</h4>
          <h4>7. Smart Digital Infrastructure</h4>
        </div>
      </div>
    </div>
  );
}

export default RpLatarBelakang;

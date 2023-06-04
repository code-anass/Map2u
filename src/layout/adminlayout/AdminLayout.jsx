import React, { useEffect } from "react";
import "./adminlayout.scss";
import { MdDashboard } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import { RiProfileLine } from "react-icons/ri";
import { HiOutlineBell } from "react-icons/hi";
import MUO from "../../assets/logo/MUO.png";
import mainlogo from "../../assets/logo/mainlogo.png";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  ProSidebarProvider,
  menuClasses,
  useProSidebar,
} from "react-pro-sidebar";
function AdminLayout({ children }) {
  const itemss = [
    {
      label: "Dasar Perbandaran Negara (DPN2)",
      key: "1",
      icon: <MdDashboard className="icon" />,
      children: [
        {
          label: "Dashboard Admin",
          key: "sb11",
          link: "/admin",
        },
        {
          label: "Pengurusan Module",
          key: "sb12",
          link: "/",
          children: [
            {
              label: "Kemaskini Pemantauan",
              key: "sb21",
              link: "/admin/kemaskini",
            },
            {
              label: "CMS Modul",
              key: "sb22",
              link: "/admin/cmsmodule",
            },
          ],
        },
        {
          label: "Tetapan Pemantauan",
          key: "sb13",
          link: "/",
          children: [
            {
              label: "Kemaskini Formula",
              key: "sb31",
              link: "/admin/kemiskiniformula",
            },
            {
              label: "Tetapan Agensi",
              key: "sb32",
              link: "/admin/tetapanagensi",
            },
          ],
        },
        {
          label: "Pengesahan Pemantauan",
          key: "sb14",
          link: "/admin/pengesahan",
        },
        {
          label: "Rumusan Pemantauan",
          key: "sb14",
          link: "/admin/rumusan",
        },
      ],
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
    <div className="admin-layout">
      <div className="nested-sidebar">
        <Sidebar backgroundColor="#272F3B" rootStyles={{ color: "grey" }}>
          <Menu>
            <p className="top-heading">MUO</p>
            <p className="top-desc">
              Pemantauan Dan Pelaporan Pembandaran Mampan
            </p>
            <br />
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
            <br />
            <p className="profil">Profile</p>
            <MenuItem icon={<RiProfileLine className="icon" />}>
              myProfil
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
      <div className="content-nested">{children}</div>
      <div className="top-bar">
        <p className="top-heading">Dasar Perbandaran Negara (DPN2)</p>
        <div className="top-profile">
          <HiOutlineBell className="icon-top" />
          <p>Hi, Luqman Hakeem</p>
          <div className="top-letter">L</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom">
          <img src={MUO} />
          <img src={mainlogo} />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;

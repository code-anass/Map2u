import { FileOutlined, UserOutlined, DesktopOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState, useEffect } from "react";
import "./pvtlayout.css";
import collapseIcon from "../assets/logo/collapseIcon.png";
import MUO from "../assets/logo/MUO.png";
import PLAN from "../assets/logo/PLAN.png";
import { MdLayers, MdOutlineDashboardCustomize } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import MyHeader from "./header/Header";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const PvtLayout = ({ children }) => {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      icon: <AiFillAppstore className="icon" />,
      label: "Rancangan Fizikal Negara ",
      children: [
        {
          key: "3",
          label: "Kemaskini Pemantauan",
          icon: <BsCircleFill />,
          onClick: () => navigate("/monitoring-updates"),
        },
        {
          key: "4",
          label: "Dashboard",
          icon: <BsCircleFill />,
          onClick: () => navigate("/dashboard"),
        },
      ],
    },
    { key: "2", label: "My Profile", icon: <UserOutlined /> },
  ];
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    });
  }, [window.innerWidth]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        // collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width="255"
        inputMode="inline"
      >
        <div className={`${!collapsed ? "main-heading" : "main-heading-not"}`}>
          <b>MUO</b>
          <img
            src={collapseIcon}
            className={`${collapsed ? "not-collapsee-icon" : "collapsee-icon"}`}
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>
        <div className={collapsed ? "desc-main-non" : "desc-main"}>
          <div className="heading">
            <MdLayers className="main-icon" />
            <span>Dashboard Pencapaian MUO</span>
          </div>
          <p>Pemantauan Dan Pelaporan Pembandaran Mampan</p>
        </div>

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          inlineIndent={5}
          items={items}
          // style={{ backgroundColor: "red" }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="header-main">
          <MyHeader />
        </Header>
        <Content>{children}</Content>
        <Footer
          style={{
            backgroundColor: "white",
            padding: "5px",
          }}
        >
          <div className="footer">
            <img src={MUO} alt="MUO" className="muo" />
            <img src={PLAN} alt="PLAN" className="plan" />
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default PvtLayout;

import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import classes from "./Home.module.css";
const { Header, Content, Footer } = Layout;

const navArray = ["축의금 계산기", "조의금 계산기", "부조금 관리내역"];
const pathArray = ["wedding", "funeral", "management"];
const Home = () => {
  const navigate = useNavigate();
  const go = (id) => {
    return () => {
      navigate(`/home/${id}`);
    };
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          // theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={navArray.map((item, index) => {
            const key = index + 1;
            return {
              onClick: go(pathArray[key - 1]),
              key,
              label: item,
            };
          })}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className={classes["site-layout-content"]}>
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        antd override 너무 빡쳐용~
      </Footer>
    </Layout>
  );
};
export default Home;

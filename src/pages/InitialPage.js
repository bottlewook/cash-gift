import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./InitialPage.module.css";

const InitialPage = () => {
  const alignCenter = { display: "flex", alignItems: "center" };
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home/wedding");
  };
  return (
    <Fragment>
      <div className={classes.background} />

      <Parallax pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div>
            <img src={process.env.PUBLIC_URL + "assets/wedding44.png"} />
          </div>
          <p className={classes.scrollText}>부조금 도우미</p>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 4 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${classes.card} ${classes.sticky}`}>
            <p onClick={goToHome}>시작하기</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div
            className={`${classes.card} ${classes.parallax} ${classes.first}`}
          >
            <p>축의금 계산기</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div
            className={`${classes.card} ${classes.parallax} ${classes.second}`}
          >
            <p>부조금 계산기</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.5}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div
            className={`${classes.card} ${classes.parallax} ${classes.third}`}
          >
            <p>부조금 관리 도우미</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </Fragment>
  );
};

export default InitialPage;

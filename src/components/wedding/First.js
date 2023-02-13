import { Fragment } from "react";
import classes from "./First.module.css";

const First = ({ onModal }) => {
  return (
    <Fragment>
      <div className={classes.box}>
        <img src={process.env.PUBLIC_URL + "/assets/weddingFirst.png"} />
        <button onClick={onModal}>시작하기</button>
      </div>
    </Fragment>
  );
};

export default First;

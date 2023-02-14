import { Fragment } from "react";

const First = ({ onNextPage }) => {
  const goToSecondPage = () => {
    onNextPage(2);
  };
  return (
    <Fragment>
      <div className="box">
        <img src={process.env.PUBLIC_URL + "/assets/weddingFirst.png"} />
        <button className="first_btn" onClick={goToSecondPage}>
          시작하기
        </button>
      </div>
    </Fragment>
  );
};

export default First;

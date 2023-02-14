import { Fragment, useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const override = {
  position: "absolute",
  top: "259px",
  left: "219px",
};

const EndPage = ({ money, onNextPage }) => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  const resetPage = () => {
    onNextPage(1);
  };
  console.log(isLoading);
  return (
    <div className="box">
      <RingLoader color="#E1B4D3" loading={isLoading} cssOverride={override} />
      {isLoading && <p className="loading">계산 중입니다..!</p>}
      {!isLoading && (
        <Fragment>
          <img src={process.env.PUBLIC_URL + "/assets/cash.png"} />
          <div className="money_box">{money / 10000}만원입니다!</div>
          <button className="first_btn" onClick={resetPage}>
            다시하기
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default EndPage;

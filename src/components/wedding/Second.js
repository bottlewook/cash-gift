const Second = ({ onNextPage, onChangeMoney }) => {
  const goToThirdPage = () => {
    onNextPage(3);
    onChangeMoney(10000);
  };
  const goToFourthPage = () => {
    onNextPage(4);
  };
  return (
    <div className="box">
      <img
        className="content_img"
        src={process.env.PUBLIC_URL + "/assets/weddingcar.png"}
      />
      <div className="content">
        최근 6개월 간 청첩장이 아닌 목적으로 만난 적이 있다.
      </div>
      <button className="btn_1" onClick={goToThirdPage}>
        예
      </button>
      <button className="btn_2" onClick={goToFourthPage}>
        아니오
      </button>
    </div>
  );
};

export default Second;

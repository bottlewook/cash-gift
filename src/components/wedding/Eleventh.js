const Eleventh = ({ onNextPage, onChangeMoney, money }) => {
  const goToFifteenthPage = () => {
    onNextPage(15);
    onChangeMoney(money + 20000);
  };
  const goToFourteenthPage = () => {
    onNextPage(14);
  };
  return (
    <div className="box">
      <img
        className="content_img"
        src={process.env.PUBLIC_URL + "/assets/weddingcar.png"}
      />
      <div className="content">남자친구 or 여자친구가 같이 가자고 하나요? </div>
      <footer>
        <button className="btn_1" onClick={goToFifteenthPage}>
          예
        </button>
        <button className="btn_2" onClick={goToFourteenthPage}>
          아니오
        </button>
      </footer>
    </div>
  );
};

export default Eleventh;

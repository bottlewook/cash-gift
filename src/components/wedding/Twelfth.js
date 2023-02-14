const Twelfth = ({ onNextPage, onChangeMoney }) => {
  const goToThirteenPage = () => {
    onNextPage(13);
    onChangeMoney(-10000);
  };
  const goToTenthPage = () => {
    onNextPage(10);
    onChangeMoney(-10000);
  };

  return (
    <div className="box">
      <img
        className="content_img"
        src={process.env.PUBLIC_URL + "/assets/weddingcar.png"}
      />
      <div className="content">식장이 지방인가요?</div>
      <footer>
        <button className="btn_1" onClick={goToThirteenPage}>
          예
        </button>
        <button className="btn_2" onClick={goToTenthPage}>
          아니오
        </button>
      </footer>
    </div>
  );
};

export default Twelfth;

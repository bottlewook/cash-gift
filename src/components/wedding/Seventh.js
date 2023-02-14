const Seventh = ({ onNextPage, onChangeMoney }) => {
  const goToTenthPage = () => {
    onChangeMoney(-20000);
    onNextPage(10);
  };
  const goToEighthPage = () => {
    onNextPage(8);
  };
  return (
    <div className="box">
      <img
        className="content_img"
        src={process.env.PUBLIC_URL + "/assets/weddingcar.png"}
      />
      <div className="content">재혼인가요?</div>
      <footer>
        <button className="btn_1" onClick={goToTenthPage}>
          예
        </button>
        <button className="btn_2" onClick={goToEighthPage}>
          아니오
        </button>
      </footer>
    </div>
  );
};

export default Seventh;

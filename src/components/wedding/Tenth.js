const Tenth = ({ onNextPage }) => {
  const goToFourteenthPage = () => {
    onNextPage(14);
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
      <div className="content">난 향후 2년간 결혼 예정이 없다</div>
      <footer>
        <button className="btn_1" onClick={goToFourteenthPage}>
          예
        </button>
        <button className="btn_2" onClick={goToEighthPage}>
          아니오
        </button>
      </footer>
    </div>
  );
};

export default Tenth;

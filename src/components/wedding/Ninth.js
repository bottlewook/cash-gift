const Ninth = ({ onNextPage, onChangeMoney }) => {
  const goToEighthPage = () => {
    onNextPage(8);
    onChangeMoney(-10000);
  };
  const goToEleventhPage = () => {
    onNextPage(11);
  };
  return (
    <div className="box">
      <img
        className="content_img"
        src={process.env.PUBLIC_URL + "/assets/weddingcar.png"}
      />
      <div className="content">결혼 성수기인가요?</div>
      <footer>
        <button className="btn_1" onClick={goToEighthPage}>
          예
        </button>
        <button className="btn_2" onClick={goToEleventhPage}>
          아니오
        </button>
      </footer>
    </div>
  );
};

export default Ninth;

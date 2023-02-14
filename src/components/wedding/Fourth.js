const Fourth = ({ onNextPage, onChangeMoney }) => {
  const goToSixthPage = () => {
    onNextPage(6);
    onChangeMoney(-15000);
  };
  const goToFifthPage = () => {
    onNextPage(5);
  };
  return (
    <div className="box">
      <img
        className="content_img"
        src={process.env.PUBLIC_URL + "/assets/weddingcar.png"}
      />
      <div className="content">모바일로 받았다.</div>
      <footer>
        <button className="btn_1" onClick={goToSixthPage}>
          예
        </button>
        <button className="btn_2" onClick={goToFifthPage}>
          아니오
        </button>
      </footer>
    </div>
  );
};

export default Fourth;

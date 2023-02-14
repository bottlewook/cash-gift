const Fifteenth = ({ onNextPage, onChangeMoney, money }) => {
  const divideMoney = () => {
    onChangeMoney();
    onNextPage(16);
  };
  const goToEndPage = () => {
    onNextPage(16);
  };
  return (
    <div className="box">
      <img
        className="content_img"
        src={process.env.PUBLIC_URL + "/assets/weddingcar.png"}
      />
      <div className="content">끝나고 만나기로 했나요?</div>
      <footer>
        <button className="btn_1" onClick={divideMoney}>
          예
        </button>
        <button className="btn_2" onClick={goToEndPage}>
          아니오
        </button>
      </footer>
    </div>
  );
};

export default Fifteenth;

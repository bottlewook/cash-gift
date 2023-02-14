const Fourteenth = ({ onNextPage, onChangeMoney }) => {
  const addMoney = () => {
    onNextPage(16);
    onChangeMoney(+20000);
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
      <div className="content">부모님이 신랑 or 신부 이름을 아나요?</div>
      <footer>
        <button className="btn_1" onClick={addMoney}>
          예
        </button>
        <button className="btn_2" onClick={goToEndPage}>
          아니오
        </button>
      </footer>
    </div>
  );
};

export default Fourteenth;

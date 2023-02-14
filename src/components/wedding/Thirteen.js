const Thirteen = ({ onNextPage, onChangeMoney }) => {
  const addMoney = () => {
    onChangeMoney(+30000);
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
      <div className="content">너무 멀어서 안가기로 했나요?</div>
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

export default Thirteen;

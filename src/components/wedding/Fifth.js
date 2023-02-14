const Fifth = ({ onNextPage, onChangeMoney }) => {
  const goToEightPage = () => {
    onNextPage(8);
    onChangeMoney(+10000);
  };
  const goToSeventhPage = () => {
    onNextPage(7);
  };
  return (
    <div className="box">
      <img
        className="content_img"
        src={process.env.PUBLIC_URL + "/assets/weddingcar.png"}
      />
      <div className="content">회사 동료인가요?</div>
      <footer>
        <button className="btn_1" onClick={goToEightPage}>
          예
        </button>
        <button className="btn_2" onClick={goToSeventhPage}>
          아니오
        </button>
      </footer>
    </div>
  );
};

export default Fifth;

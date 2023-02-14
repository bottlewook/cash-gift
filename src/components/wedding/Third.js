const Third = ({ onNextPage, onChangeMoney }) => {
  const goToFifthPage = () => {
    onNextPage(5);
    onChangeMoney(+10000);
  };
  const goToFourthPage = () => {
    onNextPage(4);
  };
  return (
    <div className="box">
      <img
        className="content_img"
        src={process.env.PUBLIC_URL + "/assets/weddingcar.png"}
      />
      <div className="content">직접 만나서 청첩장을 받았다.</div>
      <footer>
        <button className="btn_1" onClick={goToFifthPage}>
          예
        </button>
        <button className="btn_2" onClick={goToFourthPage}>
          아니오
        </button>
      </footer>
    </div>
  );
};

export default Third;

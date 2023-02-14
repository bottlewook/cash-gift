const Eighth = ({ onNextPage, onChangeMoney }) => {
  const goToEleventhPage = () => {
    onNextPage(11);
    onChangeMoney(+10000);
  };
  const goToTwelfthPage = () => {
    onNextPage(12);
  };
  return (
    <div className="box">
      <img
        className="content_img"
        src={process.env.PUBLIC_URL + "/assets/weddingcar.png"}
      />
      <div className="content">호텔 뷔페인가요?</div>
      <footer>
        <button className="btn_1" onClick={goToEleventhPage}>
          예
        </button>
        <button className="btn_2" onClick={goToTwelfthPage}>
          아니오
        </button>
      </footer>
    </div>
  );
};

export default Eighth;

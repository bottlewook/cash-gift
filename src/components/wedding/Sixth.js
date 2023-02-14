const Sixth = ({ onNextPage, onChangeMoney }) => {
  const goToNinthPage = () => {
    onNextPage(9);
    onChangeMoney(+5000);
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
      <div className="content">서로 인스타 팔로워인가요?</div>
      <footer>
        <button className="btn_1" onClick={goToNinthPage}>
          예
        </button>
        <button className="btn_2" onClick={goToFifthPage}>
          아니오
        </button>
      </footer>
    </div>
  );
};

export default Sixth;

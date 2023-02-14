import { useLayoutEffect, useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import classes from "./WeddingContent.module.css";
import Sixth from "./Sixth";
import Seventh from "./Seventh";
import Eighth from "./Eighth";
import Ninth from "./Ninth";
import Tenth from "./Tenth";
import Eleventh from "./Eleventh";
import Twelfth from "./Twelfth";
import Thirteen from "./Thirteen";
import Fourteenth from "./Fourteenth";
import Fifteenth from "./Fifteenth";
import EndPage from "./EndPage";

const WeddingContent = () => {
  const [page, setPage] = useState(1);
  const [money, setMoney] = useState(30000);

  const goToNextPage = (seletedpage) => {
    setPage(seletedpage);
  };

  const changeMoneyHandler = (calculatingMoney) => {
    setMoney((prevMoney) => prevMoney + calculatingMoney);
  };

  const divideMoneyHandler = () => {
    setMoney((prevMoney) => (prevMoney - 20000) / 2);
  };
  console.log(money);

  return (
    <div className={classes.card}>
      {page === 1 && <First onNextPage={goToNextPage} />}
      {page === 2 && (
        <Second onNextPage={goToNextPage} onChangeMoney={changeMoneyHandler} />
      )}
      {page === 3 && (
        <Third onNextPage={goToNextPage} onChangeMoney={changeMoneyHandler} />
      )}
      {page === 4 && (
        <Fourth onNextPage={goToNextPage} onChangeMoney={changeMoneyHandler} />
      )}
      {page === 5 && (
        <Fifth onNextPage={goToNextPage} onChangeMoney={changeMoneyHandler} />
      )}
      {page === 6 && (
        <Sixth onNextPage={goToNextPage} onChangeMoney={changeMoneyHandler} />
      )}
      {page === 7 && (
        <Seventh onNextPage={goToNextPage} onChangeMoney={changeMoneyHandler} />
      )}
      {page === 8 && (
        <Eighth onNextPage={goToNextPage} onChangeMoney={changeMoneyHandler} />
      )}
      {page === 9 && (
        <Ninth onNextPage={goToNextPage} onChangeMoney={changeMoneyHandler} />
      )}
      {page === 10 && (
        <Tenth onNextPage={goToNextPage} onChangeMoney={changeMoneyHandler} />
      )}
      {page === 11 && (
        <Eleventh
          onNextPage={goToNextPage}
          onChangeMoney={changeMoneyHandler}
          money={money}
        />
      )}
      {page === 12 && (
        <Twelfth onNextPage={goToNextPage} onChangeMoney={changeMoneyHandler} />
      )}
      {page === 13 && (
        <Thirteen
          onNextPage={goToNextPage}
          onChangeMoney={changeMoneyHandler}
        />
      )}
      {page === 14 && (
        <Fourteenth
          onNextPage={goToNextPage}
          onChangeMoney={changeMoneyHandler}
        />
      )}
      {page === 15 && (
        <Fifteenth
          onNextPage={goToNextPage}
          onChangeMoney={divideMoneyHandler}
          money={money}
        />
      )}
      {page === 16 && <EndPage money={money} onNextPage={goToNextPage} />}
    </div>
  );
};

export default WeddingContent;

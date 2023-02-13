import { useLayoutEffect, useState } from "react";
import First from "./First";
import Second from "./Second";
import classes from "./WeddingContent.module.css";

// const selectComponent = {
//   first: <First />,
//   second: <Second />,
//   third: <Third />,
//   fourth: <Fourth />,
//   fifth: <Fifth />,
// };

const WeddingContent = () => {
  const [page, setPage] = useState(1);

  const goToNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className={classes.card}>
      {page === 1 && <First onModal={goToNextPage} />}
      {page === 2 && <Second />}
    </div>
  );
};

export default WeddingContent;

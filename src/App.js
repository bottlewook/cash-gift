import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import WeddingContent from "./components/wedding/WeddingContent";
import Home from "./pages/Home";
import InitialPage from "./pages/InitialPage";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/home/*" element={<Home />}>
          <Route path="wedding" element={<WeddingContent />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;

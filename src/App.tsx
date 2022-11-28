import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Notice/Home";
import NoticeCreate from "./pages/Notice/NoticeCreate";
import NoticeDetail from "./pages/Notice/NoticeDetail";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"create"}>작성하기</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="create" element={<NoticeCreate />}></Route>
        <Route path="detail" element={<NoticeDetail />}></Route>
      </Routes>
    </div>
  );
};

export default App;

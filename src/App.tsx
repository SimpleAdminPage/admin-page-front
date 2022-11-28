import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/Notice/Home";
import NoticeCreate from "./pages/Notice/NoticeCreate";
import NoticeDetail from "./pages/Notice/NoticeDetail";
import styled from "styled-components";

const MainNav = styled.nav`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #524f4a;
`;

const TitleLink = styled(Link)`
  font-size: 3rem;
  color: #ffffff;
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <MainNav>
        <TitleLink to={"/"}>Home</TitleLink>
      </MainNav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="create" element={<NoticeCreate />}></Route>
        <Route path="detail" element={<NoticeDetail />}></Route>
      </Routes>
    </div>
  );
};

export default App;

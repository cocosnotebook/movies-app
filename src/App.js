import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
`;

function App() {
  return (
    <>
      <Header>my movies</Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:itemId" element={<Detail />} />
        <Route path="/add" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;

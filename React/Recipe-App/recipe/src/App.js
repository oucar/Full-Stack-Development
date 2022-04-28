import Pages from "./pages/Pages";
import Category from "./components/Category";
import './index.css';
import { BrowserRouter, Link } from "react-router-dom";
import Search from './components/Search';
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

// framer-motion: animation
// react-router-dom: routing

// Stuff gets rendered here, use rfce
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>delicious</Logo>
        </Nav>

        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

export default App;

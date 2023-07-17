import Pages from "./pages/Pages";
import Buttons from "./components/Buttons";
import styled from "styled-components";
import Search from "./components/Search";
import { BrowserRouter, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div style={{display: "flex", justifyContent: "space-around"}}>
        <NavLink to={"/"}>
        <Logo
          className="appLogo"
          src={require("./assets/appLogo.png")}
          alt="Logo"
        />
        </NavLink>
        <Search />
        </div>
        <Buttons />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

const Logo = styled.img`
height: 12.5rem;
`;

export default App;

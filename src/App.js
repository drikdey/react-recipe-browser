import Pages from "./pages/Pages";
import Buttons from "./components/Buttons";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Search />
        <Buttons />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;

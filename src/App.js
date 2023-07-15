import Pages from "./pages/Pages";
import Buttons from "./components/Buttons";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Buttons />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;

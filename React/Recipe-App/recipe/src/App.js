import Pages from "./pages/Pages";
import Category from "./pages/Category";
import './index.css';
import { BrowserRouter } from "react-router-dom";

// framer-motion: animation
// react-router-dom: routing

// Stuff gets rendered here, use rfce
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;

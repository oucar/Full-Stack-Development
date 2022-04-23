import Pages from "./pages/Pages";
import Category from "./components/Category";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import Search from './components/Search';

// framer-motion: animation
// react-router-dom: routing

// Stuff gets rendered here, use rfce
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;

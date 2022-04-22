import Pages from "./pages/Pages";
import Category from "./pages/Category";
import './index.css'

// framer-motion: animation
// react-router-dom: routing

// Stuff gets rendered here, use rfce
function App() {
  return (
    <div className="App">
      <Category/>
      <Pages/>
    </div>
  );
}

export default App;

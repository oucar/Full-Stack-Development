import Navbar from './Navbar';
import Home from './Home';

function App() {

  const title = "@oucar Blog"
  const linkedin = "https://www.linkedin.com/in/oucar/"

  return (
    <div className="App">
    <Navbar/>
      <div className="content">
        <Home/>
        <a href={linkedin}>My Linkedin</a>
      </div>
    </div>
  );
}

export default App;

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';


// json server: npx json-server --watch data/db.json --port 8000

function App() {

  const title = "@oucar Blog"
  
  
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/create" element={<Create/>}></Route>
            <Route exact path="/blogs/:id" element={<BlogDetails/>}></Route>
          </Routes>            
        </div>
      </div>
    </Router>
  );
}

export default App;

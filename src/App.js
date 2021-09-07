import './App.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import ReadBlogs from './Pages/ReadBlogs';
import Detail from './Pages/Detail';
import WriteBlog from './Pages/WriteBlog';
import ErrorPath from './Pages/ErrorPath';

function App() {
  return (
    <Router>
     <div className="App" id = "app">
        <Navbar />
        <Switch>
          <Route path="/blog" exact component={HomePage} />
          <Route path="/read" exact component={ReadBlogs} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/write" exact component={WriteBlog} />
          <Route path="*" component ={ErrorPath} />
        </Switch>
     </div>
    </Router>
  );
}

export default App;

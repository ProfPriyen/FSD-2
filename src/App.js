import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Example5 from './Example5';
import Form from './Form';
import Welcompage from './Welcompage';

function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
     <Route exact path="/" element={<Form/>}/>
     <Route exact path="/welcome" element={<Welcompage/>}/>
   </Routes>
   </Router>
    </div>
  );
}

export default App;

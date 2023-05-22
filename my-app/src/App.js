import "./App.css";
import { Routes,Route,Link , BrowserRouter} from "react-router-dom";

import { Homepage } from "./Homepage";
import { Apple } from "./Apple";

const App = () => (
   <BrowserRouter>
    <div>
    <Link to="/">Home</Link>
    <Link to="/apple">Apple</Link>
  </div> 
  </BrowserRouter>  
);

export default App;

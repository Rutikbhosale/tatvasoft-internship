import React from 'react'
import "./App.css";
import { Routes,Route,Link , BrowserRouter } from "react-router-dom";

import { Homepage } from "./Homepage";
import { Apple } from "./Apple";
import { Notfound } from "./Notfound";

const App = () => (
  <BrowserRouter>
    <div>
    <Link
     to="/"
     style={{
      marginleft : 10,
    }}
    >
      Home
      </Link>
    <Link
     to="/apple"
     style={{
      marginleft : 15,
    }}
    >
      Apple
      </Link>
    <Link to="/applet">Applet</Link>
  </div>  
  <Routes>
    <Route path="/" element ={<Homepage/>}></Route>
    <Route path="/apple" element={<Apple/>}></Route>
    <Route path="*" element={<Notfound/>}></Route>
  </Routes>
  </BrowserRouter>
);
  export default App;

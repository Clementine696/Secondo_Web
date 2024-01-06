import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <Signin></Signin> */}
        <Router>
          <Routes>
            <Route path="/" exact element={Home} />
            <Route path="/signin" element={Signin} />
            <Route path="/signup" element={Signup} />
          </Routes>
        </Router>
    </div>
  );
}

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" exact component={Home} />
//         <Route path="/signin" component={Signin} />
//         <Route path="/signup" component={Signup} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;

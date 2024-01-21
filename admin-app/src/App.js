import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/signin" Component={Signin} />
            <Route path="/signup" Component={Signup} />
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

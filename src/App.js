import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import Login from "./pages/Login";

function App() {
  const [isAuth, setisAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/newpost'
          element={<NewPost />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;

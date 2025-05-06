import React from "react";
import { Routes, Route} from "react-router-dom"
import Home from "./routes/home";
import OAuthCallback from "./components/OAuthCallback";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/callback' element={<OAuthCallback />} />
      </Routes>
    </div>
  );
}

export default App
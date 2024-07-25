   import { Routes, Route, Link } from "react-router-dom";
  import Red from "./Components/Red/Red";
  import Blue from "./Components/Blue/Blue";
  import Home from "./Components/Home";


function App() {
return (
<div id="container">
      <div id="navbar">
        <Link to="/blue">blue</Link>
        <Link to="/red">red</Link>
      </div>
      <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={< Home/>} />
          </Routes>
</div>
    </div>
  );
}

export default App;

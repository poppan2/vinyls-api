import { useEffect, useState } from "react";
import "./App.css";
import ViewVinyls from "./components/ViewVinyls";
import VinylForm from "./components/VinylForm";
import { Route, Routes } from "react-router";
import Home from "./components/Home";

function App() {
  const [vinyls, setVinyls] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/vinyls")
      .then((res) => res.json())
      .then((data) => setVinyls(data));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact component={Home} />
      </Routes>
      <VinylForm setVinyls={setVinyls} />
      <ViewVinyls vinyls={vinyls} />
    </div>
  );
}

export default App;

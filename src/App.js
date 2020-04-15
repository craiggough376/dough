import React from "react";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import { createProvider } from "./context/index";
import { Router } from "@reach/router";
import LevelOne from "./pages/LevelOne";
import PlayerStats from "./components/PlayerStats";
// import LevelOne from "./pages/LevelOne";
const Provider = createProvider({});

function App() {
  return (
    <Provider>
      <div className="App">
        <PlayerStats />
        <Router>
          <MainContainer path="/" />
          <LevelOne path="/level_one" />
        </Router>
      </div>
    </Provider>
  );
}

export default App;

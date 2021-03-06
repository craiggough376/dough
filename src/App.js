import React from "react";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import { createProvider } from "./context/Index";
import { Router } from "@reach/router";
import { LevelOne, LevelTwo, Dead } from "./pages";
import PlayerStats from "./components/PlayerStats";
const Provider = createProvider({});

function App() {
  return (
    <Provider>
      <div className="App">
        <PlayerStats />
        <Router>
          <MainContainer path="/" />
          <LevelOne path="/level_one" />
          <LevelTwo path="/level_two" />
          <Dead path="/dead" />
        </Router>
      </div>
    </Provider>
  );
}

export default App;

// import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="pepe-racing">
      <h1>Pepe Racing</h1>
      <div className="card-row">
        <Card suit="hearts" letter="P" />
        <Card suit="clubs" letter="E" />
        <Card suit="diamonds" letter="P" />
        <Card suit="spades" letter="E" />
        <Card icon="🐸" />
        <Card suit="hearts" letter="P" />
      </div>
      <button className="connect-button">Connect</button>
    </div>
  );
}

function Card({
  suit,
  letter,
  icon,
}: {
  suit?: string;
  letter?: string;
  icon?: string;
}) {
  const getSuitSymbol = (suit: string) => {
    switch (suit) {
      case "hearts":
        return "♥️";
      case "clubs":
        return "♣️";
      case "diamonds":
        return "♦️";
      case "spades":
        return "♠️";
      default:
        return null;
    }
  };

  return (
    <div className="card">
      {icon ? (
        <span className="card-icon">{icon}</span>
      ) : (
        <>
          <span className="card-suit">{getSuitSymbol(suit || "")}</span>
          <span className="card-letter">{letter}</span>
        </>
      )}
    </div>
  );
}

export default App;

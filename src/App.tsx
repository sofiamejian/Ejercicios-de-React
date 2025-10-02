import React from "react";
import "./App.css";
import GreetingCard from "./components/GreetingCard";
import LikeCounter from "./components/LikeCounter";
import CommentInput from "./components/CommentInput";
import PetGrid from "./components/PetGrid";
import ProfileToggle from "./components/ProfileToggle";

const App: React.FC = () => {
  const pets = [
    { name: "Luna", type: "Perro" },
    { name: "Michi", type: "Gato" },
    { name: "Rocky", type: "Hamster" },
    { name: "Toby", type: "Conejo" },
  ];

  return (
    <div className="app">
      <h1>Ejercicios React y TypeScript</h1>
      <GreetingCard name="Sofía" />
      <LikeCounter />
      <CommentInput />
      <PetGrid pets={pets} />
      <ProfileToggle />
    </div>
  );
};

export default App;

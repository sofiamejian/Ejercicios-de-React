import React from "react";

interface GreetingCardProps {
  name: string;
}

const GreetingCard: React.FC<GreetingCardProps> = ({ name }) => {
  return (
    <div className="card">
      <h2>¡Hola, {name}!</h2>
      <p>Bienvenido a la aplicación </p>
    </div>
  );
};

export default GreetingCard;

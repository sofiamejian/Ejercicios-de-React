import React from "react";

interface Pet {
  name: string;
  type: string;
}

interface PetGridProps {
  pets: Pet[];
}

const PetGrid: React.FC<PetGridProps> = ({ pets }) => {
  return (
    <div className="card">
      <h2>Mis Mascotas</h2>
      <div className="grid">
        {pets.map((pet, index) => (
          <div key={index} className="pet-card">
            <h3>{pet.name}</h3>
            <p>{pet.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetGrid;

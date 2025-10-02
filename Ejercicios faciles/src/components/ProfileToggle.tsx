import React, { useState } from "react";

const ProfileToggle: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="card">
      <h2>Perfil de Usuario</h2>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Ocultar" : "Mostrar"} Información
      </button>
      {showInfo && (
        <div className="profile-info">
          <p><strong>Nombre:</strong> Sofía Mejía</p>
          <p><strong>Email:</strong> sofiamejian@icloud.com</p>
          <p><strong>Ciudad:</strong> Cali</p>
        </div>
      )}
    </div>
  );
};

export default ProfileToggle;

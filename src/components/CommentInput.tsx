import React, { useState } from "react";

const CommentInput: React.FC = () => {
  const [comment, setComment] = useState("");

  return (
    <div className="card">
      <h2>Comentarios</h2>
      <input
        type="text"
        placeholder="Escribe un comentario..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <p>Vista previa: {comment}</p>
    </div>
  );
};

export default CommentInput;

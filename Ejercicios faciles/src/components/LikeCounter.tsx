import React, { useState } from "react";

const LikeCounter: React.FC = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card">
      <h2>Post con likes</h2>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}> Like</button>
    </div>
  );
};

export default LikeCounter;

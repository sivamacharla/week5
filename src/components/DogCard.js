import React from "react";

function DogCard({ dog, onBan }) {
  if (!dog) return null;

  const { url, breeds } = dog;
  const breed = breeds?.[0];

  return (
    <div className="dog-card">
      <img src={url} alt="Dog" />
      {breed ? (
        <>
          <h2 onClick={() => onBan(breed.name)} className="clickable">{breed.name}</h2>
          <p>Group: {breed.breed_group || "Unknown"}</p>
          <p>Origin: {breed.origin || "Unknown"}</p>
        </>
      ) : (
        <p>Breed info not available</p>
      )}
    </div>
  );
}

export default DogCard;

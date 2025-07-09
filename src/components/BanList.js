import React from "react";

function BanList({ banList, onRemove }) {
  return (
    <div className="ban-list">
      <h3>Ban List</h3>
      {banList.length === 0 ? (
        <p>No banned breeds.</p>
      ) : (
        <ul>
          {banList.map((item, index) => (
            <li key={index} onClick={() => onRemove(item)} className="clickable">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BanList;

import React from "react";

function History({ history }) {
  return (
    <div className="history">
      <h3>Previously Seen</h3>
      <div className="history-list">
        {history.map((item, idx) => (
          <img key={idx} src={item.url} alt={`dog-${idx}`} />
        ))}
      </div>
    </div>
  );
}

export default History;

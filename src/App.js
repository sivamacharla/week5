import React, { useEffect, useState } from "react";
import DogCard from "./components/DogCard";
import BanList from "./components/BanList";
import History from "./components/History";
import "./App.css";

const API_KEY = process.env.REACT_APP_DOG_API_KEY;
const API_URL = "https://api.thedogapi.com/v1/images/search?has_breeds=true&limit=1";

function App() {
  const [dog, setDog] = useState(null);
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);

  const fetchDog = async () => {
    try {
      for (let i = 0; i < 10; i++) {
        const response = await fetch(API_URL, {
          headers: { "x-api-key": API_KEY }
        });
        const data = await response.json();
        const newDog = data[0];
        const breedName = newDog?.breeds?.[0]?.name;

        if (!breedName || !banList.includes(breedName)) {
          setDog(newDog);
          setHistory(prev => [newDog, ...prev]);
          return;
        }
      }
      setDog(null); 
    } catch (error) {
      console.error("Failed to fetch dog:", error);
    }
  };

  const handleBan = (breed) => {
    if (!banList.includes(breed)) {
      setBanList([...banList, breed]);
      fetchDog(); 
    }
  };

  const handleUnban = (breed) => {
    setBanList(banList.filter((item) => item !== breed));
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="app-container">
      <div className="main-section">
        <h1>🐶 Discover Dogs</h1>
        <p>Click "Discover" to see a new dog. Click a breed name to ban it from future results.</p>
        <button className="discover-button" onClick={fetchDog}>🔄 Discover</button>
        <DogCard dog={dog} onBan={handleBan} />
        <History history={history} />
      </div>

      <div className="ban-section">
        <BanList banList={banList} onRemove={handleUnban} />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import plantsData from "./db.json";

function PlantPage() {
  const [plants, setPlants] = useState(plantsData.plants);
  const [filteredPlants, setFilteredPlants] = useState(plantsData.plants);

  const handleSearch = (query) => {
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlants(filtered);
  };

  return (
    <main>
      <NewPlantForm />
      <Search onSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;

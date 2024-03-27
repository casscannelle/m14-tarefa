import React from 'react';
import axios from 'axios';

const PokemonCard = ({ id, name, image, evolution, updateList }) => {
  const handleDeletePokemon = async () => {
    try {
      await axios.delete(`http://localhost:4000/delete-pokemon/${id}`);
      updateList();
    } catch (error) {
      console.error('Error deleting Pokemon:', error);
    }
  };

  return (
    <div className="pokemon-card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>Evolution Stage: {evolution}</h3>
      <button onClick={handleDeletePokemon}>Delete</button>
    </div>
  );
};

export default PokemonCard;
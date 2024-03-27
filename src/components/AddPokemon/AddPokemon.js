import React, { useState } from 'react';
import axios from 'axios';

const AddPokemonForm = ({ updateList }) => {
  const [nameInput, setNameInput] = useState('');
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [evolutionInput, setEvolutionInput] = useState('');

  const handleChangePokemon = async () => {
    try {
      await axios.post('http://localhost:4000/new-pokemon', {
        name: nameInput,
        imageUrl: imageUrlInput,
        evolution: Number(evolutionInput)
      });
      updateList();
    } catch (error) {
      console.error('Error adding new Pokemon:', error);
    }
  };

  return (
    <div>
      <h2>Add New Pokemon</h2>
      <label>
        Name:
        <input
          type="text"
          onChange={(e) => setNameInput(e.target.value)}
          value={nameInput}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          onChange={(e) => setImageUrlInput(e.target.value)}
          value={imageUrlInput}
        />
      </label>
      <label>
        Evolution Stage:
        <input
          type="number"
          onChange={(e) => setEvolutionInput(e.target.value)}
          value={evolutionInput}
        />
      </label>
      <button onClick={handleChangePokemon}>Add Pokemon</button>
    </div>
  );
};

export default AddPokemonForm;
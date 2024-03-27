import React, { useState } from 'react';
import axios from 'axios';

const AddPokemon = ({ updateList, setCreatePokemon, setEditPokemon }) => {
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

  const handleCancel = () => {
    setCreatePokemon(false); 
    setEditPokemon(false); 
  };

  return (
    <div>
      <div className="pokemon-card">
      <h2>Adicionar Pokémon</h2>
        <div>
          <label>
            Nome:
          <input
              type="text"
              onChange={(e) => setNameInput(e.target.value)}
              value={nameInput}
            />
          </label>
        </div>
      <div>
      <label>
        URL da imagem:
        <input
          type="text"
          onChange={(e) => setImageUrlInput(e.target.value)}
          value={imageUrlInput}
        />
      </label>
      </div>
      <div>
      <label>
        Estágio de evolução:
        <input
          type="number"
          onChange={(e) => setEvolutionInput(e.target.value)}
          value={evolutionInput}
        />
      </label>
      </div>
      <button onClick={handleChangePokemon}>Adicionar Pokémon</button>
      <button onClick={handleCancel}>Cancelar</button>
    </div>
    </div>
  );
};

export default AddPokemon;
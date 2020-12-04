import React from 'react';
import { Select } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

export const NavBar = () => {
  const history = useHistory();
  const handleGenres = (genre) => {
    switch (genre) {
      case 'Action':
        history.push(`/genre/28`);
        break;
      case 'Adventure':
        history.push(`/genre/12`);
        break;
      case 'Animation':
        history.push(`/genre/16`);
        break;
      case 'Comedy':
        history.push(`/genre/35`);
        break;
      case 'Crime':
        history.push(`/genre/80`);
        break;
      case 'Documentary':
        history.push(`/genre/99`);
        break;
      case 'Drama':
        history.push(`/genre/18`);
        break;
      case 'Family':
        history.push(`/genre/10751`);
        break;
      case 'Fantasy':
        history.push(`/genre/14`);
        break;
      case 'History':
        history.push(`/genre/36`);
        break;
      case 'Horror':
        history.push(`/genre/27`);
        break;
      case 'Romance':
        history.push(`/genre/10749`);
        break;
      case 'Science_Fiction':
        history.push(`/genre/878`);
        break;
      case 'War':
        history.push(`/genre/10752`);
        break;
      default:
        history.push(`/`);
        break;
    }
  };
  return (
    <Select
      placeholder="Seleccione Genero de Peliculas"
      onChange={(e) => handleGenres(e.target.value)}
    >
      <option value="Action">Acción</option>
      <option value="Adventure">Aventura</option>
      <option value="Animation">Animación </option>
      <option value="Comedy">Comedia</option>
      <option value="Crime">Crimen</option>
      <option value="Documentary">Documental</option>
      <option value="Drama">Drama</option>
      <option value="Family">Familiar</option>
      <option value="Fantasy">Fantasía</option>
      <option value="History">Historia</option>
      <option value="Horror">Terror</option>
      <option value="Romance">Romance</option>
      <option value="Science_Fiction">Ciencia Ficción</option>
      <option value="War">Guerra</option>
    </Select>
  );
};

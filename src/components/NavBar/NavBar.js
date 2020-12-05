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
      bg={` linear-gradient(180deg, rgba(0, 0, 0, 0.0092) 5.21%, rgba(0, 0, 0, 0.2852) 29.17%, rgba(0, 0, 0, 0.4554) 50.52%, rgba(0, 0, 0, 0.2852) 75%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.0966) 30.21%, rgba(0, 0, 0, 0.115) 40.63%, rgba(0, 0, 0, 0.1794) 53.12%, rgba(0, 0, 0, 0.4554) 66.67%, rgba(0, 0, 0, 0.2714) 89.06%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.0092) 5.21%, rgba(0, 0, 0, 0.2852) 21.88%, rgba(0, 0, 0, 0.4554) 50.52%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)`}
      border="none"
      color="#A72626"
      fontFamily="Montserrat"
      fontStyle="normal"
      fontWeight="bold"
      fontSize={{ base: '15px', md: '20px', lg: '24px' }}
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

import React from 'react';
import { Select } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { getGenderByName } from '../../utils/getGenderByName';

export const NavBar = () => {
  const history = useHistory();
  const handleGenders = (gender) => {
    const genderId = getGenderByName(gender);
    history.push(`/genre/${genderId}`);
  };
  return (
    <Select
      display="flex"
      alignSelf="center"
      placeholder="Categorias"
      onChange={(e) => handleGenders(e.target.value)}
      bg=" linear-gradient(180deg, rgba(0, 0, 0, 0.0092) 5.21%, rgba(0, 0, 0, 0.2852) 29.17%, rgba(0, 0, 0, 0.4554) 50.52%, rgba(0, 0, 0, 0.2852) 75%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.0966) 30.21%, rgba(0, 0, 0, 0.115) 40.63%, rgba(0, 0, 0, 0.1794) 53.12%, rgba(0, 0, 0, 0.4554) 66.67%, rgba(0, 0, 0, 0.2714) 89.06%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.0092) 5.21%, rgba(0, 0, 0, 0.2852) 21.88%, rgba(0, 0, 0, 0.4554) 50.52%);"
      border="none"
      color="#A72626"
      fontFamily="Montserrat"
      fontStyle="normal"
      fontWeight="bold"
      fontSize={{ base: '2rem', md: '1.25rem', lg: '1.5rem' }}
      minH="4.81rem"
      maxW="89%"
      marginTop="6.68rem"
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

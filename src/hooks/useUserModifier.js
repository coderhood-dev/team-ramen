import * as UserModifier from '../services/userModifiers';
import { useLocalStorage } from '.';

export const useUserModifier = () => {
  // conexion ficticia con base de datos, accede al valor del LS con key="users"
  const [getUsers, setUsers] = useLocalStorage('users');

  return {
    addpurchasedfilm: (user, film) => {
      const users = getUsers();
      return UserModifier.doAddPurchasedFilm(setUsers, users, user, film);
    },
    addwishedfilm: (user, film) => {
      const users = getUsers();
      return UserModifier.doAddWishedFilm(setUsers, users, user, film);
    },
    removewishedfilm: (user, film) => {
      const users = getUsers();
      return UserModifier.doRemoveWishedFilm(setUsers, users, user, film);
    },
    setUserName: (user, name) => {
      const users = getUsers();
      return UserModifier.doSetUserName(setUsers, users, user, name);
    },
    setUserPassword: (user, password) => {
      const users = getUsers();
      return UserModifier.doSetUserPassword(setUsers, users, user, password);
    },
  };
};

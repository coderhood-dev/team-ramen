import * as UserModifier from "../services/userModifiers";
import { useLocalStorage2 } from "../hooks/useLocalStorage2";

// esto podria ser un servicio de autentificacion como Firebase, AWS Cognito, o un endpoint de autentificacion de su propio backend

export const useUserModifier = () => {
  //conexion ficticia con base de datos, accede al valor del LS con key="users"
  const [getUsers, setUsers] = useLocalStorage2("users");

  return {
    addpurchasedfilm: (user, film) => {
      const users = getUsers();
      return UserModifier.doAddPurchasedFilm(setUsers, users, user, film);
    },
    addwishedfilm: (user) => {
      const users = getUsers();
      return UserModifier.doAddPurchasedFilm(setUsers, users, user);
    },
  };
};

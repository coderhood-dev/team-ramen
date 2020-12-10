import * as Auth from "../services/auth";
import { useLocalStorage2 } from "../hooks/useLocalStorage2";

// esto podria ser un servicio de autentificacion como Firebase, AWS Cognito, o un endpoint de autentificacion de su propio backend

export const useAuth = () => {
  //conexion ficticia con base de datos, accede al valor del LS con key="users"
  const [getUsers, setUsers] = useLocalStorage2("users");

  return {
    signin: (email, password) => {
      const users = getUsers();
      return Auth.doSignin(users, email, password);
    },
    signup: (user) => {
      const users = getUsers();
      return Auth.doSignup(users, setUsers, user);
    },
  };
};

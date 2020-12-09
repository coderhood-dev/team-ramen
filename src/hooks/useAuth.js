import * as Auth from "../services/auth";
import * as UserModifier from "../services/userModifiers";

// esto podria ser un servicio de autentificacion como Firebase, AWS Cognito, o un endpoint de autentificacion de su propio backend

export const useAuth = () => {
  const getLocalStorage = (key) => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage);
    }
    window.localStorage.setItem(key, JSON.stringify([]));
    return [];
  };

  const setUsers = (users) => {
    setLocalStorage("users", users);
  };
  const setLocalStorage = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
  };

  return {
    signin: (email, password) => {
      const users = getLocalStorage("users");
      return Auth.doSignin(users, email, password);
    },
    signup: (user) => {
      const users = getLocalStorage("users");
      return Auth.doSignup(users, setUsers, user);
    },
    addpurchasedfilm: (user, film) => {
      const users = getLocalStorage("users");
      return UserModifier.doAddPurchasedFilm(setUsers, users, user, film);
    },
    addwishedfilm: (user) => {
      const users = getLocalStorage("users");
      return UserModifier.doAddPurchasedFilm(users, setUsers, user);
    },
  };
};

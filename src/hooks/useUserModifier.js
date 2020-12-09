import { useLocalStorageState } from "../hooks/useLocalStorage";
import * as UserModifier from "../services/userModifiers";

export const useUserModifier = () => {
  const [users, setUsers] = useLocalStorageState("users", []);
  return {
    // user = usuario logeado, se pasa por parametro
    // setUser = setter del contexto 'user'.
    // paso user y setUser por parametro porque ademas de modificar el localStorage debo modificar el contexto
    addpurchasedfilm: (user, film) =>
      UserModifier.doAddPurchasedFilm(setUsers, users, user, film),
    addwishedfilm: (user) =>
      UserModifier.doAddPurchasedFilm(users, setUsers, user),
  };
};

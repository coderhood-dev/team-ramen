import { useState } from "react";

/**
 *
 * @param {String} key The key to set in localStorage for this value
 * @returns [ getter() , setter(data) ]
 */

export const useLocalStorage = (key = "default") => {
  //un estado para almacenar la key del local storage
  const [keyValue] = useState(key);

  //obtener datos del localStorage
  const getLocalStorage = () => {
    const valueInLocalStorage = window.localStorage.getItem(keyValue);
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage);
    }
    window.localStorage.setItem(keyValue, JSON.stringify([]));
    return [];
  };

  //setear datos al local storage (en teoria, es anti errores)
  const setLocalStorage = (data) => {
    if (!data) return false;
    if (data === null) return window.localStorage.setItem(keyValue, "");
    window.localStorage.setItem(keyValue, JSON.stringify(data));
  };
  return [getLocalStorage, setLocalStorage];
};

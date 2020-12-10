import { sleep } from "../utils/sleep";

// user = usuario logeado, se pasa por parametro

export const doAddPurchasedFilm = async (setUsers, users, user, film) => {
  if (typeof film.price === "string") {
    film.price = parseInt(film.price, 10);
  }
  const errors = [];
  if (!user) return Promise.reject("Debes estar logeado primero");

  const storedUser = users.find((u) => u.email === user.email);
  const index = users.indexOf(storedUser, 0);

  if (!storedUser)
    errors.push("No se ha encontrado tu usuario en la base de datos");

  !user.totalSpent
    ? (user.totalSpent = 400)
    : (user.totalSpent = user.totalSpent + film.price);
  if (user.purchasedFilm) user.purchasedFilm.push(film);
  else {
    user.purchasedFilm = [];
    user.purchasedFilm.push(film);
  }

  users[index] = user;
  setUsers([...users]);
  // si llega hasta aca, significa que la promesa se resuelve bien
  if (errors.length > 0) {
    await sleep(2000);
    return Promise.reject(errors);
  } else {
    await sleep(2000);
    return user;
  }
};

export const doAddWishedFilm = async (setUsers, users, user, film) => {
  const errors = [];
  if (!user) return Promise.reject("Debes estar logeado primero");

  const storedUser = users.find((u) => u.email === user.email);
  const index = users.indexOf(storedUser, 0);

  if (!storedUser)
    errors.push("No se ha encontrado tu usuario en la base de datos");

  if (user.wishedFilms) user.wishedFilms.push(film);
  else {
    user.wishedFilms = [];
    user.wishedFilms.push(film);
  }

  users[index] = user;
  setUsers([...users]);
  // si llega hasta aca, significa que la promesa se resuelve bien
  if (errors.length > 0) {
    await sleep(2000);
    return Promise.reject(errors);
  } else {
    await sleep(2000);
    return user;
  }
};

export const doRemoveWishedFilm = async (setUsers, users, user, film) => {
  const errors = [];
  if (!user) return Promise.reject("Debes estar logeado primero");

  const storedUser = users.find((u) => u.email === user.email);
  const index = users.indexOf(storedUser, 0);

  if (!storedUser)
    errors.push("No se ha encontrado tu usuario en la base de datos");

  if (user.wishedFilms) {
    //eliminar la pelicula
    const storedFilm = user.wishedFilms.find((f) => f.title === film.title);
    const i = user.wishedFilms.indexOf(storedFilm, 0);
    console.log(i);
    if (i > -1) user.wishedFilms.splice(i, 1);
  } else {
    //no existian peliculas, no eliminar nada :)
    user.wishedFilms = [];
  }

  users[index] = user;
  setUsers([...users]);
  // si llega hasta aca, significa que la promesa se resuelve bien
  if (errors.length > 0) {
    await sleep(2000);
    return Promise.reject(errors);
  } else {
    await sleep(2000);
    return user;
  }
};

export const doSetUserName = async (setUsers, users, user, name) => {
  const errors = [];
  if (!user) return Promise.reject("Debes estar logeado primero");

  const storedUser = users.find((u) => u.email === user.email);
  const index = users.indexOf(storedUser, 0);

  if (!storedUser)
    errors.push("No se ha encontrado tu usuario en la base de datos");

  name ? (user.name = name) : errors.push("El nombre no puede estar vacio");

  users[index] = user;

  setUsers([...users]);
  // si llega hasta aca, significa que la promesa se resuelve bien
  if (errors.length > 0) {
    await sleep(2000);
    return Promise.reject(errors);
  } else {
    await sleep(2000);
    return user;
  }
};

export const doSetUserPassword = async (setUsers, users, user, password) => {
  const errors = [];
  if (!user) return Promise.reject("Debes estar logeado primero");

  const storedUser = users.find((u) => u.email === user.email);
  const index = users.indexOf(storedUser, 0);

  if (!storedUser)
    errors.push("No se ha encontrado tu usuario en la base de datos");

  password
    ? (user.password = password)
    : errors.push("La contraseña no puede estar vacia");

  users[index] = user;

  setUsers([...users]);
  // si llega hasta aca, significa que la promesa se resuelve bien
  if (errors.length > 0) {
    await sleep(2000);
    return Promise.reject(errors);
  } else {
    await sleep(2000);
    return user;
  }
};

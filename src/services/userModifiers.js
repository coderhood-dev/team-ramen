import { sleep } from "../utils/sleep";
// user = usuario logeado, se pasa por parametro
// setUser = setter del contexto 'user'.
// paso user y setUser por parametro porque ademas de modificar el localStorage debo modificar el contexto

export const doAddPurchasedFilm = async (setUsers, users, user, film) => {
  const storedUser = users.find((u) => u.email === user.email);
  const index = users.indexOf(storedUser, 0);

  console.log("users", users);
  console.log("index", index);
  console.log("user", user);
  if (!storedUser) {
    return Promise.reject("Debes estar logeado primero");
  }

  const newUser = {
    ...user,
    film: film,
  };
  users[index] = newUser;
  setUsers([...users]);
  // si llega hasta aca, significa que la promesa se resuelve bien
  return newUser;
};

export const doAddWishedFilm = async (users, setUsers, user) => {
  // estos van a ser mis campos requeridos, todo servicio de autentificacion siempre va a tener campos requeridos
  const fieldsRequired = ["email", "password"];
  const errors = [];

  //chequeo que el email no este registrado
  const storedUser = users.find((u) => u.email === user.email);
  if (storedUser) errors.push("El email ya esta registrado");

  //chequeo que la contrasena tenga al menos 6 caracteres
  if (user.password.length < 6)
    errors.push("La contraseña debe tener al menos 6 caracteres");

  //chequeo que las paswords coincidan
  if (user.password !== user.passwordRepeat)
    errors.push("Las contraseñas no coinciden");

  // chequeo si complete los campos requeridos, sino devuelvo un array con los errores
  Object.entries(user).forEach((element) => {
    const [key, value] = element;
    const isFieldRequired = fieldsRequired.includes(key);

    if (!value && isFieldRequired) {
      const error = `${key} is required`;
      errors.push(error);
    }
  });

  if (errors.length > 0) {
    await sleep(1000);
    return Promise.reject(errors);
  } else {
    await sleep();
    setUsers([...users, { email: user.email, password: user.password }]);
  }

  // toda async function retorna una promesa, eso significa que esta funcion retorna una promesa, en el caso de haber errores esta promesa se rechaza y devuelve los errores y en el caso que este todo bien se resuelve despues de 2000ms
};

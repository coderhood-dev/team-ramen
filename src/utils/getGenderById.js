export const getGenderById = (id) => {
  switch (id) {
    case '28':
      return 'Acción';
    case '12':
      return 'Aventura';
    case '16':
      return 'Animación';
    case '35':
      return 'Comedia';
    case '80':
      return 'Crimen';
    case '99':
      return 'Documental';
    case '18':
      return 'Drama';
    case '10751':
      return 'Familiar';
    case '14':
      return 'Fantasía';
    case '36':
      return 'Historia';
    case '27':
      return 'Terror';
    case '10749':
      return 'Romance';
    case '878':
      return 'Ciencia Ficción';
    case '10752':
      return 'Guerra';
    default:
      return 'No hay pelicula';
  }
};

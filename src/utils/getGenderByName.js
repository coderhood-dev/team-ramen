export const getGenderByName = (gender) => {
  switch (gender) {
    case 'Action':
      return 28;
    case 'Adventure':
      return 12;
    case 'Animation':
      return 16;
    case 'Comedy':
      return 35;
    case 'Crime':
      return 80;
    case 'Documentary':
      return 99;
    case 'Drama':
      return 18;
    case 'Family':
      return 10751;
    case 'Fantasy':
      return 14;
    case 'History':
      return 36;
    case 'Horror':
      return 27;
    case 'Romance':
      return 10749;
    case 'Science_Fiction':
      return 878;
    case 'War':
      return 10752;
    default:
      return 28;
  }
};

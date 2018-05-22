// Picks and returns a random element from a given array
export const randomPicker = array =>
  array[Math.floor(Math.random() * array.length)];

// format seconds into minutes and seconds
export const timeFormatter = seconds => {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  const secString = sec < 10 ? '0' + sec : sec;
  return min + ':' + secString;
};

// return color based on time left
export const color = seconds => {
  if (seconds > 60) return 'black';
  if (seconds > 30) return 'orange';
  return 'red';
};

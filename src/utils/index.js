export const convertTime = (value) => {
  let minutes = ~~(parseFloat(value) / 60);
  let extraSeconds = parseFloat(value) % 60;

  return `${minutes} : ${extraSeconds < 10 ? '0' : ''}${extraSeconds}`;
};

export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

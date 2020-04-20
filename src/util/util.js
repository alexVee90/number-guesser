
export const createRange = (min, max) => Array.from({ length: max}, (_, i) => min + i);

export const randomNumber = () => {
  const num = Math.floor(Math.random() * 10) + 1
  return num !== 10 ? num : num - 1;
}
export const randomNum = (min, max) =>{
  min = Math.ceil(min);
  max = Math.floor(max);
  const res = Math.floor(Math.random() * (max - min + 1)) + min
  return parseInt(res)
}

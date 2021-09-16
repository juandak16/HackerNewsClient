export const formatData = (data) => {
  const dataformated = data.hits.map((item) => item);
  return dataformated;
}
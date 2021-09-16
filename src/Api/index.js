export const getEndpoint = (typeSelected, page) => {
  return `https://hn.algolia.com/api/v1/search_by_date?query=${typeSelected}&page=${page}`
}
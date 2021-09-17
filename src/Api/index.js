export const getEndpoint = (typeSelected, page, limit) => {
  return `https://hn.algolia.com/api/v1/search_by_date?${typeSelected ? `query=${typeSelected}` : ''}&page=${page}&hitsPerPage=${limit}`
}
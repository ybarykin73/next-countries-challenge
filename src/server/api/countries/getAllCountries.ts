export const getAllCountrues = async () => {

  const res = await fetch(process.env.URL + '/api/countrue')
  const data = await res.json()

  return data
} 
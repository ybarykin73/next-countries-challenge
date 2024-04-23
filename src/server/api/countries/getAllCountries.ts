export const getAllCountrues = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 3000))

  const res = await fetch(process.env.URL + '/api')
  const data = await res.json()

  return data
} 
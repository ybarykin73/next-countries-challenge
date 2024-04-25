export const getCountry = async (name:  string) => {

  const res = await fetch(`${process.env.URL}/api/countrue/${name}`)
  const data = await res.json()

  return data[0]
}
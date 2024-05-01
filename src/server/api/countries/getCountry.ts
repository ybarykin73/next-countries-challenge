import { createCountry } from "@/src/utils/factory/Country/countryFactory"

export const getCountry = async (name:  string) => {

  const res = await fetch(`${process.env.URL}/api/countrue/${name}`)
  const data = await res.json()
  const country = await createCountry(data[0])

  return country
}
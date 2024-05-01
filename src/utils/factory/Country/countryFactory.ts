import Country from "./Country"
import { ICountryData } from "./ICountryData"

export const createCountry = (country: ICountryData) => {
  return new Country(country)
}
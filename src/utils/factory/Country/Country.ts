import { ICountryData } from "./ICountryData"

class Country {
  tld:          string
  name:         string
  region:       string
  capital:      string
  flagImage:    string
  languages:    string
  subregion:    string
  population:   string
  currencies:   string[]
  officialName: string
  flagImageAlt: string

  constructor(country: ICountryData) {
    this.name = country.name.common
    this.officialName = country.name.official
    this.capital = country.capital ? country.capital[0] : '-'
    this.tld = country.tld.join(', ')
    this.flagImage = country.flags.svg || country.flags.png
    this.flagImageAlt = country.flags.alt
    this.region = country.region
    this.subregion = country.subregion
    this.population = String(country.population)
    this.languages = Object.values(country.languages).join(', ')
    this.currencies = country.currencies ? Object.values(country.currencies) : []
  }
}

export default Country
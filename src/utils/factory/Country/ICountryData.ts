export interface ICountryData {
  tld: string[]
  name: {
    common: string,
    official: string
  },
  flags: {
    alt: string
    png: string
    svg: string
  }
  region: string
  capital: string[]
  languages: Record<string, string>
  subregion: string
  population: number
  currencies: Record<string, string>
}
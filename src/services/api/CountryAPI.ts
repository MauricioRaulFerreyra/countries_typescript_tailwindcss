import HttpClient from './HttpClient'
import { Country } from '../../types/country'

class CountryAPI {
  private httpClient: HttpClient

  constructor () {
    this.httpClient = new HttpClient('https://restcountries.com/v3.1')
  }

  async getAllCountries (): Promise<Country[]> {
    return this.httpClient.get<Country[]>('/all')
  }

  async getCountryByName (name: string): Promise<Country[]> {
    return this.httpClient.get<Country[]>(`/name/${name}`)
  }

  async getCountriesByRegion (region: string): Promise<Country[]> {
    return this.httpClient.get<Country[]>(`/region/${region}`)
  }
}

export default CountryAPI

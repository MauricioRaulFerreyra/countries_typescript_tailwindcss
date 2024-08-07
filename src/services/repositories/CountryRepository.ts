import CountryAPI from '../api/CountryAPI'
import { Country } from '../../types/country'

class CountryRepository {
  private api: CountryAPI

  constructor () {
    this.api = new CountryAPI()
  }

  async getAllCountries (): Promise<Country[]> {
    try {
      return await this.api.getAllCountries()
    } catch (error) {
      // Manejo de errores
      console.error('Error fetching all countries:', error)
      throw error
    }
  }

  async getCountryByName (name: string): Promise<Country[]> {
    try {
      return await this.api.getCountryByName(name)
    } catch (error) {
      console.error(`Error fetching country by name: ${name}`, error)
      throw error
    }
  }

  async getCountriesByRegion (region: string): Promise<Country[]> {
    try {
      return await this.api.getCountriesByRegion(region)
    } catch (error) {
      console.error(`Error fetching countries by region: ${region}`, error)
      throw error
    }
  }
}

export default CountryRepository

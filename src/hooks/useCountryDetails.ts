import { useState, useEffect } from 'react'
import CountryRepository from '../services/repositories/CountryRepository'
import { Country } from '../types/country'

const useCountryDetails = (countryCode: string) => {
  const [country, setCountry] = useState<Country | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const countryRepository = new CountryRepository()

  useEffect(() => {
    const fetchCountry = async () => {
      setIsLoading(true)
      setError(null)
      try {
        // Primero, obtenemos todos los países
        const allCountries = await countryRepository.getAllCountries()
        // Luego, buscamos el país que coincida con el código
        const fetchedCountry = allCountries.find(c => c.cca3 === countryCode)

        if (fetchedCountry) {
          setCountry(fetchedCountry)
        } else {
          setError('Country not found')
        }
      } catch (err) {
        setError('Failed to fetch country details. Please try again later.')
        console.error('Error fetching country:', err)
      } finally {
        setIsLoading(false)
      }
    }

    if (countryCode) {
      fetchCountry()
    }
  }, [countryCode])

  return { country, isLoading, error }
}

export default useCountryDetails

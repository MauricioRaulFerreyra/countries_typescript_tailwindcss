// src/hooks/useCountries.ts
import { useState, useEffect, useCallback } from 'react'
import CountryRepository from '../services/repositories/CountryRepository'
import { Country, Region } from '../types/country'

const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState<Region | ''>('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const countryRepository = new CountryRepository()

  const fetchCountries = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const allCountries = await countryRepository.getAllCountries()
      setCountries(allCountries)
      setFilteredCountries(allCountries)
    } catch (err) {
      setError('Failed to fetch countries. Please try again later.')
      console.error('Error fetching countries:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCountries()
  }, [fetchCountries])

  useEffect(() => {
    const filtered = countries.filter(
      country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedRegion === '' || country.region === selectedRegion)
    )
    setFilteredCountries(filtered)
  }, [searchTerm, selectedRegion, countries])

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term)
  }, [])

  const handleRegionSelect = useCallback((region: Region | '') => {
    setSelectedRegion(region)
  }, [])

  const getCountryByName = useCallback(async (name: string) => {
    try {
      const country = await countryRepository.getCountryByName(name)
      return country[0] // Assuming the API returns an array with a single country
    } catch (err) {
      console.error(`Error fetching country ${name}:`, err)
      throw err
    }
  }, [])

  return {
    countries: filteredCountries,
    isLoading,
    error,
    searchTerm,
    selectedRegion,
    handleSearch,
    handleRegionSelect,
    getCountryByName,
    refetch: fetchCountries
  }
}

export default useCountries

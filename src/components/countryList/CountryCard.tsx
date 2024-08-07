import React from 'react'
import { Country } from '../../types/country'

interface CountryCardProps {
  country: Country
  onClick: (country: Country) => void
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onClick }) => {
  return (
    <div
      className='bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden cursor-pointer'
      onClick={() => onClick(country)}
    >
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className='w-full h-40 object-cover'
      />
      <div className='p-4'>
        <h2 className='text-lg font-bold mb-2 dark:text-white'>
          {country.name.common}
        </h2>
        <p className='text-sm dark:text-gray-300'>
          Population: {country.population.toLocaleString()}
        </p>
        <p className='text-sm dark:text-gray-300'>Region: {country.region}</p>
        <p className='text-sm dark:text-gray-300'>
          Capital: {country.capital?.[0]}
        </p>
      </div>
    </div>
  )
}

export default CountryCard

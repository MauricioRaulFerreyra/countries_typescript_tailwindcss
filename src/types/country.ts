interface Name {
  common: string
  official?: string
  nativeName: {
    [key: string]: {
      official?: string
      common?: string
    }
  }
}

interface Currency {
  name: string
  symbol: string
}

interface Idd {
  root: string
  suffixes: string[]
}

interface Translation {
  official: string
  common: string
}

interface Demonym {
  f: string
  m: string
}

interface Maps {
  googleMaps: string
  openStreetMaps: string
}

interface Flags {
  png: string
  svg: string
}

interface CapitalInfo {
  latlng: number[]
}

export interface Country {
  borders?: string[]
  name: Name
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  independent?: boolean
  status: string
  unMember?: boolean
  currencies?: { [key: string]: Currency }
  idd: Idd
  capital: string[]
  altSpellings?: string[]
  region: string
  languages?: { [key: string]: string }
  translations?: { [key: string]: Translation }
  latlng?: number[]
  landlocked?: boolean
  area: number
  demonyms?: { [key: string]: Demonym }
  flag?: string
  maps?: Maps
  population: number
  car?: {
    signs: string[]
    side: string
  }
  timezones?: string[]
  continents?: string[]
  flags: Flags
  coatOfArms?: Record<string, unknown>
  startOfWeek?: string
  capitalInfo?: CapitalInfo
}

export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'

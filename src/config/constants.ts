export const API_URLS = {
    allCountries: 'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,languages,currencies',
    countryByName: (name: string) => `https://restcountries.com/v3.1/name/${name}?fields=name,capital,region,population,flags,languages,currencies`,
    searchByFilter: (filterType: 'region' | 'lang' | 'currency', value: string) => `https://restcountries.com/v3.1/${filterType}/${value}?fields=name,capital,region,population,flags,languages,currencies`,
  };
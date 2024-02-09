import { Country, CountrySearchResult } from '../models/Country';
import { API_URLS } from '@/config/constants';

export class CountriesService {
  async getAllCountries(): Promise<CountrySearchResult> {
    try {
      const response = await fetch(API_URLS.allCountries);
      const data: Country[] = await response.json();
      return { countries: data };
    } catch (error) {
      return { countries: [], error: 'Failed to fetch countries' };
    }
  }

  async searchCountriesByName(name: string): Promise<CountrySearchResult> {
    try {
      const response = await fetch(API_URLS.countryByName(name));
      const data: Country[] = await response.json();
      return { countries: data };
    } catch (error) {
      return { countries: [], error: 'Failed to fetch country by name' };
    }
  }

  async searchCountriesByFilter(filterType: 'region' | 'lang' | 'currency', value: string): Promise<CountrySearchResult> {
    try {
      const response = await fetch(API_URLS.searchByFilter(filterType, value));
      const data: Country[] = await response.json();
      return { countries: data };
    } catch (error) {
      return { countries: [], error: `Failed to fetch countries by ${filterType}` };
    }
  }

  filterCountriesByRegion(countries: Country[], region: string): Country[] {
    return countries.filter(country => country.region === region);
  }
}
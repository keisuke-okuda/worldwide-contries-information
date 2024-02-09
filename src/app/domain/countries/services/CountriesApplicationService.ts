import { CountriesService } from './CountriesService';

export class CountriesApplicationService {
  private countriesService = new CountriesService();

  async fetchAndPrepareCountries() {
    const countries = await this.countriesService.getAllCountries();
    return countries;
  }
}
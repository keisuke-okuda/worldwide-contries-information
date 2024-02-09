import React, { useEffect, useState } from 'react';
import { Country } from '@/app/domain/countries/models/Country';
import { CountriesService } from '@/app/domain/countries/services/CountriesService'; 
import styled from 'styled-components';

const countriesService = new CountriesService();

// const List = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const ListItem = styled.li`
//   margin: 10px 0;
// `;

const CountryList: React.FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchCountries = async () => {
        setLoading(true);
        try {
          const result = await countriesService.getAllCountries();
          if (result.countries) {
            setCountries(result.countries);
          } else {
            setError('Failed to fetch countries');
          }
        } catch (error) {
          setError('An error occurred while fetching countries');
        } finally {
          setLoading(false);
        }
      };
  
      fetchCountries();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div>
        <h2>Countries</h2>
        <ul>
          {countries.map((country, index) => (
            <li key={index}>
              {country.name} - {country.capital}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CountryList;
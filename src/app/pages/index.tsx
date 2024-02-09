import React from 'react';
import CountryList from '@/app/components/CountryList'; // Adjust the import path as needed

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Worldwide Countries Information App</h1>
      <CountryList />
    </div>
  );
};

export default HomePage;

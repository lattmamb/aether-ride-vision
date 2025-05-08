
import React, { useState } from 'react';
import SearchFilter from '@/components/SearchFilter';
import { vehicles } from '@/data/vehicles';

interface SearchSectionProps {
  onFilterChange: (filtered: typeof vehicles) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onFilterChange }) => {
  const handleSearch = (filters: {
    query: string;
    vehicleType: string;
    location: string;
    dateRange: string;
  }) => {
    let results = [...vehicles];

    // Filter by query (model name)
    if (filters.query) {
      const query = filters.query.toLowerCase();
      results = results.filter(
        (vehicle) => vehicle.model.toLowerCase().includes(query)
      );
    }

    // Filter by vehicle type
    if (filters.vehicleType !== 'all') {
      results = results.filter(
        (vehicle) => vehicle.type === filters.vehicleType
      );
    }

    onFilterChange(results);
  };

  return (
    <div className="container mx-auto px-4">
      <SearchFilter onSearch={handleSearch} />
    </div>
  );
};

export default SearchSection;

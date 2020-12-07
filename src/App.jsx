import React, { useEffect, useState } from 'react';
import Route from './components/Route';
import Routes from './components/Routes';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { getDataById, getResultsBySearch } from './scripts/utilities';


const App = () => {
  const [searchTerm, updateSearch] = useState('');
  const [results, updateResults] = useState([]);
  const [resultsAreLoading,updateResultsAreLoading] = useState(false);
  const [chosenId, updateChosenId] = useState(null);
  const [routes, updateRoutes] = useState([]);
  const [routesAreLoading,updateRoutesAreLoading] = useState(false);

  //get api results when the search is executed
  useEffect(() => {
    if (searchTerm) {
      updateResultsAreLoading(true);
      getResultsBySearch(searchTerm)
      .then(res => res.json())
      .then(data => {
        updateResults(data);
        updateResultsAreLoading(false);
      })
      .catch(err => console.error(err));
    }
  },[searchTerm]);

  //get api results for the selected id
  useEffect(() => {
    if (chosenId) {
      updateRoutesAreLoading(true);
      getDataById(chosenId)
      .then(res => res.json())
      .then(data => {
        updateRoutes(data);
        updateRoutesAreLoading(false);
      })
      .catch(err => console.error(err));
    }
  },[chosenId]);
  return <>
    <section className="search-wrapper">
      <SearchBar search={updateSearch}/>
      <SearchResults results={results} selectId={updateChosenId} isLoading={resultsAreLoading}/>
    </section>
    <section className="routes-wrapper">
      <Routes routes={routes} isLoading={routesAreLoading}/>
    </section>
  </>;
};

export default App;

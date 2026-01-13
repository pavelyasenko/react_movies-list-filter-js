import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Header } from './HEADER/header';

export const App = () => {
  const [query, setQuery] = useState('');

  let visibleMove = [...moviesFromServer];
  const normalizeText = text => text.trim().toLowerCase();

  if (normalizeText(query)) {
    visibleMove = moviesFromServer.filter(
      movie =>
        normalizeText(movie.title).includes(normalizeText(query)) ||
        normalizeText(movie.description).includes(normalizeText(query)),
    );
  }

  return (
    <div className="page">
      <div className="page-content">
        <Header
          filterBy={newQuery => {
            setQuery(newQuery);
          }}
        />
        <MoviesList movies={visibleMove} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};

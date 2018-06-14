import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC4i1sjCvcpcX0KaH4bjj9dlExjA1MDGac';

YTSearch({key: API_KEY, term: 'mehdizebarjadan'}, function(data) {
  console.log(data);
});

// Create a new component which should produce some HTML
const App = () => {
 return (
    <div>
      <SearchBar />
    </div>
  );
}

// Put this component in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

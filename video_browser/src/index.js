import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC4i1sjCvcpcX0KaH4bjj9dlExjA1MDGac';

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

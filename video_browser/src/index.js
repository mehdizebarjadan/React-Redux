import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyC4i1sjCvcpcX0KaH4bjj9dlExjA1MDGac';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'mehdizebarjadan'}, (videos) => {
      this.setState({ videos }); // this is simplified of: this.setState({ videos: videos });
    });
  }

  render() {
    return (
       <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
       </div>
     );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

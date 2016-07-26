//Any JS in here is automatically ran for us

// Import the React lib
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios'
// Create a component
class App extends Component {
  componentWillMount() {
    console.log('App is about to render')
  }
  render() {
    return (
      <div>
        <ImageList />
      </div>
    );
  }
};


// Render the component to the sceen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
  axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    .then(response => console.log(response));
});

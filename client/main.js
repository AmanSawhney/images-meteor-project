//Any JS in here is automatically ran for us

// Import the React lib
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

// Create a component
const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  );
};


// Render the component to the sceen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});

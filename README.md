# image-viewer-meteor

This is an example project I am creating to learn how to use Meteor.

## Demo
https://image-viewer-meteor.herokuapp.com/

## Objectives

Create a page that gives a list of images, displays these images with a title and description and allows for people to vote which image they like the best.

## Challenges

### Completed

--------------------------------------------------------------------------------

- Need to figure out how to break this app into separate components and show multiple components on the screen at once => Created a folder of components and am rendering the components in main.js by nesting them into an 'App' component
- Need a list of images to show => Created a static array of images and am using this [image](http://dummyimage.com/600x400) as a placeholder for now
- Need to figure out how to produce one "image detail" for each image we have => Made an array with the map function that creates the image detail component
- Need to figure out how to communicate important information from image list to image detail like the title => used the props function of passing in values
- Images should not be hardcoded => Using imagur api images are pulled from the internet
- Image details needs a description => Added that using props in React.js
- Users should be able to see a progress bar of upvotes and downvotes => Pulled the upvots and downVotes variables from the imgur API and built a progress bar with BootStrap

## How to run the application

> Note: you will need Meteor installed

1. Clone the project
2. Cd into the project
3. run `meteor`

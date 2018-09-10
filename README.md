# Alberto Russo - DAZN exercise

## Test - Requirements

Build a UI to search the Movie DB: The user should be able to enter some text into a search field, see and browse the results from the Movie DB.

### Limitations

* Is it possible to use any language, library or tool you feel comfortable with.
* Don't use Frameworks or state managements like (Angular or Redux)
* Don't use code generators like Create React App

### Others Goals

You are expected to apply industry best practices and techniques such as:
1. Unit testing
2. Inversion of control and dependency injection
3. Source code documentation

### Resources

* [The Movie DB](https://themoviedb.org/)
* [Api docs](http://docs.themoviedb.apiary.io/)
* [Reference only](https://github.com/cavestri/themoviedb-javascript-library/)

## Getting Started

1. Download the repository ```git clone https://github.com/albertorusso/alberto-russo-exercise.git```
2. Install all dependency ```npm i```
3. Run the server ```npm start```

Project is running at ```http://localhost:8080/``` or another port if ```8080``` is already in use.

### It is also possible
* ```npm run test``` run Unit tests
* ```npm run build``` build the ```/dist``` folder
* ```npm run watch``` watch all files and recompile the project in case one of them change.

### Technologies involved / approach

* Webpack: module bundler
* React: build the UI exercise and all project functionalities.
* Jest: Perfome Unit tests
* SCSS with BEM syntax: Build the UI styles and Layout
* Layout responsive: Mobile first approach using media query.
* Componentisation and Single Responsibility Principle.

## Folder structure

All project files are inside ```/src``` folder.

- ```/apps``` contains all react apps, for this exercise search-movies.

- ```/components``` components library that can be share cross different apps.

- ```/scripts``` it is the folder that contains all scripts use to run the application

- ```/styles``` contains the global.scss file and ```/settings``` folder to share all variables (e.g: colors and breakpoints) to all view and components.

- ```/templates/views``` contains the HTML pages, for this exercise it is not necessary implement an HTML template engine.

- ```/test``` contains the list of tests and ```/fixtures``` folder contains the mock data for the Unit test

## Further improvements
 - Implementation HTML template engine (e.g: [pug](https://www.npmjs.com/package/pug)) and refactoring the ```/templates``` folder in ```/templates/views``` and ```/templates/partial```

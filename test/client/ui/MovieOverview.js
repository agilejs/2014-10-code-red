module.exports = function() {
    'use strict';

    this.heading = element(by.css('h1'));
    this.addMovieButton = element(by.css('.btn-primary'));
    this.movieTitles = element.all(by.binding('movie.title'));
    this.movieReleaseYears = element.all(by.binding('movie.releaseYear'))

    this.open = function() {
        browser.get('/movies');
    };

    this.navigateToAddMovie = function() {
        this.addMovieButton.click();
    };
};

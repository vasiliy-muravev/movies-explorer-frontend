import React from "react";
import {moviesLimit} from "../constants/Constants";

const isNameFound = (movie, name, formData) => {
    return movie[name].toLowerCase().includes(formData.searchQuery.toLowerCase());
}

const isFoundShortMovie = (movie, formData) => {
    const isShort = movie.duration <= 40;
    const russian = isNameFound(movie, 'nameRU', formData) && isShort;
    const english = isNameFound(movie, 'nameEN', formData) && isShort;
    return russian || english;
}

const isFoundMovie = (movie, formData) => {
    const russian = isNameFound(movie, 'nameRU', formData);
    const english = isNameFound(movie, 'nameEN', formData);
    return russian || english;
}

export const isFound = (movie, formData) => {
    if (formData.shortFilms) {
        return isFoundShortMovie(movie, formData);
    } else {
        return isFoundMovie(movie, formData);
    }
}

export const getDevice = (width) => {
    let device;
    if (width >= 1024) {
        device = moviesLimit.desktop;
    } else if (width < 1024 && width >= 768) {
        device = moviesLimit.tablet;
    } else {
        device = moviesLimit.mobile;
    }

    return device;
}

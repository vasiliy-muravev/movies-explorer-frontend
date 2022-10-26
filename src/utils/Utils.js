import {DESKTOP_WIDTH, MOVIES_LIMIT, SHORT_MOVIE_LENGTH, TABLET_WIDTH} from "../constants/Constants";

const isNameFound = (movie, name, formData) => {
    return movie[name].toLowerCase().includes(formData.searchQuery.toLowerCase());
}

const isFoundShortMovie = (movie, formData) => {
    const isShort = movie.duration <= SHORT_MOVIE_LENGTH;
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

    if (width >= DESKTOP_WIDTH) {
        device = MOVIES_LIMIT.desktop;
    } else if (width < DESKTOP_WIDTH && width >= TABLET_WIDTH) {
        device = MOVIES_LIMIT.tablet;
    } else {
        device = MOVIES_LIMIT.mobile;
    }

    return device;
}

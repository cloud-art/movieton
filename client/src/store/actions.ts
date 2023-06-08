import { toggleMenu, toggleFilters } from './reducers/toggleSlice';
import { setSearch, setVisible } from './reducers/searchSlice';
import { setUser, setAuth } from './reducers/userSlice'
import { setFilms } from './reducers/filmsSlice';
import { setPage, setOffset } from './reducers/paginationSlice';
import {setFilterGenre, setFilterRating, setFilterRatingLower, setFilterRatingUpper, setFiterYear, setSortType, resetFilters} from './reducers/filterSlice'

export { toggleMenu, toggleFilters, setSearch, setVisible, setUser, setAuth, setFilms, setPage, setOffset, 
setFilterGenre, setFilterRating, setFilterRatingLower, setFilterRatingUpper, setFiterYear, setSortType, resetFilters };

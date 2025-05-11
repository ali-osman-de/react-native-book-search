import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../redux/booksSlice';
import addFavoriteReducer from '../redux/addFavoriteSlice';


export const store = configureStore({
  reducer: {
    books: booksReducer,
    favorites: addFavoriteReducer
  },
});



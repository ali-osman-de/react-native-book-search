import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadFavoritesFromStorage = createAsyncThunk(
  'favorites/loadFavoritesFromStorage',
  async () => {
    const favoritesJSON = await AsyncStorage.getItem('favorites');
    return favoritesJSON ? JSON.parse(favoritesJSON) : [];
  }
);

export const saveFavoritesToStorage = createAsyncThunk(
  'favorites/saveFavoritesToStorage',
  async (favorites) => {
      try {
          await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
      } catch (error) {
          console.error("Error saving favorites to AsyncStorage", error);
      }
  }
)

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const book = action.payload;
      if (!state.favorites.find(fav => fav.id === book.id)) {
        state.favorites.push(book);
        AsyncStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action) => {
      const bookId = action.payload;
      state.favorites = state.favorites.filter(fav => fav.id !== bookId);
      AsyncStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(loadFavoritesFromStorage.fulfilled, (state, action) => {
      state.favorites = action.payload;
    });
  },
});

export const { addFavorite, removeFavorite, setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;

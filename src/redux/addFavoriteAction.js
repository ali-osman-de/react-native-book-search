import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk } from '@reduxjs/toolkit';

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

export const loadFavoritesFromStorage = createAsyncThunk(
    'favorites/loadFavoritesFromStorage',
    async () => {
      const favoritesJSON = await AsyncStorage.getItem('favorites');
      return favoritesJSON ? JSON.parse(favoritesJSON) : [];
    }
  );

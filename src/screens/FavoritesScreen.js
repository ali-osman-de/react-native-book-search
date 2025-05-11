import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/addFavoriteSlice';
import Ionicons from '@expo/vector-icons/Ionicons';
import { loadFavoritesFromStorage } from '../redux/addFavoriteSlice'; // ✅ Thunk versiyonu kullanın

const FavoritesScreen = ({ navigation }) => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavoritesFromStorage());
  }, []);

  const handleRemoveFavorite = (bookId) => {
    dispatch(removeFavorite(bookId));
  };

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.noFavoritesText}>No favorites added yet</Text>
      ) : (
        <ScrollView>
          {favorites.map((book) => (
            <TouchableOpacity
              key={book.id}
              style={styles.bookCard}
              onPress={() => navigation.navigate('BookDetail', { book })}
            >
              <Image
                source={book.volumeInfo.imageLinks?.thumbnail
                  ? { uri: book.volumeInfo.imageLinks.thumbnail }
                  : require('../../assets/icon.png')}
                style={styles.bookImage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.bookTitle}>{book.volumeInfo.title}</Text>
                <Text style={styles.bookAuthor}>{book.volumeInfo.authors?.join(', ') || 'Unknown author'}</Text>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={(e) => {
                  e.stopPropagation(); // ✅ Tıklamayı karttan ayırır
                  handleRemoveFavorite(book.id);
                }}
              >
                <Ionicons name="trash-bin" size={24} color="#000" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default FavoritesScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 75,
    backgroundColor: '#f7f7f7',
  },
  noFavoritesText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
  bookCard: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
    elevation: 3,
    padding: 12,
    alignItems: 'center',
  },
  bookImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  removeButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
  },
});

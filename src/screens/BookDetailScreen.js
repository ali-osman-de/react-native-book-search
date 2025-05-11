import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import { addFavorite, removeFavorite } from '../redux/addFavoriteSlice';
import { saveFavoritesToStorage } from '../redux/addFavoriteAction';

const BookDetailScreen = ({ route }) => {
  const { book } = route.params;
  const { title, authors, description, imageLinks } = book.volumeInfo;
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isInFavorites = favorites.some(fav => fav.id === book.id);
    setIsFavorite(isInFavorites);
  }, [favorites, book.id]);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(book.id));
      Alert.alert('Favorilerden Sildiniz!', `${title} kitabı favorilerinizden silindi.`);
    } else {
      dispatch(addFavorite(book));
      Alert.alert('Favorilere Eklendi!', `${title} kitabı favorilerinize eklendi.`);
    }
    setIsFavorite(!isFavorite);
    saveFavoritesToStorage(favorites);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={imageLinks?.thumbnail ? { uri: imageLinks.thumbnail } : require('../../assets/icon.png')}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={handleFavorite}
        >
          <Ionicons
            name={isFavorite ? 'bookmark' : 'bookmark-outline'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{authors?.join(', ') || 'Unknown author'}</Text>

      <Text style={styles.description}>{description || 'No description available.'}</Text>
    </ScrollView>
  );
};

export default BookDetailScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 75,
    padding: 20,
    backgroundColor: '#f7f7f7',
    flexGrow: 1,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333',
  },
  author: {
    fontSize: 18,
    color: '#777',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'justify',
  },
});

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooksByGenre } from '../redux/booksSlice'

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const booksByGenre = useSelector((state) => state.books.data)

  useEffect(() => {
    Object.keys(booksByGenre).forEach((genre) => {
      if (booksByGenre[genre].status === 'idle') {
        dispatch(fetchBooksByGenre(genre))
      }
    })
  }, [dispatch])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.heroText}>Welcome back Bunny!</Text>
        </View>

        {Object.entries(booksByGenre).map(([genre, genreData]) => (
          <View key={genre} style={styles.genreSection}>
            <Text style={styles.genreTitle}>{genre}</Text>

            {genreData.status === 'loading' && (
              <ActivityIndicator size="small" color="#999" style={{ marginVertical: 12 }} />
            )}

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {genreData.items.map((book, index) => (
                <TouchableOpacity
                  key={book.id || index}
                  style={styles.bookCard}
                  onPress={() => {
                    navigation.navigate('BookDetail', { book })  // Navigasyonu buraya ekliyoruz
                  }}
                >
                  <Image
                    source={
                      book.volumeInfo?.imageLinks?.thumbnail
                        ? { uri: book.volumeInfo.imageLinks.thumbnail }
                        : require('../../assets/icon.png')
                    }
                    style={styles.bookImage}
                  />
                  <Text style={styles.bookTitle} numberOfLines={2}>
                    {book.volumeInfo?.title || 'Untitled'}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: 75,
    padding: 24,
    backgroundColor: '#fff',
  },
  textContainer: {
    marginBottom: 16,
    borderRadius: 36,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  heroText: {
    fontSize: 18,
    fontWeight: '500',
  },
  genreSection: {
    marginBottom: 32,
  },
  genreTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: "gray",
    marginBottom: 12,
  },
  bookCard: {
    marginRight: 16,
    width: 120,
  },
  bookImage: {
    width: 120,
    height: 160,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#eee',
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
})

import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async () => {
    if (!query.trim()) return

    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
      )
      const data = await response.json()
      setResults(data.items || [])
    } catch (err) {
      setError('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  const renderItem = ({ item }) => {
    const volume = item.volumeInfo
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('BookDetail', { book: item })}
      >
        <Image
          source={
            volume.imageLinks?.thumbnail
              ? { uri: volume.imageLinks.thumbnail }
              : require('../../assets/icon.png')
          }
          style={styles.thumbnail}
        />
        <View style={styles.cardContent}>
          <Text style={styles.title} numberOfLines={2}>
            {volume.title}
          </Text>
          <Text style={styles.author} numberOfLines={1}>
            {volume.authors?.join(', ') || 'Unknown author'}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search for books..."
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          autoFocus
        />

        {loading && <ActivityIndicator size="large" color="#666" style={{ marginTop: 20 }} />}

        {!loading && error && <Text style={styles.error}>{error}</Text>}

        {!loading && !error && results.length === 0 && query !== '' && (
          <Text style={styles.empty}>No results found.</Text>
        )}

        {!loading && results.length > 0 && (
          <FlatList
            data={results}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id || index.toString()}
            contentContainerStyle={{ paddingBottom: 16 }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#f1f1f1',
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fafafa',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 1,
  },
  thumbnail: {
    width: 90,
    height: 130,
    backgroundColor: '#eee',
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: '#555',
  },
  empty: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 16,
    color: '#999',
  },
  error: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 16,
    color: 'red',
  },
})

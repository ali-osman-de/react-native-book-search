import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const genres = ['Adventure', 'Mystery', 'Romance', 'Fantasy', 'Science Fiction']

const initialState = {
  data: genres.reduce((acc, genre) => {
    acc[genre] = { items: [], status: 'idle', error: null }
    return acc
  }, {})
}

export const fetchBooksByGenre = createAsyncThunk(
  'books/fetchByGenre',
  async (genre) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${genre}`)
    const data = await response.json()
    return { genre, items: data.items || [] }
  }
)

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooksForGenre: (state, action) => {
      const { genre, items } = action.payload
      state.data[genre].items = items
      state.data[genre].status = 'succeeded'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksByGenre.pending, (state, action) => {
        const genre = action.meta.arg
        state.data[genre].status = 'loading'
        state.data[genre].error = null
      })
      .addCase(fetchBooksByGenre.fulfilled, (state, action) => {
        const { genre, items } = action.payload
        state.data[genre].items = items
        state.data[genre].status = 'succeeded'
      })
      .addCase(fetchBooksByGenre.rejected, (state, action) => {
        const genre = action.meta.arg
        state.data[genre].status = 'failed'
        state.data[genre].error = action.error.message
      })
  }
})

export const { setBooksForGenre } = booksSlice.actions
export default booksSlice.reducer

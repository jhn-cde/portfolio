import { configureStore, createSlice } from '@reduxjs/toolkit';

// theme slice
export interface ThemeState{
  darkTheme: boolean
}

const initialState: ThemeState = {
  darkTheme: false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.darkTheme = action.payload
    }
  }
})

// store
const store = configureStore({
  reducer: {
    theme: themeSlice.reducer
  }
})

export default store

export const selectTheme = (state: ReturnType<typeof store.getState>) => state.theme.darkTheme
export const { changeTheme } = themeSlice.actions

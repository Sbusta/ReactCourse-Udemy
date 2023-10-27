import { configureStore } from '@reduxjs/toolkit'
import { pokemonSlice, counterSlice } from './slices'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
})
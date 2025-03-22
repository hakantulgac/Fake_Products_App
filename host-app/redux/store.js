import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './services/productsApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import basketSlice from './features/basketSlice'
import drawerOpenSlice from './features/drawerOpenSlice'

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        basket: basketSlice,
        drawerOpen: drawerOpenSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)
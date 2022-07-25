import { configureStore } from "@reduxjs/toolkit";
import homeDataReducer  from './features/homeDataSlices'

export const store = configureStore({
    reducer: {
        homeInfo: homeDataReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import {configureStore, createSlice, createStore} from '@reduxjs/toolkit';

const initialState = {
    kinoDraws: [],
    isLoading: false,
    error: null
}

const kinoSlice = createSlice({
    name: 'kino',
    initialState,
    reducers: {
        addKinoDraws(state, action) {
            state.kinoDraws.push(...action.payload);
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
});

const store = configureStore({
    reducer: {
        kino: kinoSlice.reducer
    },
    middleware: []
});

export default store;
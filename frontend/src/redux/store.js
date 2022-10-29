import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './itemSlice';
import addItemReducer from './addItemSlice';

export default configureStore({
    reducer: {
        item: itemReducer,
        addItem : addItemReducer
    },
});
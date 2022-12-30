import { configureStore } from "@reduxjs/toolkit";

import productsReducer from '../feature/productsSlice'
import {productsApi} from '../feature/productApi'
import cartReducer from "../feature/cartSlice";


const store = configureStore({
    reducer: {
      products: productsReducer,
      cart: cartReducer,
      [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });

  export default store;
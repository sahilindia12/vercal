import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './sli';
import { setupListeners } from '@reduxjs/toolkit/query';


export const store = configureStore({
  reducer: {
    counter: counterSlice,
    // [api.reducerPath]: api.reducer,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);

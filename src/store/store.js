import { configureStore, combineReducers } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import productReducer from './productSlice'
//BOILER PLATE START
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  
  
  //CONFIG FOR THE PERSISTING STORAGE/REDUCER
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  //BOILERPLATE END

  //COMBINE TWO REDUCERS INTO ONE USING COMBINE REDUCERS FUNCTION
  const rootReducer = combineReducers({user:userReducer, product: productReducer})
  
  //CREATE A REDUCER OUT OF PRE-EXISTING REDUCER AND THE CONFIG ABOVE, THAT PERSISTS BEYOND RELOADS
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer:  persistedReducer,
  //BOILER PLATE FOR PERSISTEDREDUCER
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

//EXPORTING A PERSISTING STORAGE INSTEAD OF NON-PERSISTING
export let persistor = persistStore(store)
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../Redux/root-reduser';

const store = configureStore({
  reducer: rootReducer,
});
export default store;


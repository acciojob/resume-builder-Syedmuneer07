import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './reducer';

const store = configureStore({
  reducer: resumeReducer
});

export default store;

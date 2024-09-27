import { configureStore } from '@reduxjs/toolkit';
import studentPortalReducer from './features/studentPortal/studentPortalSlice'; // Import reducer

const store = configureStore({
  reducer: {
    studentPortal: studentPortalReducer, // Thêm studentPortal reducer vào store
  },
});

export default store;

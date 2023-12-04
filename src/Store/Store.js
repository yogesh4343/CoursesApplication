import { configureStore } from "@reduxjs/toolkit";
import CoursesSlice from "./Slice/CoursesSlice";

const store = configureStore({
    reducer: {
        Course : CoursesSlice,
    },
  });
  
  export default store;
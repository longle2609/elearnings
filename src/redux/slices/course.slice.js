import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  currCourse: null,
  category: null,
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    handleSetCourses: (state, action) => {
      state.courses = action.payload;
    },
    handleSetCurrCourse: (state, action) => {
      state.currCourse = action.payload;
    },
    handleCategoryName: (state, action) => {
      console.log(action);
    },
  },
  handleSetCurrCourse: (state, action) => {
    state.currCourse = action.payload;
  },
  handleGetAllCourses: (state, action) => {
    state.allCourses = action.payload;
  },
});

export const {
  handleSetCourses,
  handleSetCurrCourse,
  handleCategoryName,
  handleGetAllCourses,
} = courseSlice.actions;

export default courseSlice.reducer;

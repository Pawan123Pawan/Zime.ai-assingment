import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    filteredData: [],
    selectedTags: [],
    allTags: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    searchText: "",
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    setSelectedTags: (state, action) => {
      state.selectedTags = action.payload;
    },
    setAllTags: (state, action) => {
      state.allTags = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const {
  setData,
  setFilteredData,
  setSelectedTags,
  setPagination,
  setAllTags,
  setSearchText,
} = postsSlice.actions;
export default postsSlice.reducer;

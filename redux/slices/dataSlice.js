import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: ["Pune"],
  selectedLocation: "Pune",
  fetchedTime: new Date().toString(),
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
    addLocation: (state, action) => {
      state.locations = [...state.locations, action.payload];
    },
    deleteLocation: (state, action) => {
      state.locations = state.locations.filter(
        (location) => location != action.payload
      );
    },
    updateFetchedTime: (state, action) => {
      state.fetchedTime = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateLocation,
  addLocation,
  deleteLocation,
  updateFetchedTime,
} = dataSlice.actions;

export default dataSlice.reducer;

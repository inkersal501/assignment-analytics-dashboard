import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showFilterModal: false,
    filterDates : {
        from : "Jul 05", 
        to : "Jul 11, 2025", 
    }, 
    country: {id: "us", name: "United States"}, 
};
const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        updateShowFilterModal : (state, action) => {
            state.showFilterModal = action.payload;
        },
        updateFilterDates : (state, action) => {
            state.filterDates = action.payload;
        },
        updateCountry : (state, action) => {
            state.country = action.payload;
        },
    }
}); 

export const {updateShowFilterModal, updateFilterDates, updateCountry} = appSlice.actions;
export default appSlice.reducer;
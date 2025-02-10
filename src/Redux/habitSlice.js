import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "habits",
  initialState: [
      {date:"7/2/4",studyRev:"complete",studyFut:"incompleter",programLect:"pending",programProject:"complete"},
      {date:"8/2/4",studyRev:"complete",studyFut:"incompleter",programLect:"pending",programProject:"complete"},
    ], // Initial state
  reducers: {
    addHabit: (state)=>{
        // console.log(initialState);
        console.log("hi");
        // return initialState;
    },
    removeHabit: (state)=>{
        console.log("add habit");
    },
    updateHabit: (state)=>{
        console.log("update habit");
    }
  },
});

export const { updateHabit, removeHabit, addHabit } = counterSlice.actions;
export default counterSlice.reducer;
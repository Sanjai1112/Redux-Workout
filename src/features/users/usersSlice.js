import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    name: "Sanjai"
  },
  {
    id: "2",
    name: "Jana"
  },
  {
    id: "3",
    name: "Ram"
  },
  {
    id: "4",
    name: "Dinesh"
  }
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
});

export default usersSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  isNavOpen: false,
  userPhoto: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setNavOpen(state, action) {
      state.isNavOpen = action.payload;
    },
    setUserPhoto(state, action) {
      state.userPhoto = action.payload;
    },
  },
});

export const { setUser, setLoading, setNavOpen, setUserPhoto } =
  profileSlice.actions;
export default profileSlice.reducer;

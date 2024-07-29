import { TrackType } from "@/types/trackstypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType =  {
  currentTrack: null | TrackType;
}

const initialState: PlaylistStateType = {
  currentTrack: null,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
    },
  },
});

export const { setCurrentTrack } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;

// 32:24 
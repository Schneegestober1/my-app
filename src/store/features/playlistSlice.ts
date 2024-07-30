import { TrackType } from "@/types/trackstypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType =  {
  currentTrack: null | TrackType;
  playlist: TrackType[];
}

const initialState: PlaylistStateType = {
  currentTrack: null,
  playlist: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<{track: TrackType, tracksData: TrackType[ ]}>) => {
      state.currentTrack = action.payload.track;
      state.playlist = action.payload.tracksData;
    },
  },
});

export const { setCurrentTrack } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;


import { TrackType } from "@/types/trackstypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType =  {
  currentTrack: null | TrackType;
  playlist: TrackType[];
  shuffledPlaylist: TrackType[];
  isShuffled: boolean;
  isPlaying: boolean;
}

const initialState: PlaylistStateType = {
  currentTrack: null,
  playlist: [],
  shuffledPlaylist: [],
  isShuffled: false,
  isPlaying: false,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<{track: TrackType, tracksData: TrackType[]}>) => {
      state.currentTrack = action.payload.track;
      state.playlist = action.payload.tracksData;
      state.shuffledPlaylist = [...action.payload.tracksData].sort(() => 0.5 - Math.random());
    },
    setNextTrack: (state) => {
      const playlist = state.isShuffled ? state.shuffledPlaylist : state.playlist;
      const currentTrackIndex = playlist.findIndex((track) => track.id === state.currentTrack?.id);
      const newTrack = playlist[currentTrackIndex + 1];
      if(newTrack) {
        state.currentTrack = newTrack;
      }
    },
    setPrevTrack: (state) => {
      const playlist = state.isShuffled ? state.shuffledPlaylist : state.playlist;
      const currentTrackIndex = playlist.findIndex((track) => track.id === state.currentTrack?.id);
      const newTrack = playlist[currentTrackIndex - 1];
      if(newTrack) {
        state.currentTrack = newTrack;
      }
    },
    setIsShuffled: (state, action: PayloadAction<boolean>) => {
      state.isShuffled = action.payload;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setCurrentTrack, setNextTrack, setPrevTrack, setIsShuffled, setIsPlaying } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;


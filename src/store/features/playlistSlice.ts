import { fetchFavoriteTracks } from "@/api/tracks";
import { Tokens } from "@/types/tokens";
import { TrackType } from "@/types/trackstypes";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getFavoriteTrack = createAsyncThunk("playlist/getFavoriteTracks", async ({ access, refresh }: Tokens) => {
  const favoriteTracks = fetchFavoriteTracks({ access, refresh });
  return favoriteTracks;
}
);

type PlaylistStateType =  {
  currentTrack: null | TrackType;
  playlist: TrackType[];
  shuffledPlaylist: TrackType[];
  isShuffled: boolean;
  isPlaying: boolean;
  favoritePlaylist: TrackType[];
  error: string;
  initialPlaylist: TrackType[];
  filteredPlaylist: TrackType[];
  filterOptions: {
    author: string[],
    genre: string[],
    sort: string,
    searchString: string,
  };
  currentPlaylist: TrackType[];
  initialTracks: TrackType[];
}

const initialState: PlaylistStateType = {
  currentTrack: null,
  playlist: [],
  shuffledPlaylist: [],
  isShuffled: false,
  isPlaying: false,
  favoritePlaylist: [],
  error: "",
  initialPlaylist: [],
  filteredPlaylist: [],
  filterOptions: {
    author: [],
    genre: [],
    sort: "по умолчанию",
    searchString: "",
  },
  currentPlaylist: [],
  initialTracks: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.currentPlaylist = action.payload;
      state.filteredPlaylist = action.payload;
      state.initialTracks = action.payload;
    },
    setInitialPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.initialPlaylist = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<{track: TrackType, tracksData: TrackType[]}>) => {
      state.currentTrack = action.payload.track;
      state.playlist = action.payload.tracksData;
      state.shuffledPlaylist = [...action.payload.tracksData].sort(() => 0.5 - Math.random());
    },
    setNextTrack: (state) => {
      const playlist = state.isShuffled ? state.shuffledPlaylist : state.playlist;
      const currentTrackIndex = playlist.findIndex((track) => track._id === state.currentTrack?._id);
      const newTrack = playlist[currentTrackIndex + 1];
      if(newTrack) {
        state.currentTrack = newTrack;
      }
    },
    setPrevTrack: (state) => {
      const playlist = state.isShuffled ? state.shuffledPlaylist : state.playlist;
      const currentTrackIndex = playlist.findIndex((track) => track._id === state.currentTrack?._id);
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
    setDislikeTrack: (state, action: PayloadAction<TrackType>) => {
      const index = state.favoritePlaylist.findIndex(
        (track) => track._id === action.payload._id
      );
      state.favoritePlaylist.splice(index, 1);
    },
    setLikeTrack: (state, action: PayloadAction<TrackType>) => {
      state.favoritePlaylist.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        getFavoriteTrack.fulfilled,
        (state, action: PayloadAction<TrackType[]>) => {
          state.favoritePlaylist = action.payload;
        }
      )
      .addCase(getFavoriteTrack.rejected, (state, action) => {
        if (action.error.message) {
          state.error = action.error.message;
          console.error("Error:", action.error.message);
        }
      });
  },
});

export const { setCurrentTrack, setNextTrack, setPrevTrack, setIsShuffled, setIsPlaying, setDislikeTrack, setLikeTrack, setCurrentPlaylist, setInitialPlaylist  } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;

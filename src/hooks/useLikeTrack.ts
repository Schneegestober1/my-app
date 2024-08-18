import { dislikeTrack, likeTrack } from "@/api/tracks";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setDislikeTrack, setLikeTrack } from "@/store/features/playlistSlice";
import { TrackType } from "@/types/trackstypes";

const useLikeTrack = (track: TrackType) => {
    // ТУта надо делать 
  const {tokens} = useAppSelector((state) => state.user)
  
  const trackId = track.id;
  const dispatch = useAppDispatch();
  const likedTracks = useAppSelector((state) => state.playlist.favoritePlaylist);
  const isLiked = !!likedTracks.find(
    (track: TrackType) => track.id === trackId
  );

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!tokens?.access || !tokens?.refresh) return alert("Вы не авторизованы");

    const action = isLiked ? dislikeTrack : likeTrack;

    try {
      await action({ trackId, access: tokens.access, refresh: tokens.refresh });
      if (isLiked) {
        dispatch(setDislikeTrack(track));
      } else {
        dispatch(setLikeTrack(track));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { handleLike, isLiked };
};

export default useLikeTrack;
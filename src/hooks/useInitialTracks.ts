
import { getFavoriteTrack } from "@/store/features/playlistSlice"
import { useAppSelector } from "@/utils/hooks"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const useInitialLikedTracks = () => {
    const dispatch = useDispatch()
    const tokens = useAppSelector((state) => state.user.tokens)
    useEffect(() => {
        if(tokens?.access){
            dispatch(getFavoriteTrack({ access: tokens.access, refresh: tokens.refresh }))
        }
    },[dispatch, tokens])
}
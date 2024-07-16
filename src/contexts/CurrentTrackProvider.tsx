import { TrackType } from "@/types/trackstypes";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type CurrentTrackContextValue = {
    currentTrack: TrackType | null;
    setCurrentTrack: Dispatch<SetStateAction <TrackType | null>>
}

const CurrentTrackContext = createContext<CurrentTrackContextValue | null>(null)

type CurrentTrackProviderProps = {
    children: ReactNode,
}

export function CurrentTrackProvider({children}: CurrentTrackProviderProps) {
    const [currentTrack, setCurrentTrack] = useState<TrackType | null>(null)
    return <CurrentTrackContext.Provider value={{currentTrack, setCurrentTrack}}>{children}</CurrentTrackContext.Provider>
} 

export function useCurrentTrack(){
    return useContext(CurrentTrackContext)
}
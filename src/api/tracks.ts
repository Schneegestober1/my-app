import { fetchWithAuth } from "@/utils/fetchWithauth";

const BASE_URL = "https://webdev-music-003b5b991590.herokuapp.com";
const TRACK_URL = "https://webdev-music-003b5b991590.herokuapp.com/catalog/track/";

export async function getTracks () {
    const res = await fetch(TRACK_URL + "all/")
    if(!res.ok) {
        throw Error(res.statusText)
    }
    return res.json()
}

export async function likeTrack({trackId, access, refresh,}: {trackId: number; access: string; refresh: string;}) {
    const res = await fetchWithAuth(
      TRACK_URL + `${trackId}/favorite/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access}`,
        },
      },
      refresh
    );
  
    const response = await res.json();
  
    return response.data;
  }

  export async function dislikeTrack({trackId, access, refresh,}: {trackId: number; access: string; refresh: string;}) {
    const res = await fetchWithAuth(
      TRACK_URL + `${trackId}/favorite/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access}`,
        },
      },
      refresh
    );
  
    const response = await res.json();
  
    return response.data;
  }

  export async function fetchFavoriteTracks({access, refresh,}: {access: string;refresh: string;}) {
    const res = await fetchWithAuth(
      TRACK_URL + `favorite/all/`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access}`,
        },
      },
      refresh
    );
  
    const response = await res.json();
  
    return response.data;
  }
  
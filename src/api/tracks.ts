const API_URL = 'https://skypro-music-api.skyeng.tech/catalog/track/all/'

export async function getTracks () {
    const res = await fetch(API_URL)
    if(!res.ok) {
        throw Error(res.statusText)
    }
    console.log(11111111111111);
    return res.json()

}


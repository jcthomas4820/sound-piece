import axios from 'axios';
import { getArtistIDEndpoint, getArtistTopTracksEndpoint, GET_ARTIST_ID } from "../utils/endpoints";

export default async function handler(req, res) {
    
    const auth = req.headers['authorization']
    const artistName = req.headers['artist-name']

    const config = {
        headers: {
            Authorization: auth,
            'Content-Type': 'application/json',
        }
    }

    try{
        const artistResponse = await axios.get(getArtistIDEndpoint(artistName), config)
        const artistData = artistResponse.data
        const name = artistData.artists.items[0].name
        const img = artistData.artists.items[0].images[0].url
        const id = artistData.artists.items[0].id
        const uri = artistData.artists.items[0].uri

        const tracksResponse = await axios.get(getArtistTopTracksEndpoint(id), config)
        const tracksData = tracksResponse.data.tracks
        const tracks = []

        tracksData.forEach((track) => {
            tracks.push({
                name: track.name,
                url: track.preview_url,
                id: track.id,
                uri: track.uri,
                album: {
                    name: track.album.name,
                    img: track.album.images[0].url,
                },
            })
        })

        const artist = {
            name: name,
            img: img,
            id: id,
            uri: uri,
            tracks: tracks,
        }

        res.status(200).json({artist: artist})

    } catch(error){
        console.log('error response!', error)
    }

}
  
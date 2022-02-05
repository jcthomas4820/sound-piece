import axios from "axios"
import { getAddToPlaylistEndpoint, getCreatePlaylistEndpoint } from "../utils/endpoints"

export default async function handler(req, res) {
    
    const auth = req.headers['authorization']
    const playlistName = req.body['playlistName']
    const userID = req.body['userID']
    const trackURIs = req.body['trackURIs']
    const config = {
        headers: {
            Authorization: auth,
            'Content-Type': 'application/json',
        }
    }

    try{
        const createPlaylistBody = {
            name: playlistName,
            description: 'Created with SoundPiece',
            public: false,
        }
        const createPlaylistResponse = await axios.post(getCreatePlaylistEndpoint(userID), createPlaylistBody, config)
        const playlistID = createPlaylistResponse.data.id
        const addToPlaylistBody = {
            uris: trackURIs,
            position: 0,
        }
        const addToPlaylistResponse = await axios.post(getAddToPlaylistEndpoint(playlistID), addToPlaylistBody, config)

        //  TODO - send success message
        res.status(200).json({playlistSnapshotID: addToPlaylistResponse.data})
    }
    catch(error){
        console.log('error response!', error)
    }
}
import { useState } from "react"
import { useSelector } from "react-redux"
import { selectPlaylistArtists } from "../redux/slices/music.slice"
import { getUniqueID } from "../utils/getUniqueID"

export default function Playlist(){

    const [open, setOpen] = useState(false)
    const playlistArtists = useSelector(selectPlaylistArtists)
    const flipOpen = () => setOpen(!open)

    return (
        !open ? 
            <button onClick={flipOpen}>Playlist</button> 
            :   <> 
                    {playlistArtists.map(artist => <li key={getUniqueID()}>{artist}</li>)}
                    <button onClick={flipOpen}>Close</button> 
                </>
    )
}
import { useState } from "react"
import { useSelector } from "react-redux"
import { selectPlaylistArtists } from "../redux/slices/music.slice"
import { getUniqueID } from "../utils/getUniqueID"

function PlaylistModal(props){

    const playlistArtists = useSelector(selectPlaylistArtists)
    const onGenerateClick = () => console.log('generating playlist...')

    return(
        <> 
            {playlistArtists.map(artist => <li key={getUniqueID()}>{artist}</li>)}
            <button onClick={onGenerateClick}>Generate</button>
            <br />
            <button onClick={props.flipOpen}>Close</button> 
        </>
    )
}

function PlaylistButton(props){
    return(
        <button onClick={props.flipOpen}>Playlist</button> 
    )
}

export default function Playlist(){

    const [open, setOpen] = useState(false)
    const flipOpen = () => setOpen(!open)

    return (
        !open ? <PlaylistButton flipOpen={flipOpen}/> : <PlaylistModal flipOpen={flipOpen} />
    )
}
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { generatePlaylist, selectPlaylistArtists } from "../redux/slices/music.slice"
import { getUniqueID } from "../utils/getUniqueID"

function PlaylistModal(props){

    const dispatch = useDispatch()

    const playlistArtists = useSelector(selectPlaylistArtists)
    const onGenerateClick = () => dispatch(generatePlaylist())

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
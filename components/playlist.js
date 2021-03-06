import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { generatePlaylist, selectPlaylistArtists } from "../redux/slices/music.slice"
import { getUniqueID } from "../utils/getUniqueID"

function PlaylistModal(props){

    const dispatch = useDispatch()

    const [playlistName, setPlaylistName] = useState('')
    const playlistArtists = useSelector(selectPlaylistArtists)

    const onChange = (e) => setPlaylistName(e.target.value)
    const onGenerateClick = () => dispatch(generatePlaylist(playlistName))

    return(
        <> 
            <input value={playlistName} onChange={onChange}></input>
            {playlistArtists.map(artist => <li key={getUniqueID()}>{artist.name}</li>)}
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
        <div style={{alignSelf: 'start'}}>
            {!open ? <PlaylistButton flipOpen={flipOpen}/> : <PlaylistModal flipOpen={flipOpen} />}
        </div>
    )
}
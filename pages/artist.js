import { useDispatch, useSelector } from "react-redux"
import { addToPlaylist, selectArtist } from "../redux/slices/music.slice"
import Image from 'next/image'
import Playlist from "../components/playlist"

export default function Artist(){

    const dispatch = useDispatch()

    const artist = useSelector(selectArtist)
    const onAddClick = () => dispatch(addToPlaylist())

    return(
        <>
            <h1>Artist Page</h1>
            <Image 
                src={artist.img}
                alt={'artist-image'}
            />
            <br />
            <span>{artist.name}</span>
            <br />
            <span>{artist.description}</span>
            <br />
            <button onClick={onAddClick}>Add</button>
            <br />
            <Playlist />
        </>
    )
}
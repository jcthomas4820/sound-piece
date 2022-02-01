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
            <div alignSelf>
                <Image 
                    src={artist.img}
                    alt={'artist-image'}
                />
            </div>
            <span>{artist.name}</span>
            <button onClick={onAddClick} style={{alignSelf: 'start'}}>Add</button>
        </>
    )
}
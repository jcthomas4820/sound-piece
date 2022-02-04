import { useDispatch, useSelector } from "react-redux"
import { addToPlaylist, selectArtist } from "../redux/slices/music.slice"
import Image from 'next/image'
import Playlist from "../components/playlist"

export default function Artist(){

    const dispatch = useDispatch()

    const artist = useSelector(selectArtist)
    const onAddClick = () => dispatch(addToPlaylist())

    return(
        <div style={{alignSelf: 'start'}}>
            <Image 
                src={artist.img}
                alt={'artist-image'}
                width={500}
                height={500}
            />
            <br />
            <span>{artist.name}</span>
            <br />
            <button onClick={onAddClick}>Add</button>
        </div>
    )
}
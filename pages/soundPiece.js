import Playlist from "../components/playlist";
import Search from "../components/search";
import Artist from "./artist";

export default function SoundPiece(){

    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Search />
            <Artist />
            <Playlist />
        </div>
    )
}
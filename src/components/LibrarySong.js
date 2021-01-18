import React from 'react';
import { playAudio } from "../util";

const LibrarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying}) => {

    const songSelectHandler = () => {
        //work on selectedSong not working
        const selectedSong = songs.filter((state) => state.id === id);
        console.log(id);
        setCurrentSong(selectedSong[0]);
        //check isPlaying
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then((audio) => {
                    audioRef.current.play();
                });
            }
        }
    };

    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img  alt={song.name} src={song.cover} alt="song-cover"></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;
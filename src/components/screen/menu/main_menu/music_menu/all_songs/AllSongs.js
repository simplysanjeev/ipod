import React from 'react';
import Poster from './images/Poster.jpg';
class AllSongs extends React.Component {
    // Defining and Returning AllSongs Component
    render() {
        return (
            <div className="all-songs">
                <div id="main">
                    <div id="image">
                        <img src={Poster} alt="" />
                    </div>
                    <div id="player">
                        <div id="song-title">Demo</div>
                        <div id="seek-bar" ref={(musicPlayer) => { this.musicPlayer = musicPlayer }}>
                            <div id="fill"></div>
                            <div id="handle"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllSongs;
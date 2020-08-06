import React from 'react';
// Importing Various Components to be rendered on Screen
import MainMenu from './menu/main_menu/MainMenu';
import CoverFlow from './menu/main_menu/cover_flow/CoverFlow';
import MusicMenu from './menu/main_menu/music_menu/MusicMenu';
import Games from './menu/main_menu/games/Games';
import Setting from './menu/main_menu/settings/Settings';
import AllSongs from './menu/main_menu/music_menu/all_songs/AllSongs';
import Artists from './menu/main_menu/music_menu/artists/Artists';
import Albums from './menu/main_menu/music_menu/albums/Albums';

class Screen extends React.Component {
    render() {
        const { currentTab, tabs } = this.props.state;
        let componentToBeRendered;
        // Selecting the Currently Active Component on basis of 'currentTab'
        switch (currentTab) {
            // Passing MainMenu using ref={(menu) => { this.menu = menu }}
            case tabs.MENU: componentToBeRendered = <MainMenu ref={(menu) => { this.menu = menu }} />; break;
            case tabs.COVER_FLOW: componentToBeRendered = <CoverFlow />; break;
            // Passing MusicMenu using ref={(menu) => { this.menu = menu }}
            case tabs.MUSIC: componentToBeRendered = <MusicMenu ref={(menu) => { this.menu = menu }} />; break;
            case tabs.GAMES: componentToBeRendered = <Games />; break;
            case tabs.SETTINGS: componentToBeRendered = <Setting />; break;
            case tabs.ALL_SONGS: componentToBeRendered = <AllSongs ref={(AllSongs) => { this.AllSongs = AllSongs }} />; break;
            case tabs.ARTISTS: componentToBeRendered = <Artists />; break;
            case tabs.ALBUMS: componentToBeRendered = <Albums />; break;
            // Passing MainMenu using ref={(menu) => { this.menu = menu }} and By Default 'rendering MainMenu' component
            default: componentToBeRendered = <MainMenu ref={(menu) => { this.menu = menu }} />;
        }

        return (
            <div className="screen">
                {/* Rendering Selected Component */}
                {componentToBeRendered}
            </div>
        );
    }
}
export default Screen;
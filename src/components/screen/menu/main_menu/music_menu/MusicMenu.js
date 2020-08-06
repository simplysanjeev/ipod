import React from 'react';
class MusicMenu extends React.Component {
    // Defining and Returning MusicMenu Component
    render() {
        return (
            <div className="menu" ref={(menu) => { this.menu = menu }}>
                <div className="menu-header">Music</div>
                <div className="menu-item menu-item-active" data-value="all-songs">All Songs</div>
                <div className="menu-item" data-value="artists">Artists</div>
                <div className="menu-item" data-value="albums">Albums</div>
            </div>
        );
    }
}

export default MusicMenu;
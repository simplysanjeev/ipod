import React from 'react';
class MainMenu extends React.Component {
    // Defining and Returning MainMenu Component
    render() {
        return (
            <div className="menu" ref={(menu) => { this.menu = menu }} >
                <div className="menu-header" >iPod.js</div>
                <div className="menu-item menu-item-active" data-value="cover-flow">Cover Flow</div>
                <div className="menu-item" data-value="music">Music</div>
                <div className="menu-item" data-value="games">Games</div>
                <div className="menu-item" data-value="settings">Settings</div>
            </div>
        );
    }
}

export default MainMenu;
import React from 'react';

class ControlWheel extends React.Component {
    // Defining and Returning MainMenu Component
    render() {
        return (
            <div className="control-wheel-container">
                {/* Creating 'OuterWheel' Component and Passing referece to 'App' Component */}
                <div className="outer-wheel" ref={(outerWheel) => { this.outerWheel = outerWheel }}>
                    {/* Creating 'InnerWheel' */}
                    <div className="inner-wheel" onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                        {/* Creating 'SelectWheel' */}
                        <button className="wheel" ref={(selectWheel) => { this.selectWheel = selectWheel }}
                            onDragStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        ></button>
                    </div>
                    {/* Creating Buttons */}
                    {/* Menu Button */}
                    <button className="button up">MENU</button>
                    {/* Play Pause Button */}
                    <button className="button down"><i className="fas fa-play"></i><i className="fas fa-pause"></i></button>
                    {/* fast Backward Button */}
                    <button className="button left"><i className="fas fa-fast-backward"></i></button>
                    {/* Fast Forward Button */}
                    <button className="button right"><i className="fas fa-fast-forward"></i></button>
                </div>
            </div>
        );
    }
}

export default ControlWheel;
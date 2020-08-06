import React from 'react';
import './App.css';
// Import Control Wheel
import ControlWheel from './components/controlwheel/ControlWheel';
// Importing Screen
import Screen from './components/screen/Screen';
// Importing ZingTouch to rotation feature of Control Wheel
import ZingTouch from 'zingtouch';

class App extends React.Component {
  constructor() {
    super();
    // Using state to store Various Options of Tab and Current Tab
    this.state = {
      tabs: {
        MENU: "menu",
        COVER_FLOW: "cover-flow",
        MUSIC: "music",
        GAMES: "games",
        SETTINGS: "settings",
        ALL_SONGS: "all-songs",
        ARTISTS: "artists",
        ALBUMS: "albums"
      },
      currentTab: "menu",
      songs: {
        songsList: [],
        songIndex: 0
      }
    }
    this.play = false;
  }
  componentDidMount() {
    let ref = this;
    // Creating Active Region For using ZingTouch on that Reason 
    let activeRegion = new ZingTouch.Region(this.controlWheel.outerWheel);
    this.activeRegion = activeRegion;
    // Binding rotate gesture with the ControlWheel
    activeRegion.bind(this.controlWheel.outerWheel, 'rotate', function (event) {
      // Getting Differnece of distance from last Postion
      let changeOfDistance = event.detail.distanceFromLast;
      // Converting the distance from radian to degree
      let degree = (180 * 7 * event.detail.distanceFromLast) / 22;
      let lastActiveTab = 0;
      //Check if Currnetly we are on one of the Menu Screen ie. Music Menu or Main Menu
      if (ref.screen.menu != null) {
        // Finding the Currentl Active List Item
        for (let i = 1; i < ref.screen.menu.menu.children.length; i++) {
          if (ref.screen.menu.menu.children[i].classList.contains("menu-item-active")) {
            lastActiveTab = i;
            break;
          }
        }
        //Changing active Menu Item to next if change in angle is positive
        if (changeOfDistance >= 0 && degree >= 90) {
          console.log("Positive");
          if (lastActiveTab < ref.screen.menu.menu.children.length - 1) {
            ref.screen.menu.menu.children[lastActiveTab].classList.remove("menu-item-active");
            ref.screen.menu.menu.children[lastActiveTab + 1].classList.add("menu-item-active");
          }
        } else if (changeOfDistance < 0 && Math.abs(degree) >= 90) {
          // Changing active Menu Item to previous if change in angle is negative
          console.log("Negative");
          if (lastActiveTab > 1) {
            ref.screen.menu.menu.children[lastActiveTab].classList.remove("menu-item-active");
            ref.screen.menu.menu.children[lastActiveTab - 1].classList.add("menu-item-active");
          }
        }
      }
    });
    // Adding EventListener on 'click' on center wheel
    this.controlWheel.selectWheel.addEventListener('click', function (event) {
      console.log("Button clicked");
      // Check if Currnetly we are on one of the Menu Screen ie. Music Menu or Main Menu
      if (ref.screen.menu) {
        let lastActiveTab = 0;
        // Finding the Currentl Active List Item
        for (let i = 1; i < ref.screen.menu.menu.children.length; i++) {
          if (ref.screen.menu.menu.children[i].classList.contains("menu-item-active")) {
            lastActiveTab = i;
            break;
          }
        }
        let currentTab = ref.screen.menu.menu.children[lastActiveTab].getAttribute('data-value');
        // Changing State of current Tab to Currently Active List Item
        ref.setState({ currentTab: currentTab });
      }
    })
    let menuButton = this.controlWheel.outerWheel.children[1];
    // Adding Click Event Listener to Menu Button
    menuButton.addEventListener('click', function (event) {
      ref.setState({ currentTab: "menu" });
    });

    let Pre = this.controlWheel.outerWheel.children[3];
    let Post = this.controlWheel.outerWheel.children[4];
    let PlayPause = this.controlWheel.outerWheel.children[2];
    // Creating Audio Element
    let song = new Audio();
    song.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg";
    song.addEventListener('timeupdate', function () {
      let position = song.currentTime / song.duration;
      if (ref.screen.AllSongs) {
        ref.screen.AllSongs.musicPlayer.children[0].style.width = position * 100 + '%';
        ref.screen.AllSongs.musicPlayer.children[1].style.left = position * 100 + '%';
      }
    });

    // Play Pause Button
    PlayPause.addEventListener('click', function (event) {
      if (ref.screen.AllSongs) {
        console.log('Play Pause');
        console.log(ref.screen.AllSongs.musicPlayer.children[0]);
        console.log(ref.screen.AllSongs.musicPlayer.children[1]);
        if (ref.play === false) {
          song.play();
          ref.play = true;
        } else {
          song.pause();
          ref.play = false;
        }

      }
    });
    // fast backward
    Pre.addEventListener('click', function (event) {
      if (ref.screen.AllSongs) {
        console.log('Pre');
        console.log(ref.screen.AllSongs.musicPlayer);
      }
    });
    // fast forward
    Post.addEventListener('click', function (event) {
      if (ref.screen.AllSongs) {
        console.log('Post');
        console.log(ref.screen.AllSongs.musicPlayer);
      }
    });
  }
  render() {
    return (
      <div className="App">
        <div className="ipod">
          {/* Mounting Screen Component TO IPOD */}
          <Screen ref={(screen) => { this.screen = screen }} state={this.state} />
          {/* Mounting ControlWheel Component TO IPOD */}
          <ControlWheel ref={(controlWheel) => { this.controlWheel = controlWheel }} />
        </div>
      </div>
    );
  }
}
// Exportig App
export default App;

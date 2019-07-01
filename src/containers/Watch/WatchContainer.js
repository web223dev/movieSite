import React, { Component } from 'react';
import ReactJWPlayer from 'react-jw-player';

const playlist = [{
    file: 'https://content.jwplatform.com/videos/pNLwBC31-HpVzMx7u.mp4',
    image: 'https://content.jwplatform.com/thumbs/pNLwBC31-1280.jpg',
    tracks: [{
        label: 'English',
        kind: 'captions',
        'default': true
    }],
    description: "POV Surfing View Empty Ocean Waves Crashing"    
},
{
    file: 'https://cdn.jwplayer.com/videos/l76Ij09F-8yQ1cYbs.mp4',
    image: "https://cdn.jwplayer.com/thumbs/XH9vzksD-720.jpg",
    description: "Flashing sparks on black background in slow motion",
},
{
    file: 'https://cdn.jwplayer.com/videos/KkqEqb3o-8yQ1cYbs.mp4',
    image: "https://cdn.jwplayer.com/thumbs/Juu4i0xE-720.jpg",
    description: "Rear view slow motion shot of a group of teenage skater friends walking on mountain road with long boards together in slow motion"
}];

class WatchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoTitle: '',
        };
        this.onVideoLoad = this.onVideoLoad.bind(this);
    }
    onVideoLoad(event) {
        console.log(event);
        this.setState({
          videoTitle: event.item.description // this only works with json feeds!
        });
      }
    render() {
        return (
            <div>
                <ReactJWPlayer
                    playerId='my-jw-player-instance'
                    playerScript='https://content.jwplatform.com/libraries/oCTK7cQT.js'
                    playlist={playlist}
                    onVideoLoad={this.onVideoLoad}
                    customProps={{displayMode: 'shelf'}}   
                    isAutoPlay={true}            
                />
            </div>
        );
    }
}

export default WatchContainer;
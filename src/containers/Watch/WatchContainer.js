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
},
{
    file: 'https://cdn.jwplayer.com/videos/8L4m9FJB-8yQ1cYbs.mp4',
    image: "https://cdn.jwplayer.com/thumbs/D4d0V5Qn-720.jpg",
    description: "Beautiful sunset point of view shot along empty desert highway through Monument Valley, Arizona Utah"
},
{
    file: 'https://cdn.jwplayer.com/videos/bsbubDD1-8yQ1cYbs.mp4',
    image: "https://cdn.jwplayer.com/thumbs/MWgEswji-720.jpg",
    description: "Group of friends dancing on the back seat of a convertible car while traveling in a wind farm."
},
{
    file: 'https://cdn.jwplayer.com/videos/8TbJTFy5-8yQ1cYbs.mp4',
    image: "https://cdn.jwplayer.com/thumbs/rTTGvOdA-720.jpg",
    description: "Epic shot of a man hiking on the edge of the mountain as a silhouette in colorful sunset"
},
{
    file: 'https://cdn.jwplayer.com/videos/tkM1zvBq-8yQ1cYbs.mp4',
    image: "https://cdn.jwplayer.com/thumbs/emGwgXml-720.jpg",
    description: "Aerial of Silhouette of surfers at sunrise"
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
        this.setState({
            videoTitle: event.item.description // this only works with json feeds!
        });
    }
    render() {
        return (
            <div>
                <ReactJWPlayer
                    ref={"jwplayer"}
                    playerId='my-jw-player-instance'
                    playerScript='https://content.jwplatform.com/libraries/oCTK7cQT.js'
                    playlist={playlist}
                    customProps={{
                        skin: {
                            name: 'seven',
                            active: '#b71c1c',
                            inactive: '#ffffff',
                            background: 'transparent'
                        },
                        stretching: 'seven',
                        autostart: true,
                        mute: true
                    }}
                    onVideoLoad={this.onVideoLoad}                    
                />
            </div>
        );
    }
}

export default WatchContainer;
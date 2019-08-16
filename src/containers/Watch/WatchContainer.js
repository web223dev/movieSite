import React, { Component } from 'react';
import ReactJWPlayer from 'react-jw-player';
import Loader from 'components/Loader';

const playlist = [{
    file: 'https://cdn.jwplayer.com/videos/KkqEqb3o-8yQ1cYbs.mp4',
    image: 'https://cdn.jwplayer.com/thumbs/Juu4i0xE-720.jpg',
    tracks: [{
        label: 'English',
        kind: 'captions',
        'default': true
    }],
    title: "Title One"
},
{
    file: 'https://cdn.jwplayer.com/videos/KkqEqb3o-8yQ1cYbs.mp4',
    image: "https://cdn.jwplayer.com/thumbs/Juu4i0xE-720.jpg",
    title: "Title Two"
},
{
    file: 'https://cdn.jwplayer.com/videos/8L4m9FJB-8yQ1cYbs.mp4',
    image: "https://cdn.jwplayer.com/thumbs/D4d0V5Qn-720.jpg",
    title: "Title Three",
    nextUpDisplay: false
},
{
    file: 'https://cdn.jwplayer.com/videos/bsbubDD1-8yQ1cYbs.mp4',
    image: "https://cdn.jwplayer.com/thumbs/MWgEswji-720.jpg",
    title: "Title Four"
},
{
    file: 'https://cdn.jwplayer.com/videos/8TbJTFy5-8yQ1cYbs.mp4',
    image: "https://cdn.jwplayer.com/thumbs/rTTGvOdA-720.jpg",
    title: "Title Five"
},
{
    file: 'https://cdn.jwplayer.com/videos/tkM1zvBq-8yQ1cYbs.mp4',
    image: "https://cdn.jwplayer.com/thumbs/emGwgXml-720.jpg",
    title: "Title Six"
}];

class WatchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoTitle: '',
            videotensec: null
        };
        this.onVideoLoad = this.onVideoLoad.bind(this);
        this.onTime = this.onTime.bind(this);
    }
    onVideoLoad(event) {

        this.setState({
            videoTitle: event.item.description // this only works with json feeds!
        });
    }
    onTime(event) {
    }
    render() {
        const { videoTitle } = this.state;
        return (
            <div className="watch">
                <div className="video">
                    {videoTitle === '' && <Loader />}
                    <ReactJWPlayer
                        ref={"jwplayer"}
                        playerId='my-jw-player-instance'
                        playerScript='https://content.jwplatform.com/libraries/oCTK7cQT.js'
                        playlist={playlist}
                        onVideoLoad={this.onVideoLoad}
                        onTime={this.onTime}                        
                    />
                </div>
            </div>
        );
    }
}

export default WatchContainer;
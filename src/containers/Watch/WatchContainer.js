import React, { Component } from 'react';
import ReactJWPlayer from 'react-jw-player';
import { connect } from 'react-redux';
import Loader from 'components/Loader';
import * as watchActions from 'modules/watchmovie';
import { bindActionCreators } from 'redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
    title: "Title Three"
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
            cursor: 0,
            videoStatus: [],
            modal: false
        };
        this.onVideoLoad = this.onVideoLoad.bind(this);
        this.onTime = this.onTime.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    onVideoLoad(event) {
        this.setState({
            videoTitle: event.item.title // this only works with json feeds!
        });
    }
    onTime(event) {
        // console.log(event);
        const { WatchActions } = this.props;
        const { videoTitle, videoStatus, cursor } = this.state;
        // console.log(videoTitle);

        var breakPoint = [
            0,
            event.duration / 2,
            event.duration,
            -1
        ];
        var current_time = event.currentTime; //console.log(current_time);
        var duration = event.duration;
        var title = videoTitle;
        // console.log(breakPoint[cursor]);
        if (breakPoint[cursor] != -1 && breakPoint[cursor] <= current_time) {
            // console.log(current_time, cursor, breakPoint[cursor]);
            this.state.cursor = cursor + 1;
            WatchActions.logTime({ current_time, duration, title });
        }
        if (breakPoint[cursor] === -1) {
            this.setState({
                cursor: 0
            })
        }
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
        const { loglists } = this.props;
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

                <Button color="danger" onClick={this.toggle}>abc</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="video-log">
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        {
                            loglists.map((loglist, i) => {
                                const { title, currrentTime, duration } = loglist.toJS();
                                return (
                                    <ul className="logs" key={i}>
                                        <li> Video Title : {title} </li>
                                        <li> Video Duration: {duration} </li>
                                        <li> Watched Time: {currrentTime} </li>
                                    </ul>
                                )
                            })
                        }
                        
                    </ModalBody>
                    <ModalFooter>                        
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        loglists: state.watch_movie.get('loglists')
    }),
    (dispatch) => ({
        WatchActions: bindActionCreators(watchActions, dispatch)
    })
)(WatchContainer);
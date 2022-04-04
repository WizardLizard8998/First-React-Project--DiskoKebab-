import React from 'react';
import YouTube from 'react-youtube';



class Youtube extends React.Component {
  render() {
    const opts = {
      height: '400',
      width: '320',

      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId="W5l84GeKHZU" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtube;
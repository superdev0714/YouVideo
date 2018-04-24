/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import YouTube from 'react-native-youtube'
import { YouTubeStandaloneIOS } from 'react-native-youtube';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      playing: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <YouTube
          videoId="ISgz8F9z0aM"   // The YouTube video ID
          play={this.state.playing}             // control playback of video with true/false
          fullscreen={false}       // control whether the video should play in fullscreen or inline
          loop={true}             // control whether the video should loop when ended

          ref={(ref) => { this.videoplayer = ref}}

          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}

          style={{ alignSelf: 'stretch', height: 300 }}
        />
        <View style={{flexDirection: 'row', marginTop: 50, width: 300, height: 200}}>
          <TouchableOpacity><Text>Prev</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.videoplayer.playVideoAt(0)}><Text>Play</Text></TouchableOpacity>
          <TouchableOpacity><Text>Next</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});

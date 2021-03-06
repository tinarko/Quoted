import ReactDOM from 'react-dom';
import React from 'react';
import RecordRTC from 'recordrtc';
import { captureUserMedia, S3Upload } from '../AppUtils.jsx';
import Webcam from './Webcam.react.jsx';

//indicate compatible web browsers for mediaDevices API
const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia || navigator.msGetUserMedia);

class SoundIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listening: false,
      recordVideo: null,
      recordedMessage: null,
      src: null,
      uploadSuccess: null,
      uploading: false
    };

  this.requestUserMedia = this.requestUserMedia.bind(this);
  this.startRecord = this.startRecord.bind(this);
  this.stopRecord = this.stopRecord.bind(this);
  this.uploadRecord = this.uploadRecord.bind(this);
  this.playRecord = this.playRecord.bind(this);
  this.handlePress = this.handlePress.bind(this);
  }

  //Alert user when web browser is not compatible
  componentDidMount() {
    if(!hasGetUserMedia) {
      alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
      return;
    }
    this.requestUserMedia();
  }

  //Request user permission for media access
  requestUserMedia() {
     captureUserMedia().then((stream) => {
      this.setState({src: window.URL.createObjectURL(stream)});
     }).catch((err) => console.log(err));
  }  

  startRecord() {
    captureUserMedia().then((stream) => {
      if (this.state.recordVideo !== null) {
        this.state.recordVideo.clearRecordedData();
      }
      this.state.recordVideo = RecordRTC(stream, {type: 'audio', mimeType: 'audio/webm'});
      this.state.recordVideo.startRecording();
    });
  }

  stopRecord() {
    this.state.recordVideo.stopRecording(() => {
      let params = {
        type: 'audio/webm',
        data: this.state.recordVideo.blob,
        id: Math.floor(Math.random()*90000) + 10000
      }
      this.setState({ recordedMessage: params });
    });
  }

  uploadRecord() {
    let params = this.state.recordedMessage;
    this.setState({ uploading: true });

    S3Upload(params)
    .then((success) => {
      console.log('enter then statement');
      if(success) {
        // this.setState({recordingPublicUrl: response.publicUrl});
        // console.log(this.props.recordingPublicUrl);
        this.setState({ uploadSuccess: true, uploading: false });
      }
    }, (error) => {
      alert(error, 'error occurred. check your aws settings and try again.')
    })
  }

  //playRecord doesn't work - this framework is based off of MediaSource
  playRecord() {
    var self = this;
    console.log(self.state.recordVideo.blob);
    var superBuffer = new Blob(self.state.recordVideo.blob, { type: 'audio/webm'});
    this.setState({url: window.URL.createObjectURL(superBuffer)});
  }


  handlePress() {
    var self = this;
    if(this.state.listening === false){
      this.setState({listening: !this.state.listening}, () => self.startRecord());
    } else {
      this.setState({listening: !this.state.listening}, () => self.stopRecord());
    }
  }

  render() {
    var style = {            
      'backgroundColor': this.state.listening ? 'green': ''
    };

    return (
      <div>
        {this.state.uploading ? <div>Uploading...</div> : null}
        {this.state.uploadSuccess ? <div>Uploaded</div> : null}        
        <img style={style} onClick={this.handlePress} src="assets/soundIcon.png" />  <br/>
        <button onClick={this.uploadRecord} className="btn btn-primary">Upload Record</button>
      </div>
    )
  }
}

export default SoundIcon;
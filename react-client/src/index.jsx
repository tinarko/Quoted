import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Nav from './components/Nav.jsx';
import Message from './components/Message.jsx'
import SoundIcon from './components/SoundIcon.jsx'
import Inputs from './components/Inputs.jsx'
import List from './components/List.jsx'
import Threads from './components/Threads.jsx'
import {HashRouter, Route, IndexRoute, Link} from 'react-router-dom';
// import {BrowserRouter, Route,IndexRoute, Link} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      businesses: [],
      businessCategory: 'Auto Repair',
      location: 'San Francisco',
      sendSMS: false,
      sendPhone: false,
      textInput: '',
      recordingPublicUrl: '',
      threads: []
    }
  }

  handleBusinessCategoryChange(event) {
    this.setState({businessCategory: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleTextInputChange(event) {
    this.setState({textInput: event.target.value});
  }

  handleCheckBox(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
    console.log('name is: ' + name + '; value is: ' + value);
  }

  sendInfo() {
    console.log('Trying to send info', this.state.textInput);

    //Send data to server to send text messages
    if (this.state.sendSMS === true){
      $.ajax({
        method: "POST",
        url: '/messages',
        data: { textInput: this.state.textInput,
                businesses: this.state.businesses,
                businessCategory: this.state.businessCategory,
                location: this.state.location},
        success: (results) => {
          console.log('sucessfuly sent message', results);
        }, error: (err) => {  
          console.log('err recieved', err);
        }
      })
    }

    //Send data to server to send phone calls
    if (this.state.sendPhone === true) {
      $.ajax({
        method: "POST",
        url: '/call',
        data: { businesses: this.state.businesses,
                businessCategory: this.state.businessCategory,
                location: this.state.location
        },
        success: (results) => {
          console.log('successfully sent call', results);
        }, error: (err) => {
          console.log('err in call', err);
        }
      })
    }
  }

  // need to change this to fetch user contacts instead of querying yelp businesses
  fetchBusinesses(event) {
    let params = {};
    params.category = this.state.businessCategory || 'test';
    params.location = this.state.location || 'San Francisco';
    console.log('fetchBusiness params: ', params);

    $.post({
      url: '/businesses',
      data: params,
      dataType: 'json',
      success: (results) => {
        console.log('success results: ', results);
        this.setState({businesses: results});
      }, 
      error: (err) => {
        console.log('err', err);
      }
    })

    // $.get({
    //   url: '/contactList'
    // })
  }

  componentDidMount() {
    this.fetchBusinesses();
  }

  render() {
    // <HashRouter>
    //       <div>
    //           <Route exact path="/" component={MainContent} />
    //           <Route path="/ThreadView" component={(props, state) => <Threads threads={this.state.threads} />}/>
    //           <Route path="/SignUp" component={SignUp} />
    //           <Route path="/Login" component={Login} />
    //       </div>
    // </ HashRouter>
    return (
    <HashRouter>
      <div>
        <Nav  fetchBusinesses={this.fetchBusinesses.bind(this)} 
              handleBusinessCategoryChange={this.handleBusinessCategoryChange.bind(this)} 
              handleLocationChange={this.handleLocationChange.bind(this)} 
              searchParams={this.state} />
        <div className="page-header">
        <h1> <b> Quotely </b></h1>
        </div>
        <Route exact path="/" component={() => {
          return (
            <div>
            <Inputs handleTextInputChange = {this.handleTextInputChange.bind(this)}
                    handleCheckBox = {this.handleCheckBox.bind(this)}
                    sendInfo = {this.sendInfo.bind(this)}
                    state={this.state} /> 
            <List businesses={this.state.businesses} 
                  fetchBusinesses={this.fetchBusinesses.bind(this)} />        
          </div>
          )
        }}/>
        <Route path="/threads" component={Threads}/>
      </div>
    </HashRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
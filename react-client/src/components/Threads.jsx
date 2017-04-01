import ReactDOM from 'react-dom';
import React from 'react';
import Thread from './Thread.jsx';
import $ from 'jquery';

class Threads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: []
    }
    this.fetchThreads();
  }

  fetchThreads() {
    console.log('fetching threads');
    $.get('/threads', {}, (data) => {
      this.setState({
        threads: data
      });
      console.log(this.state.threads);
    });

  }


  render() {
    return (  
      <div className="threads">
        {
          this.state.threads.map((thread) => {
            console.log('thread: ', thread);
            return <Thread thread={thread} key={thread._id}/>
          })
        }
      </div>
    )

  }
}

export default Threads;
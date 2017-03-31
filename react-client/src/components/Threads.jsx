import ReactDOM from 'react-dom';
import React from 'react';
import Thread from './Thread.jsx';
import $ from 'jquery';

class Threads extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (  
      <div className="threads">
        {
          this.props.threads.map((thread) => {
            return <Thread thread={thread} key={thread._id}/>
          })
        }
      </div>
    )

  }
}

export default Threads;
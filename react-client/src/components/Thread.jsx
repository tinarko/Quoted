import ReactDOM from 'react-dom';
import React from 'react';
import Response from './Response.jsx';
import $ from 'jquery';

class Thread extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (  
      <div className="thread">
        {
          this.props.thread.map((response) => {
            return <Response response={response} key={response._id}/>
          })
        }
      </div>
    )

  }
}

export default Thread;
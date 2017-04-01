import ReactDOM from 'react-dom';
import React from 'react';

class Response extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  handleChange(e) {
    this.setState({input: e.target.value});
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="response">
        <div> {this.props.response.contactName} </div>
        <div> {this.props.response.message} </div>
      </div>
    )
  }
}

export default Response;
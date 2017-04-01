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
  }

  render() {
    let ResponseContext = this;
    return (
      <ul>
        {this.props.responses.map((response) => {
          if (response.fromNumber === ResponseContext.props.contactPhoneNumber) {
            return (<li key={response._id}>{response.inboundMsg}</li>)
          }
          })
        }
      </ul>
    )
  }
}

export default Response;
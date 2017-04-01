import ReactDOM from 'react-dom';
import React from 'react';
import Response from './Response.jsx';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td> {this.props.contactName} </td>
        <td> {this.props.contactPhoneNumber} </td>
        <td> <Response responses={this.props.responses} contactPhoneNumber={this.props.contactPhoneNumber}/> </td>
      </tr>
    )
  }
}

export default Contact;
import ReactDOM from 'react-dom';
import React from 'react';
import Contact from './Contact.jsx';
import $ from 'jquery';

class Thread extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var ThreadContext = this;
    return (
      <div>
        <h5><strong>Outbound Message: </strong>{this.props.thread.outboundMsg}</h5>
        <h5><strong>Group: </strong>{this.props.thread.groupName}</h5>
        <table className="thread">
          <tr>
            <th>
              Contact Name
            </th>
            <th>
              Phone Number
            </th>
            <th>
              Responses
            </th>
          </tr>
          {
            this.props.thread.contacts.map((contact) => {
              return (
                <Contact key={contact._id} contactName={contact.contactName} contactPhoneNumber={contact.contactPhoneNumber} responses={ThreadContext.props.thread.responses}/>
              )
            })
          }
        </table>
      </div>
    )

  }
}

export default Thread;
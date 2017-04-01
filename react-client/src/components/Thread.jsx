import ReactDOM from 'react-dom';
import React from 'react';
import Response from './Response.jsx';
import $ from 'jquery';

class Thread extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
                <tr>
                  <td>
                    {contact.contactName}
                  </td>
                  <td>
                    {contact.contactPhoneNumber}
                  </td>
                  <td>
                  </td>
                </tr>
              )
            // <Responses response={response} key={response._id}/>
            })
          }
        </table>
      </div>
    )

  }
}

export default Thread;
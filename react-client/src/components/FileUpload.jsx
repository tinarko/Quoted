import React from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      groupName: ''
    };

    // For a full list of possible configurations,
    // please consult http://www.dropzonejs.com/#configuration
    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: 'text/csv,application/vnd.ms-excel'
    };

    this.componentConfig = {
      iconFiletypes: ['.csv'],
      showFiletypeIcon: true,
      postUrl: '/user/addcontacts',
    };

    // If you want to attach multiple callbacks, simply
    // create an array filled with all your callbacks.
    this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];

    // Simple callbacks work too, of course
    this.callback = () => console.log('Hello!');

    // should receive object of array of contacts
    // server response is second argument: http://www.dropzonejs.com/#configuration
    this.success = (data, contacts) => {
      // receives contacts in format of arrays within an array
      console.log('at component', contacts);
      // do I need to change contacts to an array of obejcts..?

      this.setState({contacts: contacts});
    }

    this.removedfile = file => console.log('removing...', file);

    this.dropzone = null;
  }


  changeHandler(event) {
    this.setState({groupName: event.target.value});
    console.log(this.state.groupName);
  }

  // save groupname and contacts to db
  clickHandler() {
    console.log('clicked');
    console.log(this.state);
  }

  render() {
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
      init: dz => this.dropzone = dz,
      drop: this.callbackArray,
      addedfile: this.callback,
      success: this.success,
      removedfile: this.removedfile
    };
    return (
      <div>
        <h4>Please input your group name and upload your contacts</h4>
        <input onChange={this.changeHandler.bind(this)} value={this.state.groupName}/>
        <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
        <button onClick={this.clickHandler.bind(this)}>Save group</button>
      </div>
      );
  }
}

export default FileUpload;
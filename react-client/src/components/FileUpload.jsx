import React from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    // For a full list of possible configurations,
    // please consult http://www.dropzonejs.com/#configuration
    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: 'text/csv,application/vnd.ms-excel'
    };

    this.componentConfig = {
      iconFiletypes: ['.csv'],
      showFiletypeIcon: true,
      postUrl: '/user/addcontacts'
    };

    // If you want to attach multiple callbacks, simply
    // create an array filled with all your callbacks.
    this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];

    // Simple callbacks work too, of course
    this.callback = () => console.log('Hello!');

    this.success = file => console.log('uploaded', file);

    this.removedfile = file => console.log('removing...', file);

    this.dropzone = null;
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
    return <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />;
  }
}

export default FileUpload;
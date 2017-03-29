import React from 'react';
import Dropzone from 'react-dropzone';
import $ from 'jquery';

class FileUpload extends React.Component {

  onDrop (acceptedFiles, rejectedFiles) {

    // $http({
    //   method: 'POST',
    //   url: '/onEnd', 
    //   data: formData,
    //   responseType: 'arraybuffer',
    //   contentType: false,
    //   transformRequest: angular.identity,
    //   processData: false,
    //   headers: {'Content-type': undefined}
    // });

    console.log('Accepted files: ', acceptedFiles);
    console.log('Rejected files: ', rejectedFiles);
    let formData = new FormData();
    formData.append('recording', acceptedFiles[0]);
    $.ajax({
      // url: '/user/addcontacts',
      // type: 'POST',
      // data: formData,
      // cache: false,
      // dataType: 'json',
      // processData: false,
      // contentType: false,
      method: 'POST',
      url: '/user/addcontacts', 
      data: formData,
      // responseType: 'arraybuffer',
      dataType: 'json',
      contentType: false,
      // transformRequest: angular.identity,
      processData: false,
      headers: {'Content-type': undefined},
      success: function(data) {
        console.log('this is onDrop ajax success', data);
      },
      error: function(jqXHR, textStatus, errorThrown) { 
        console.log(JSON.stringify(jqXHR)); 
        console.log('AJAX error: ' + textStatus + ' : ' + errorThrown); 
      }
    });
  }

  render () {
    return (
        <div>
          <Dropzone onDrop={this.onDrop}>
            <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
        </div>
    );
  }

}

export default FileUpload;
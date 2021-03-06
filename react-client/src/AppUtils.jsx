// handle user media capture
export function captureUserMedia() {
  var params = { audio: true, video: false };
  //returns a mediastream object
  return navigator.mediaDevices.getUserMedia(params);
};


// handle S3 upload
function getSignedUrl(file) {
  let queryString = '?objectName=' + file.id + '&contentType=' + encodeURIComponent(file.type);
  return fetch('/s3/sign' + queryString)
  .then((response) => {
    console.log('response from getSignedUrl: ', response);
    return response.json();
  })
  .catch((err) => {
    console.log('error: ', err)
  })
}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();

  if (xhr.withCredentials != null) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest !== "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }

  return xhr;
};

export function S3Upload(fileInfo) { //parameters: { type, data, id }
  return new Promise((resolve, reject) => {
    getSignedUrl(fileInfo)
    .then((s3Info) => {
      console.dir('s3 Info: ' + s3Info);
      // upload to S3
      var xhr = createCORSRequest('PUT', s3Info.signedUrl);

      xhr.onload = function() {
        if (xhr.status === 200) {
          console.log(xhr.status)
          resolve(true);
        } else {
          console.log(xhr.status)
          reject(xhr.status);
        }
      };

      xhr.setRequestHeader('Content-Type', fileInfo.type);
      xhr.setRequestHeader('x-amz-acl', 'public-read-write');

      return xhr.send(fileInfo.data);
    })
  })
}

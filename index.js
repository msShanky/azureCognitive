// const FaceAPIClient = require('azure-cognitiveservices-face');
// const fs = require('fs')

// const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;
 
// // Creating the Cognitive Services credentials
// // This requires a key corresponding to the service being used (i.e. text-analytics, etc)
// let credentials = new CognitiveServicesCredentials('a20117d5942f4f51a2ea543cb6d9c417');
// let azureRegion = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect'

// let client = new FaceAPIClient(credentials, azureRegion);
 
// let fileStream = fs.createReadStream('./assets/ChrisW.jpg');
// let url = 'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg'
// client.face.detectWithStream(fileStream, {
//   returnFaceId: true,
//   returnFaceAttributes: ['smile']  
// }).then(result => {
//   console.log(result);
// }).catch((err) => {
//   throw err;
// });

'use strict';

const request = require('request');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = 'a20117d5942f4f51a2ea543cb6d9c417';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';

const imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';

// Request parameters.
const params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
    'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
};

const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    },    
    time : true
};
let seconds = 0
var interval = setInterval(function() {
  seconds++
  console.log(str1 + " " + str2);
}, 1000);

request.post(options, (error, response, body) => {  
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(response.elapsedTime);  
  // console.log(jsonResponse);
});
clearInterval(interval)
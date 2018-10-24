const msRestAzure = require('ms-rest-azure');
const CognitiveServicesManagement = require("azure-arm-cognitiveservices");
let client;
let createAccount = msRestAzure.interactiveLogin().then((credentials) => {
  client = new CognitiveServicesManagement(credentials, suite.subscriptionId);
  return client.accounts.create('groupname', 'accountname', {
    sku: {
      name: "S1"
    },
    kind: "Face",
    location: "westus",
    properties: {}
  });
}).catch((err) => {
  console.log('An error ocurred');
  console.dir(err, {depth: null, colors: true});
});

let serviceKey;
createAccount.then((result) => {
  return client.accounts.listKeys('groupname', 'accountname');
}).then((result) => {
  serviceKey = result.key1;
  console.log(result.key2);
}).catch((err) => {
  console.log('An error ocurred');
  console.dir(err, {depth: null, colors: true});
});
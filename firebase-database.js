'use strict';

const admin = require('firebase-admin');

const serviceAccount = require('./vendors/credentials/ng-recipes-5b053-firebase-adminsdk-b7b9x-01a2f02942');

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ng-recipes-5b053.firebaseio.com"
});

console.log("Start firebase database connection");
console.log("databaseURL: https://ng-recipes-5b053.firebaseio.com");
module.exports = firebase;

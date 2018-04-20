import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDN0-kT1K_TGILmSr3d67xh8S1AwS5dflI",
  authDomain: "fir-authenticationreact.firebaseapp.com",
  databaseURL: "https://fir-authenticationreact.firebaseio.com",
  projectId: "fir-authenticationreact",
  storageBucket: "fir-authenticationreact.appspot.com",
  messagingSenderId: "179497768493"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};

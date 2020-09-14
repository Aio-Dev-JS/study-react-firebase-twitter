import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB0oMnjGbKh4F0PPl7AQ9abiPciZLXMKxk',
  authDomain: 'nwitter-74ec4.firebaseapp.com',
  databaseURL: 'https://nwitter-74ec4.firebaseio.com',
  projectId: 'nwitter-74ec4',
  storageBucket: 'nwitter-74ec4.appspot.com',
  messagingSenderId: '805081871204',
  appId: '1:805081871204:web:b2140145cd365e890fc071',
  // github에 올라가는 것만 방지, RCA에서는 노출 됨, 환경변수는 반드시
  // REACT_APP으로 시작해야함
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();

import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'process.env.REACT_APP_APIKEY',
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  // github에 올라가는 것만 방지, RCA에서는 노출 됨, 환경변수는 반드시
  // REACT_APP으로 시작해야함
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
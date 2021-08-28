import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAbRQAGzHKKhvcXrVsDSr9HDMtlVomizXM",
  authDomain: "fb-clone-react-4ea0a.firebaseapp.com",
  projectId: "fb-clone-react-4ea0a",
  storageBucket: "fb-clone-react-4ea0a.appspot.com",
  messagingSenderId: "76416832208",
  appId: "1:76416832208:web:35aff33ba2c3412f75c4d5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider} ;
  export default db;


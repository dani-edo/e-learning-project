import { firebase } from 'firebase'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAWKxLNGaO6QRl6yt9_2E_4um3uN3O-kLw',
  authDomain: 'auth-dani-edo.firebaseapp.com',
  databaseURL: 'https://auth-dani-edo.firebaseio.com',
  projectId: 'auth-dani-edo',
  storageBucket: 'auth-dani-edo.appspot.com',
  messagingSenderId: '364844543107',
  appId: '1:364844543107:web:d7eeb9d6b65449a598bfb6'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase

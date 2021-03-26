import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCfytQr0tHhrbXnxTPgRzURLbWICYjdfio",
    authDomain: "recettes-app-f3c1c.firebaseapp.com",
    databaseURL: "https://recettes-app-f3c1c-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base

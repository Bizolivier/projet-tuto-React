
import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAdQYlFQdtwMa51KX6F8yeQ-PL4AY9Qmx8",
  authDomain: "chatbox-app-44c9d.firebaseapp.com",
  databaseURL:
    "https://chatbox-app-44c9d-default-rtdb.europe-west1.firebasedatabase.app"
});
const base = Rebase.createClass(firebase.database());
export { firebaseApp };

export default base;

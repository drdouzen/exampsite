// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBii8nObiVriKLBIB2w3u3-LYfpjrYrOdE",
  authDomain: "formsave-c4eee.firebaseapp.com",
  projectId: "formsave-c4eee",
  storageBucket: "formsave-c4eee.appspot.com",
  messagingSenderId: "1009727721605",
  appId: "1:1009727721605:web:29730bec1b91931d7099ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, get, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js"

const db = getDatabase();

document.getElementById('kontakd').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    console.log(123)

}

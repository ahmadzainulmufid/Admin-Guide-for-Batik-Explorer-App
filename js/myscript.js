// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBneLQmvFAj9El86CV_KLqOMk_pmOaNEfw",
    authDomain: "batik-explorer.firebaseapp.com",
    projectId: "batik-explorer",
    storageBucket: "batik-explorer.appspot.com",
    messagingSenderId: "1029742394869",
    appId: "1:1029742394869:web:e9ff03187ee69975f3f4bc"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const signinButton = document.getElementById("signin-button");
const signupButton = document.getElementById("signup-button");

signupButton.addEventListener("click", (e) => {
    const name = document.getElementById("name").value;
    const nohp = document.getElementById("nohp").value;
    const emailSignup = document.getElementById("email_signup").value;
    const passwordSignup = document.getElementById("psw_signup").value;
  
    createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
  
        set(ref(database, "users/" + user.uid), {
          name: name,
          nohp: nohp,
          email: emailSignup,
          password: passwordSignup
        })
          .then(() => {
            // Data saved successfully!
            alert("user telah sukses dibuat");
          })
          .catch((error) => {
            //the write failed
            alert(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });

  signinButton.addEventListener("click", (e) => {
    let emailSignin = document.getElementById("email_signin").value;
    let passwordSignin = document.getElementById("psw_signin").value;
    signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let lgDate = new Date();
        update(ref(database, "users/" + user.uid), {
          last_login: lgDate
        })
          .then(() => {
            // Data saved successfully!
            //   alert("user telah sukses login");
            location.href = "http://127.0.0.1:5500/auth_firebase_cdn/index.html";
          })
          .catch((error) => {
            //the write failed
            alert(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  });
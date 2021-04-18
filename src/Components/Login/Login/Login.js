import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import "./Login.css";
import googleLogo from "../../../Images/logo/google.png";

// hi, my storage was limited to firebase so i used doctors portal project to sign in 
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
      const userInfo = result.user;
      fetch('https://damp-chamber-86372.herokuapp.com/isAdmin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: result.user.email })
      })
      .then(res => res.json())
      .then(data => {
        if(data.length === 1){
          setLoggedInUser({ ...userInfo, isAdmin: true });
        }else{
          setLoggedInUser({ ...userInfo, isAdmin: false });
        }
      })
      storeAuthToken();
    }).catch(error =>{
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
      <div className="col-md-3 d-none d-md-block align-self-end"></div>
        <div className="col-md-6 shadow p-5 login-button text-center">
            <img src={googleLogo} alt="google"/>
          <div className="from-group text-center">
            <button className="btn mt-3" onClick={handleGoogleSignIn}>Google Sign in</button>
          </div>
        </div>
        <div className="col-md-3 d-none d-md-block align-self-end"></div>
      </div>
    </div>
  );
};

export default Login;
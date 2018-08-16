// Initialize Firebase //
window.initializeFirebase = () => {
    firebase.initializeApp({
      apiKey: 'AIzaSyA2_g2xx4nNZIKuqwbaUwk3HaA4mEesgCM',
      authDomain: 'garnachapp-labo.firebaseapp.com',
      databaseURL: 'https://garnachapp-labo.firebaseio.com',
      projectId: 'garnachapp-labo',
      storageBucket: '',
      messagingSenderId: '805982016843'
    });
  };

  // Facebook sign-in //
  window.facebookUserLogin = () => {
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().useDeviceLanguage();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        location.href = ('views/perfil.html');
        // ...
      });
  };
  
  // LogOut function //
  window.signOutUser = () => {
    firebase.auth().signOut()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  
  // Creating profile //
  window.createUserProfileWithEmail = (name, email, location, photo) => {
    db.collection('users').add({
      userName: name,
      userEmail: email,
      city: location,
      profilePhoto: photo
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

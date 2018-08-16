initializeFirebase();





document.getElementById('facebook-sign-in').addEventListener('click', event => {
    event.preventDefault();
    facebookUserLogin();
  });

  
initializeFirebase();
let newName = localStorage.getItem("newName");

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      if(newName != null){
        let displayName = newName;
        document.getElementById('name').value = displayName;
      } else {
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      document.getElementById('name').value = displayName;
      }
    } else {
      // User is signOut.
    }
  });

  document.getElementById('edit').addEventListener('click', event => {
    event.preventDefault();
    newName = document.getElementById('name').value;
    localStorage.setItem("newName", newName);
    newName = localStorage.getItem("newName");
    document.getElementById('result').innerHTML = newName;
    
  });

  document.getElementById('logOut').addEventListener('click', event => {
    event.preventDefault();
    signOutUser();
    location.href = ('../login.html')
  });
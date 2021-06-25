// listen for auth status changes
auth.onAuthStateChanged((user) => {

  setupUiNav(user)
  if(user) {
    // get data
    db.collection('guides').get().then(snapshot => {
      setupGuides(snapshot.docs);
    })
  } else {
    setupGuides([]);
  }
})

// sign up a user
const signUpForm = document.querySelector('#signup-form');

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signUpForm['signup-email'].value;
  const password = signUpForm['signup-password'].value;
  // sign up the user
  auth.createUserWithEmailAndPassword(email, password)
  .then(cred => {
    closeModal('modal-signup', 'signup-form');
  })
  
})

// log out a user
const logOutButton = document.querySelector('#logout');

logOutButton.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut();
})

// log in a user
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password)
  .then((cred) => {
    closeModal('modal-login', 'login-form');
  })
  .catch((err => {
    console.log(err);
    closeModal('modal-login', 'login-form');
  }))
})

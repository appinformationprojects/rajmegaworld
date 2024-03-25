const firebaseConfig = {
  apiKey: "AIzaSyDXtwYVu6hFOLnY4C1Ta8QtT8UNepjMev4",
  authDomain: "app2-ae437.firebaseapp.com",
  databaseURL: "https://app2-ae437-default-rtdb.firebaseio.com",
  projectId: "app2-ae437",
  storageBucket: "app2-ae437.appspot.com",
  messagingSenderId: "463478401690",
  appId: "1:463478401690:web:b832355ec8305c13574d23"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var WebDB = firebase.database().ref("Web-2");

document.getElementById("Web-2").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var emailid = getElementVal("name");
  var password = getElementVal("emailid");
  var username = getElementVal("msgContent");

  saveMessages(password, emailid, username);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 5000);

  document.querySelector(".inputBox button").style.backgroundColor = "rgb(0, 255, 106)"

  setTimeout(() => {
    document.querySelector(".inputBox button").style.backgroundColor = "rgb(90, 90, 230)"
  }, 2000)

  //   reset the form
  document.getElementById("Web-2").reset();

}

const saveMessages = (password, emailid, username) => {
  var newContactForm = WebDB.push();

  newContactForm.set({
    password: password,
    emailid: emailid,
    username: username,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
}


AppDB.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  // Simple validation
  if (email === 'test@example.com' && password === 'password') {
    alert('Login successful!');
    loginForm.reset();
    errorMessage.textContent = '';
  } else {
    errorMessage.textContent = 'Invalid email or password. Please try again.';
  }
});
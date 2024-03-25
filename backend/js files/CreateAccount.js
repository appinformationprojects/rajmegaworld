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
  var WebDB = firebase.database().ref("Web-3");
  
  document.getElementById("Web-3").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var firstname = getElementVal("firstname");
    var lastname = getElementVal("lastname");
    var linkedemail = getElementVal("linkedemail");
  
    saveMessages(firstname, lastname, linkedemail);
  
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
    document.getElementById("Web-3").reset();
  
  }
  
  const saveMessages = (firstname, lastname, linkedemail) => {
    var newContactForm = WebDB.push();
  
    newContactForm.set({
      firstname: firstname,
      lastname: lastname,
      linkedemail: linkedemail,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }
  
  
  AppDB.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const firstname = firstnameInput.value;
    const lastname = lastnameInput.value;
  
    // Simple validation
    if (firstname === 'Shashi' && lastname === 'Ranjan') {
      alert('Your Account create is successful!');
      WebDB.reset();
      errorMessage.textContent = '';
    } else {
      errorMessage.textContent = 'Invalid First or Last Name. Please try again.';
    }
  });
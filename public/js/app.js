var config = {
  apiKey: "AIzaSyAAtrPpz9IUt-U-OITqwN1Bj6eGFegAwnE",
  authDomain: "squadsdist.firebaseapp.com",
  databaseURL: "https://squadsdist.firebaseio.com",
  projectId: "squadsdist",
  storageBucket: "",
  messagingSenderId: "936978345317"
};
firebase.initializeApp(config);
//Ingresar con google
var $btn = $('#btnGoogle');
var $user = null;

  $btn.on('click',signInGoogle);

  function signInGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    $user = result.user;
    // ...
    console.log($user);
    
  })
}
//Ingresar con correo y contraseña
var $email = $('#email').val();
var $password = $('#password').val();
var $btnCorreo = $('#btnCorreo');

$btnCorreo.on('click',signInEmail);

function signInEmail() {
  firebase.auth().createUserWithEmailAndPassword($email, $password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

//Formulario materialize
$(document).ready(function() {
  M.updateTextFields();
});
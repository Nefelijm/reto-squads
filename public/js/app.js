// import { watchFile } from "fs";

var config = {
  apiKey: 'AIzaSyAAtrPpz9IUt-U-OITqwN1Bj6eGFegAwnE',
  authDomain: 'squadsdist.firebaseapp.com',
  databaseURL: 'https://squadsdist.firebaseio.com',
  projectId: 'squadsdist',
  storageBucket: 'squadsdist.appspot.com',
  messagingSenderId: '936978345317'
};

firebase.initializeApp(config);

// Ingresar con google
var $btn = $('#btnGoogle');
var $user = null;

$btn.on('click', signInGoogle);

function signInGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    $user = result.user;
    // ...
    console.log($user);
    window.location.href = '../views/home.html';
  });
}
// Ingresar con correo y contraseña
var $email = $('#email').val();
var $password = $('#password').val();
var $btnCorreo = $('#btnCorreo');

$btnCorreo.on('click', signInEmail);

function signInEmail() {
  firebase.auth().createUserWithEmailAndPassword($email, $password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

// Formulario materialize
// $(document).ready(function() {
//   M.updateTextFields();
// });


/** **Funcionalidad de Squas */
const dbRefObject = firebase.database().ref();

organizar();
var newSq1;
var newSq2;
var newSq3;
var newSq4;
var newSq5;
var newSq6;
var newSq7;
var newSq8;
var newSq9;
var validate1 = true;
var validate2 = true;
var validate3 = true;

function organizar() {
  // sincronizar cambios
  dbRefObject.on('value', function(snap) {
    // console.log(snap.val());
    var students = snap.val();
    // STUDENTS
   
    var sq1 = [];
    var sq2 = [];
    var sq3 = [];
    var sq4 = [];
    var sq5 = [];
    var sq6 = [];
    var sq7 = [];
    var sq8 = [];
    var sq9 = [];
    var arrStudiantesProm = [];
  
    students.forEach(function(element) {
      var promStudent;
      var englishStudents = element.english;
      var englishNote;

      // console.log(englishStudents);
      if (englishStudents === 0) {
        // console.log('cero');
        englishNote = 0.25;
        // console.log(englishNote);
        // console.log(promStudent);
      } else if (englishStudents === 1) {
        // console.log('uno');
        englishNote = 0.5;
        // console.log(englishNote);
      } else if (englishStudents === 2) {
        // console.log('dos');
        englishNote = 0.75;

        // console.log(promStudent);
      } else if (englishStudents === 3) {
        // console.log('tres');
        englishNote = 1;
        // console.log(englishNote);

        // console.log(promStudent);
      }

      promStudent = (englishNote + parseInt(element.soft_skills.sprint_3.comunicacion) + parseInt(element.tech_skills.sprint_3)) / 3;
      promStudent = promStudent.toFixed(2) * 100;

      // promStudentArr.push(promStudent);
      // bubble(promStudentArr);
       
      arrStudiantesProm.push([element.index, promStudent]);
    });
    bubble(arrStudiantesProm);
    
    var arrMax = arrStudiantesProm.slice(54, 72);
    var arrPro1 = arrStudiantesProm.slice(36, 54);
    var arrPro2 = arrStudiantesProm.slice(18, 36);
    var arrMin = arrStudiantesProm.slice(0, 18);

        
    var x = Math.floor((Math.random() * 10) + 1);
    sq1.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
 
    x = Math.floor((Math.random() * (x - 1)) + 1);
    sq2.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 2)) + 1);
    sq3.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 3)) + 1);
    sq4.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 4)) + 1);
    sq5.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 5)) + 1);
    sq6.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 6)) + 1);
    sq7.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 7)) + 1);
    sq7.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 8)) + 1);
    sq8.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 9)) + 1);
    sq9.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));


    x = Math.floor((Math.random() * (x - 10)) + 1);
    sq1.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 11)) + 1);
    sq2.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 12)) + 1);
    sq3.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 13)) + 1);
    sq4.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 14)) + 1);
    sq5.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 15)) + 1);
    sq6.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 16)) + 1);
    sq7.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 17)) + 1);
    sq8.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 18)) + 1);
    sq9.push((arrMax.splice(x, 1)), (arrPro1.splice(x, 1)), (arrPro2.splice(x, 1)), (arrMin.splice(x, 1)));
     
    
    var numStudent = 8;


    function newSquad(sq) {
      var newArr = [];
      for (var i = 0; i < numStudent; i++) {
        newArr.push([sq[i]][0][0][0]);
      }
      return newArr;
    }
    newSq1 = newSquad(sq1);
    newSq2 = newSquad(sq2);
    newSq3 = newSquad(sq3);
    newSq4 = newSquad(sq4);
    newSq5 = newSquad(sq5);

    // console.log(newSq1, newSq2, newSq3, newSq4);
    newSq6 = newSquad(sq6);
    newSq7 = newSquad(sq7);
    newSq8 = newSquad(sq8);
    // newSq9 = newSquad(sq9);


    function obtenerSprint() {
      sprintNew = (Object.keys(students[0].soft_skills)).length + 1;
      return sprintNew;
    }
    // cambiar el ultimo sprint
    //  document.getElementById('number-sprint').textContent = obtenerSprint();

    // agregando al DOM
    dbRefObject.on('value', function(snapshot) {
      student = snapshot.val();

      function pintarSquad(squead, container) {
        var template = '';
        for (let i = 0; i < squead.length; i++) {
          for (let j = 0; j < student.length; j++) {
            if (squead[i] === student[j].index) {
              // console.log(student[j].name.first);
              var names = student[j].name.first;
              var last = student[j].name.last;
              var tech = student[j].tech_skills.sprint_3;
              var soft = student[j].soft_skills.sprint_3.comunicacion;
              var eng = student[j].english;
              var start = '';

              if (tech > 0.7) {
                start += '<i class="material-icons tiny star">star</i>';
              }
              if (soft > 0.7) {
                start += '<i class="material-icons tiny star">star</i>';
              }
              if (eng > 1) {
                start += '<i class="material-icons tiny star">star</i>';
              }
              var nameEng;
              switch (eng) {
              case 0:
                nameEng = '-';
                break;
              case 1:
                nameEng = 'básico';
                break;
              case 2:
                nameEng = 'intermedio';
                break;
              case 3:
                nameEng = 'avanzado';
                break;
              }

              // console.log(start);


              template += `<li id="${squead[i]}" class="bloqueado"  draggable=true><span class="name-student">${names}  ${last} </span></li>`;

              // star_border
            }
          }
        }
        $(container).append(template);
      }
      $(pintarSquad(newSq1, '#sq1'));
      $(pintarSquad(newSq2, '#sq2'));
      $(pintarSquad(newSq3, '#sq3'));
      $(pintarSquad(newSq4, '#sq4'));
      $(pintarSquad(newSq5, '#sq5'));
      $(pintarSquad(newSq6, '#sq6'));
      $(pintarSquad(newSq7, '#sq7'));
      $(pintarSquad(newSq8, '#sq8'));
      
      localStorage.setItem('squad1', JSON.stringify(newSq1));
      localStorage.setItem('squad2', JSON.stringify(newSq2));
      localStorage.setItem('squad3', JSON.stringify(newSq3));
      localStorage.setItem('squad4', JSON.stringify(newSq4));
      localStorage.setItem('squad5', JSON.stringify(newSq5));
      localStorage.setItem('squad6', JSON.stringify(newSq6));
      localStorage.setItem('squad7', JSON.stringify(newSq7));
      localStorage.setItem('squad8', JSON.stringify(newSq8));
    });
  });
}
$('#btn-reorganizar').on('click', function() {
  $('#sq1').empty();
  $('#sq2').empty();
  $('#sq3').empty();
  $('#sq4').empty();
  $('#sq5').empty();
  $('#sq6').empty();
  $('#sq7').empty();
  $('#sq8').empty();
  organizar();
});

function bubble(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j][1] < arr[i][1]) {
        var aux = arr[j][1];
        var aux1 = arr[j][0];
        arr[j][1] = arr[i][1];
        arr[j][0] = arr[i][0];
        arr[i][1] = aux;
        arr[i][0] = aux1;
      }
    }
  }
  return arr;
}


// /******DRAG AND DROP*************/

document.addEventListener('dragstart', drag);
document.addEventListener('dragover', permitirDrop);
document.addEventListener('drop', drop);
var boxMarco = document.querySelectorAll('.dropheigth');

function drag(event) {
  event.dataTransfer.setData('text', event.target.id);
}

function permitirDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  boxDrop = event.target.id;
  var idName = parseInt(event.dataTransfer.getData('text'));
  if (event.target.dataset.box === 'marco-1') {
    searchSquad(newSq2, idName);
    searchSquad(newSq3, idName);
    searchSquad(newSq4, idName);
    searchSquad(newSq5, idName);
    searchSquad(newSq6, idName);
    searchSquad(newSq7, idName);
    searchSquad(newSq8, idName);
    newSq1.push(idName);
    console.log(newSq1);
    Validation1(newSq1);
    Validation1(newSq2);
    Validation1(newSq3);
    Validation1(newSq4);
    Validation1(newSq5);
    Validation1(newSq6);
    Validation1(newSq7);
    Validation1(newSq8);
    Validation2(idName, newSq1);
    Validation3(idName, newSq1);

    event.target.appendChild(document.getElementById(idName));
  }
  if (event.target.dataset.box === 'marco-2') {
    searchSquad(newSq1, idName);
    searchSquad(newSq3, idName);
    searchSquad(newSq4, idName);
    searchSquad(newSq5, idName);
    searchSquad(newSq6, idName);
    searchSquad(newSq7, idName);
    searchSquad(newSq8, idName);

    newSq2.push(idName);
    // console.log(newSq2);
    Validation1(newSq1);
    Validation1(newSq2);
    Validation1(newSq3);
    Validation1(newSq4);
    Validation1(newSq5);
    Validation1(newSq6);
    Validation1(newSq7);
    Validation1(newSq8);
    Validation2(idName, newSq2);
    Validation3(idName, newSq2);
    
    event.target.appendChild(document.getElementById(idName));
  }
  if (event.target.dataset.box === 'marco-3') {
    searchSquad(newSq1, idName);
    searchSquad(newSq2, idName);
    searchSquad(newSq4, idName);
    searchSquad(newSq5, idName);
    searchSquad(newSq6, idName);
    searchSquad(newSq7, idName);
    searchSquad(newSq8, idName);
    newSq3.push(idName);
    console.log(newSq3);
    Validation1(newSq1);
    Validation1(newSq2);
    Validation1(newSq3);
    Validation1(newSq4);
    Validation1(newSq5);
    Validation1(newSq6);
    Validation1(newSq7);
    Validation1(newSq8);
    Validation2(idName, newSq3);
    Validation3(idName, newSq3);
    event.target.appendChild(document.getElementById(idName));
  }
  if (event.target.dataset.box === 'marco-4') {
    searchSquad(newSq1, idName);
    searchSquad(newSq3, idName);
    searchSquad(newSq2, idName);
    searchSquad(newSq5, idName);
    searchSquad(newSq6, idName);
    searchSquad(newSq7, idName);
    searchSquad(newSq8, idName);
    newSq4.push(idName);
    console.log(newSq4);
    Validation1(newSq1);
    Validation1(newSq2);
    Validation1(newSq3);
    Validation1(newSq4);
    Validation1(newSq5);
    Validation1(newSq6);
    Validation1(newSq7);
    Validation1(newSq8);
    Validation2(idName, newSq4);
    Validation3(idName, newSq4);

    event.target.appendChild(document.getElementById(idName));
  }
  if (event.target.dataset.box === 'marco-5') {
    searchSquad(newSq1, idName);
    searchSquad(newSq3, idName);
    searchSquad(newSq4, idName);
    searchSquad(newSq6, idName);
    searchSquad(newSq7, idName);
    searchSquad(newSq8, idName);
    searchSquad(newSq2, idName);
    newSq5.push(idName);
    console.log(newSq5);
    Validation1(newSq1);
    Validation1(newSq2);
    Validation1(newSq3);
    Validation1(newSq4);
    Validation1(newSq5);
    Validation1(newSq6);
    Validation1(newSq7);
    Validation1(newSq8);
    Validation2(idName, newSq5);
    Validation3(idName, newSq5);
    event.target.appendChild(document.getElementById(idName));
  }
  // console.log(newSq1);
  // console.log(newSq2);
  // console.log(newSq3);
  // console.log(newSq4);
  // console.log(newSq5);
  // const squad = localStorage.getItem([])
  // console.log(squad);
  // squad.push(newSq1);
  // squad.push(newSq2);
  // squad.push(newSq3); 
  // squad.push(newSq4);
  // localStorage.setItem('squadFinal', squad);

  if (event.target.dataset.box === 'marco-6') {
    searchSquad(newSq1, idName);
    searchSquad(newSq3, idName);
    searchSquad(newSq4, idName);
    searchSquad(newSq5, idName);
    searchSquad(newSq7, idName);
    searchSquad(newSq8, idName);
    searchSquad(newSq2, idName);
    newSq6.push(idName);
    console.log(newSq6);
    Validation1(newSq1);
    Validation1(newSq2);
    Validation1(newSq3);
    Validation1(newSq4);
    Validation1(newSq5);
    Validation1(newSq6);
    Validation1(newSq7);
    Validation1(newSq8);
    Validation2(idName, newSq6);
    Validation3(idName, newSq6);
    event.target.appendChild(document.getElementById(idName));
  }
  if (event.target.dataset.box === 'marco-7') {
    searchSquad(newSq1, idName);
    searchSquad(newSq3, idName);
    searchSquad(newSq4, idName);
    searchSquad(newSq6, idName);
    searchSquad(newSq5, idName);
    searchSquad(newSq8, idName);
    searchSquad(newSq2, idName);
    newSq7.push(idName);
    console.log(newSq7);
    Validation1(newSq1);
    Validation1(newSq2);
    Validation1(newSq3);
    Validation1(newSq4);
    Validation1(newSq5);
    Validation1(newSq6);
    Validation1(newSq7);
    Validation1(newSq8);
    Validation2(idName, newSq7);
    Validation3(idName, newSq7);
    event.target.appendChild(document.getElementById(idName));
  }
  if (event.target.dataset.box === 'marco-8') {
    searchSquad(newSq1, idName);
    searchSquad(newSq3, idName);
    searchSquad(newSq4, idName);
    searchSquad(newSq6, idName);
    searchSquad(newSq7, idName);
    searchSquad(newSq5, idName);
    searchSquad(newSq2, idName);
    newSq8.push(idName);
    console.log(newSq8);
    Validation1(newSq1);
    Validation1(newSq2);
    Validation1(newSq3);
    Validation1(newSq4);
    Validation1(newSq5);
    Validation1(newSq6);
    Validation1(newSq7);
    Validation1(newSq8);
    Validation2(idName, newSq8);
    Validation3(idName, newSq8);
    event.target.appendChild(document.getElementById(idName));
  }
}


// validación1 : número de integrantes de squad
function Validation1(squad) {
  if (squad.length < 8) {
    alert('El número de personas del squad es 7');
    validate1 = false;
  }
}


// Validación2 : Hay 2 estudiantes que ya han estado juntas antes. Estudiante 1 y 2. 

function Validation2(element, squad) {
  var studentSelect;
  var indexStudent;
  dbRefObject.on('value', function(snapshot) {
    student = snapshot.val();

    for (i = 0; i < student.length; i++) {
      if (student[i].index === element) {
        studentSelect = student[i];
        indexStudent = student[i].index;
      }
    }
    // convirtiendo objeto en array
    var array = $.map(studentSelect.companeras, function(value, index) {
      return [value];
    });

    // Agrupando a todas las compañeras en un solo array
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
      newArr = newArr.concat(array[i]);
    }

    // Borrando el elemento 

    searchSquad(newArr, indexStudent);
    var box2 = document.getElementById('warming2');
    // Comparar los integrantes del nuevo squad con la lista de compañeras
    for (k = 0; k < newArr.length; k++) {
      for (j = 0; j < squad.length; j++) {
        if (newArr[k] === squad[j]) {
          var template = `<div class="notice warning">Estuvieron juntas : ${student[newArr[k]].name.first}  y  ${studentSelect.name.first}<a class="closebtn" onclick="this.parentElement.style.display='none';">&times;</a> </div>`;
       
          box2.innerHTML += template;
          validate2 = false;
        } 
      }
    }

    return studentSelect;
  });
}

// Validación 3 : Hay 2 estudiantes con nivel de inglés mayor de 3

function Validation3(element, squad) {
  var studentSelect;
  var english;
  dbRefObject.on('value', function(snapshot) {
    student = snapshot.val();

    for (i = 0; i < student.length; i++) {
      if (student[i].index === element) {
        studentSelect = student[i];
        english = studentSelect.english;
      }
    }

    squadEnglish = [];
    for (k = 0; k < student.length; k++) {
      for (m = 0; m < squad.length; m++) {
        if (student[k].index === squad[m]) {
          squadEnglish.push(student[k].english);
        }
      }
    }

    englishAdvance = [];
    for (h = 0; h < squadEnglish.length; h++) {
      if (squadEnglish[h] === 3) {
        englishAdvance.push(squadEnglish[h]);
      }
    }

    if (englishAdvance.length > 2) {
      validate3 = false;
      Warming();
    } 
  });
}


// bloqueado al guardar  
// $('#btn-guardar').on('click', function () {
//   $('.bloqueado').attr('draggable', false);
//   $('.container-images').addClass('plomo');
// });

// encontrar el squad y borrar el elemento
function searchSquad(squad, id) {
  for (i = 0; i < squad.length; i++) {
    if (squad[i] === id) {
      var index = squad.indexOf(id);
      if (index > -1) {
        squad.splice(index, 1);
      }
    }
  }
}

function Warming() {
  var box = document.getElementById('warming');

  var message3 = '<div class="notice warning">Hay más de 2 estudiantes con nivel de inglés mayor de 3 <a class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</a> </div>';

  if (!validate3) {
    box.innerHTML += message3;
  }
}


/** ****Table ****/

$('#btnExport').click(function(event) {
  window.open('data:application/vnd.ms-excel,' + $('#dvData').html());
  event.preventDefault();
});

// obteniendo squads:

var squad1t = JSON.parse(localStorage.squad1);
var squad2t = JSON.parse(localStorage.squad2);
var squad3t = JSON.parse(localStorage.squad3);
var squad4t = JSON.parse(localStorage.squad4);
var squad5t = JSON.parse(localStorage.squad5);
var squad6t = JSON.parse(localStorage.squad6);
var squad7t = JSON.parse(localStorage.squad7);
var squad8t = JSON.parse(localStorage.squad8);

var array1 = []; 
var array2 = [];
var array3 = []; 
var array4 = [];
var array5 = [];
var array6 = [];
var array7 = [];
var array8 = [];


//
var arrayemail1 = [];
var arrayemail2 = [];
var arrayemail3 = [];
var arrayemail4 = [];
var arrayemail5 = [];
var arrayemail6 = [];
var arrayemail7 = [];
var arrayemail8 = [];

dbRefObject.on('value', function(snap) {
  var nameStudents = snap.val();

  var colum1 = [squad1t[0], squad2t[0], squad3t[0], squad4t[0], squad5t[0], squad6t[0], squad7t[0], squad8t[0]];
  var colum2 = [squad1t[1], squad2t[1], squad3t[1], squad4t[1], squad5t[1], squad6t[1], squad7t[1], squad8t[1]];
  var colum3 = [squad1t[2], squad2t[2], squad3t[2], squad4t[2], squad5t[2], squad6t[2], squad7t[2], squad8t[2]];
  var colum4 = [squad1t[3], squad2t[3], squad3t[3], squad4t[3], squad5t[3], squad6t[3], squad7t[3], squad8t[3]];
  var colum5 = [squad1t[4], squad2t[4], squad3t[4], squad4t[4], squad5t[4], squad6t[4], squad7t[4], squad8t[4]];
  var colum6 = [squad1t[5], squad2t[5], squad3t[5], squad4t[5], squad5t[5], squad6t[5], squad7t[5], squad8t[5]];
  var colum7 = [squad1t[6], squad2t[6], squad3t[6], squad4t[6], squad5t[6], squad6t[6], squad7t[6], squad8t[6]];
  var colum8 = [squad1t[7], squad2t[7], squad3t[7], squad4t[7], squad5t[7], squad6t[7], squad7t[7], squad8t[7]];


  memberSquad(colum2, array2, arrayemail1, nameStudents, '#squad2t') ;
  memberSquad(colum3, array3, arrayemail2, nameStudents, '#squad3t') ;
  memberSquad(colum4, array4, arrayemail3, nameStudents, '#squad4t') ;
  memberSquad(colum5, array5, arrayemail4, nameStudents, '#squad5t') ;
  memberSquad(colum6, array6, arrayemail5, nameStudents, '#squad6t') ;
  memberSquad(colum7, array7, arrayemail6, nameStudents, '#squad7t') ;
  memberSquad(colum8, array8, arrayemail7, nameStudents, '#squad8t') ;
  console.log(arrayemail1);
  // var template = `<input>${element.email}`;
  // $(dom).append(template);

  arrayemail1.map(element => {
    var templa = ` <div class="center-align">${element}<div>`;
    console.log(templa);
    $('.alumna1').append(templa);


  });

});

$('#gmail').on('click', function() {
  window.location.href = '../views/email.html';
});

function memberSquad(squad, array, arrayemail, arrayTotal, dom) {
  for (p = 0; p < squad.length;p++) {
    for (q = 0; q < arrayTotal.length ; q++) {
      if (squad[p] === arrayTotal[q].index) {
        array.push(arrayTotal[q].name);   
        arrayemail.push(arrayTotal[q].email);
      }
    }
  }


  array.map(element => {
    var template = `<td>${element.first} ${element.last}</td>`;
    $(dom).append(template);
  });
}
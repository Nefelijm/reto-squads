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


/****Funcionalidad de Squas */

const dbRefObject = firebase.database().ref();

organizar();
var newSq1
var newSq2
var newSq3
var newSq4
var newSq5
var validate1 = true;
var validate2 = true;
var validate3 = true;

function organizar() {
  // sincronizar cambios
  dbRefObject.on('value', function (snap) {
    console.log(snap.val());

    // STUDENTS
    var students = snap.val();
    var sq1 = [];
    var sq2 = [];
    var sq3 = [];
    var sq4 = [];
    var sq5 = [];
    var arrStudiantesProm = [];
    students.forEach(function (element) {
      var promStudent;
      var englishStudents = element.english;
      var englishNote;

      //console.log(englishStudents);
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
      // console.log(promStudentArr);
      arrStudiantesProm.push([element.index, promStudent]);
    });
    bubble(arrStudiantesProm);
    //console.log(arrStudiantesProm);
    var arrMax = arrStudiantesProm.slice(0, 10);
    var arrPro = arrStudiantesProm.slice(10, 20);
    var arrMin = arrStudiantesProm.slice(20, 30);


    var x = Math.floor((Math.random() * 10) + 1);
    sq1.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 1)) + 1);
    sq2.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 2)) + 1);
    sq3.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 3)) + 1);
    sq4.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 4)) + 1);
    sq5.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 5)) + 1);
    sq1.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 6)) + 1);
    sq2.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 7)) + 1);
    sq3.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 8)) + 1);
    sq4.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
    x = Math.floor((Math.random() * (x - 9)) + 1);
    sq5.push((arrMax.splice(x, 1)), (arrPro.splice(x, 1)), (arrMin.splice(x, 1)));
    var numStudent = 6;

    console.log(sq1);




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

    console.log(newSq1, newSq2, newSq3, newSq4);




    function obtenerSprint() {
      sprintNew = (Object.keys(students[0].soft_skills)).length + 1;
      return sprintNew;
    }
    // cambiar el ultimo sprint
    document.getElementById('number-sprint').textContent = obtenerSprint();

    // agregando al DOM
    dbRefObject.on('value', function (snapshot) {
      student = snapshot.val();

      function pintarSquad(squead, container) {
        var template = '';
        for (let i = 0; i < squead.length; i++) {
          for (let j = 0; j < student.length; j++) {
            if (squead[i] === student[j].index) {
              //console.log(student[j].name.first);
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


              template += `<div id="${squead[i]}" class="col m4 mt-5 bloqueado" draggable=true>
            <img src="assets/img/user.png" alt="" class="circle image-student" height="50px" width="50px"> ${start}
            <p class="name-student">${names}  ${last} </p>
            <p><b>Tech:</b> ${(tech * 100).toFixed(0)}%</p>
            <p><b>Soft Skills:</b> ${(soft * 100).toFixed(0)}%</p>
            
          </div>`;

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
    });
  });
}
$('#btn-reorganizar').on('click', function () {
  $('#sq1').empty();
  $('#sq2').empty();
  $('#sq3').empty();
  $('#sq4').empty();
  $('#sq5').empty();
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
    newSq1.push(idName);
    console.log(newSq1);
    Validation1(newSq1);
    Validation1(newSq2);
    Validation1(newSq3);
    Validation1(newSq4);
    Validation1(newSq5);
    Validation2(idName, newSq1);
    Validation3(idName, newSq1);

    event.target.appendChild(document.getElementById(idName));
  }
  if (event.target.dataset.box === 'marco-2') {


    searchSquad(newSq1, idName);
    searchSquad(newSq3, idName);
    searchSquad(newSq4, idName);
    searchSquad(newSq5, idName);

    newSq2.push(idName);
    // console.log(newSq2);
    Validation1(newSq1);
    Validation1(newSq2);
    Validation1(newSq3);
    Validation1(newSq4);
    Validation1(newSq5);
    Validation2(idName, newSq2);
    Validation3(idName, newSq2);
    
    event.target.appendChild(document.getElementById(idName));
  }
  if (event.target.dataset.box === 'marco-3') {
    searchSquad(newSq1, idName);
    searchSquad(newSq2, idName);
    searchSquad(newSq4, idName);
    searchSquad(newSq5, idName);
    newSq3.push(idName);
    console.log(newSq3);
    Validation1(newSq1);
    Validation1(newSq2);
    Validation1(newSq3);
    Validation1(newSq4);
    Validation1(newSq5);
    Validation2(idName, newSq3);
    Validation3(idName, newSq3);
    event.target.appendChild(document.getElementById(idName));
  }
  if (event.target.dataset.box === 'marco-4') {
    searchSquad(newSq1, idName);
    searchSquad(newSq3, idName);
    searchSquad(newSq2, idName);
    searchSquad(newSq5, idName);
    newSq4.push(idName);
    console.log(newSq4);
    Validation1(newSq1);
    Validation1(newSq2);
    Validation1(newSq3);
    Validation1(newSq4);
    Validation1(newSq5);
    Validation2(idName, newSq4);
    Validation3(idName, newSq4);

    event.target.appendChild(document.getElementById(idName));
  }
  if (event.target.dataset.box === 'marco-5') {
    searchSquad(newSq1, idName);
    searchSquad(newSq3, idName);
    searchSquad(newSq4, idName);
    searchSquad(newSq2, idName);
    newSq5.push(idName);
    console.log(newSq5);
    Validation1(newSq1);
    Validation1(newSq2);
    Validation1(newSq3);
    Validation1(newSq4);
    Validation1(newSq5);
    Validation2(idName, newSq5);
    Validation3(idName, newSq5);
    event.target.appendChild(document.getElementById(idName));
  }

  Warming();
  
}

// validación1 : número de integrantes de squad
function Validation1(squad) {

  if (squad.length < 6) {
    alert('El número de personas del squad es 7')
    validate1 = false;
    console.log(validate1);
  }
  
}



// Validación2 : Hay 2 estudiantes que ya han estado juntas antes. Estudiante 1 y 2. 

function Validation2(element, squad) {
  var studentSelect;
  var indexStudent;
  dbRefObject.on('value', function (snapshot) {
    student = snapshot.val();

    for (i = 0; i < student.length; i++) {
      if (student[i].index === element) {
        studentSelect = student[i];
        indexStudent = student[i].index;

      }
    }
    // convirtiendo objeto en array
    var array = $.map(studentSelect.companeras, function (value, index) {
      return [value];
    });

    // Agrupando a todas las compañeras en un solo array
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
      newArr = newArr.concat(array[i]);
    }

    // Borrando el elemento 

    searchSquad(newArr, indexStudent);

    // Comparar los integrantes del nuevo squad con la lista de compañeras
    for (k = 0; k < newArr.length; k++) {
      for (j = 0; j < squad.length; j++) {
        if (newArr[k] === squad[j]) {
          alert('ya estuvieron juntas ' + squad[j]);
          validate2 = false;
        }
        else {
          validate2 = true;
        }
      }
    }

    return studentSelect
  })

}

// Validación 3 : Hay 2 estudiantes con nivel de inglés mayor de 3

function Validation3(element, squad) {
  var studentSelect;
  var english;
  dbRefObject.on('value', function (snapshot) {
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

          squadEnglish.push(student[k].english)

        }
      }
    }

    englishAdvance = [];
    for (h = 0; h < squadEnglish.length; h++) {
      if (squadEnglish[h] === 3) {
        englishAdvance.push(squadEnglish[h])
      }

    }

    if (englishAdvance.length > 2) {
      alert('Hay más de 2 estudiantes con nivel de inglés mayor de 3')
      validate3 = false;
    }
    else {
      validate3 = true;
    }



  })

}



// bloqueado al guardar  
$('#btn-guardar').on('click', function () {
  $('.bloqueado').attr('draggable', false);
  $('.container-images').addClass('plomo');
});

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

  var message1 = '<div>Advertencia Validacion 1</div>';
  var message2 = '<div>Advertencia Validacion 2</div>';
  var message3 = '<div>Advertencia Validacion 3</div>';

  if (!validate1) {
    box.innerHTML += message1;
  }
  

}
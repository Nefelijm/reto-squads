var config = {
  apiKey: 'AIzaSyAAtrPpz9IUt-U-OITqwN1Bj6eGFegAwnE',
  authDomain: 'squadsdist.firebaseapp.com',
  databaseURL: 'https://squadsdist.firebaseio.com',
  projectId: 'squadsdist',
  storageBucket: 'squadsdist.appspot.com',
  messagingSenderId: '936978345317'
};

firebase.initializeApp(config);
const dbRefObject = firebase.database().ref();


/** ****Table ****/

$("#btnExport").click(function (e) {
  window.open('data:application/vnd.ms-excel,' + $('#dvData').html());
  e.preventDefault();
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

console.log(squad1t);

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
  console.log(nameStudents);
  var colum1 = [squad1t[0], squad2t[0], squad3t[0], squad4t[0], squad5t[0], squad6t[0], squad7t[0], squad8t[0]];
  var colum2 = [squad1t[1], squad2t[1], squad3t[1], squad4t[1], squad5t[1], squad6t[1], squad7t[1], squad8t[1]];
  var colum3 = [squad1t[2], squad2t[2], squad3t[2], squad4t[2], squad5t[2], squad6t[2], squad7t[2], squad8t[2]];
  var colum4 = [squad1t[3], squad2t[3], squad3t[3], squad4t[3], squad5t[3], squad6t[3], squad7t[3], squad8t[3]];
  var colum5 = [squad1t[4], squad2t[4], squad3t[4], squad4t[4], squad5t[4], squad6t[4], squad7t[4], squad8t[4]];
  var colum6 = [squad1t[5], squad2t[5], squad3t[5], squad4t[5], squad5t[5], squad6t[5], squad7t[5], squad8t[5]];
  var colum7 = [squad1t[6], squad2t[6], squad3t[6], squad4t[6], squad5t[6], squad6t[6], squad7t[6], squad8t[6]];
  var colum8 = [squad1t[7], squad2t[7], squad3t[7], squad4t[7], squad5t[7], squad6t[7], squad7t[7], squad8t[7]];

  console.log(colum1);
  memberSquad(colum1, array1, arrayemail1, nameStudents, '#squad1t') ;
  memberSquad(colum2, array2, arrayemail2, nameStudents, '#squad2t') ;
  memberSquad(colum3, array3, arrayemail3, nameStudents, '#squad3t') ;
  memberSquad(colum4, array4, arrayemail4, nameStudents, '#squad4t') ;
  memberSquad(colum5, array5, arrayemail5, nameStudents, '#squad5t') ;
  memberSquad(colum6, array6, arrayemail6, nameStudents, '#squad6t') ;
  memberSquad(colum7, array7, arrayemail7, nameStudents, '#squad7t') ;
  memberSquad(colum8, array8, arrayemail8, nameStudents, '#squad8t') ;
  
  arrayemail1.map(element => {
        var templa = ` <div>${element}<div>`;
        var templa = ` <div class="center-align">${element}<div>`;
         console.log(templa);
         $('.alumna1').append(templa);
  })

  arrayemail2.map(element => {
    var templa = ` <div>${element}<div>`;
    var templa = ` <div class="center-align">${element}<div>`;
     console.log(templa);
     $('.alumna2').append(templa);
})

arrayemail3.map(element => {
  var templa = ` <div>${element}<div>`;
  var templa = ` <div class="center-align">${element}<div>`;
   console.log(templa);
   $('.alumna3').append(templa);
})

arrayemail4.map(element => {
  var templa = ` <div>${element}<div>`;
  var templa = ` <div class="center-align">${element}<div>`;
   console.log(templa);
   $('.alumna4').append(templa);
})
arrayemail5.map(element => {
  var templa = ` <div>${element}<div>`;
  var templa = ` <div class="center-align">${element}<div>`;
   console.log(templa);
   $('.alumna5').append(templa);
})
arrayemail6.map(element => {
  var templa = ` <div>${element}<div>`;
  var templa = ` <div class="center-align">${element}<div>`;
   console.log(templa);
   $('.alumna6').append(templa);
})
arrayemail7.map(element => {
  var templa = ` <div>${element}<div>`;
  var templa = ` <div class="center-align">${element}<div>`;
   console.log(templa);
   $('.alumna7').append(templa);
})
arrayemail8.map(element => {
  var templa = ` <div>${element}<div>`;
  var templa = ` <div class="center-align">${element}<div>`;
   console.log(templa);
   $('.alumna8').append(templa);
})
     
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
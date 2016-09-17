 // Initialize Firebase
 console.log('hello')
 var config = {
   apiKey: "AIzaSyBuJXH1KaAiek-h6sYgROsJtMY1Q1DSKKE",
   authDomain: "testing-3f6ec.firebaseapp.com",
   databaseURL: "https://testing-3f6ec.firebaseio.com",
   storageBucket: "testing-3f6ec.appspot.com",
   messagingSenderId: "207518226344"
 };
 firebase.initializeApp(config);

 var database = firebase.database();

database.ref().on("value", function(snapshot) {
  

  var data = snapshot.val();
  $('.crap').empty();
  $.each(data, function(key, value){
    console.log(value);
    var converted = moment(new Date(value.start)).format("X");
    var monthsDiff = moment(converted).diff(moment(), "months");
    monthsDiff = parseInt(monthsDiff)
    console.log(monthsDiff)
    var newRow = $('<tr>');

    newRow.addClass("crap")
    var nameTd = $('<td>');
    var roleTd = $('<td>');
    var startTd = $('<td>');
    var monthTd = $('<td>');
    var rateTd = $('<td>');
    var totalTd = $('<td>');

    nameTd.text(value.name)
    roleTd.text(value.role)
    monthTd.text(monthsDiff)
    startTd.text(value.start)
    rateTd.text(value.rate)
    totalTd.text(value.rate*monthsDiff)

    newRow.append(nameTd)
    newRow.append(roleTd)
    newRow.append(startTd)
    newRow.append(monthTd)
    newRow.append(rateTd)
    newRow.append(totalTd)

    $('.table').append(newRow);



  });


 });

$("#addEmployee").on('click', function(){

    var name = $("#nameInput").val().trim();
    var role = $("#roleInput").val().trim();
    var start = $("#startDateInput").val().trim();
    var months = 8
    var rate = $("#monthlyRateInput").val().trim();
    var total = 8

    database.ref().push({
      name:name,
      role:role,
      start:start,
      months:months,
      rate:rate,
      total:total
    })



return false;
})
$(document).ready(function(){
  $("form#factorial").submit(function(event){
    event.preventDefault();
var answer = 1;
var num = parseInt($("#factorInput").val());

if (num === 0) {
  var answer = 1;
} else {
  for (var index = num; index > 0; index -= 1) {
    answer *= index;
      };
};
$("#factorial-answer").text(answer);
});




$("form#palin").submit(function(event){
  event.preventDefault();
var string = $("#palinInput").val();
var array = string.split('');
var array2 = array.slice();
array.reverse();
  if (array.toString() === array2.toString())
{ $("#palin-answer").text("palindrome");

} else { $("#palin-answer").text("not a palindrome"); }
});








$("form#primeNum").submit(function(event){
  event.preventDefault();

var usernum = parseInt($("#primeInput").val());
var arrayPrime = [];
for (var index = 2; index <= usernum; index += 1) {
  arrayPrime.push(index);
}

for (var prime = 2; prime <= usernum; prime += 1) {
	for (var elem = arrayPrime.length; elem >= 1; elem -= 1) {
      if (parseInt(arrayPrime[elem]) % prime === 0 && prime != parseInt(arrayPrime[elem])) {
            var removed = arrayPrime.splice(elem, 1);
        }
}
}

alert(arrayPrime);
for (var outvar = 0; outvar <= arrayPrime.length; outvar += 1) {
	if (parseInt(arrayPrime[outvar]) < usernum) {
$("#prime-answer").append(arrayPrime[outvar] + " ");
    //console.log(array[outvar]);
    }
}






});
});

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
});

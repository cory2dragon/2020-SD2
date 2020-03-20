const sad = document.getElementById("sad");
var theScore = 0;
var counter = 1;
function countUp(evt){
  if (theScore != 15){
    for (var i = 1; i<7;i++)
    {
      let divN = "#div" + i
      counter = Number($(divN).text());
      console.log(counter);
      counter = counter + 1;
      $(divN).text(counter);
    }
  }
  else{
    $("#tTime").text(counter);    
  }
}//end countUp
function onChange(evt) {
  let correct = $(this).data("correct");
  let response = $(this).val();
  console.log(response);
  if (correct == response) {
    $(this)
      .removeClass("incorrect")
      .addClass("correct");
      theScore = Number($("#score").text());
      theScore = theScore + 1;
      console.log(theScore);
      $("#score").text(theScore);
    console.log("correct");
  }if (correct != response && response != "") {
    sad.play();
    let errorN = Number($("#error").text());
    errorN = errorN + 1;
    $("#error").text(errorN);
    $(this)
      .removeClass("correct")
      .addClass("incorrect");
  }
}//end onChange

$("input").change(onChange);
countUp();
setInterval(countUp,1000);

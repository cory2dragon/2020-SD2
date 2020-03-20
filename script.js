const sad = document.getElementById("sad");
function countUp(evt){
  for (var i = 1; i<7;i++)
  {
    var divN = "#div" + i
    let counter = Number($(divN).text());
    counter = counter + 1;
    $(divN).text(counter);
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
      let theScore = Number($("#score").text());
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

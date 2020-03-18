function countUp(evt){
  for (var i = 1; i<7;i++)
  {
    var divN = "#div" + i
    let counter = Number($(divN).text());
    counter = counter + 1;
    console.log(counter);
    $(divN).text(counter);
  }
}//end countUp
function onChange(evt) {
  let correct = $(this).data("correct");
  let response = $(this).val();
  console.log(md5(response));
  if (correct == md5(response)) {
    $(this)
      .removeClass("incorrect")
      .addClass("correct");
    let theScore = Number($("#score").text());
    theScore = theScore + 1;
    $("#score").text(theScore);
  } else {
    if (Math.random() > 0.1) {
      sad.play();
    }
    $(this)
      .removeClass("correct")
      .addClass("incorrect");
  }
}//end onChange

$("input").change(onChange);
countUp();
setInterval(countUp,1000);

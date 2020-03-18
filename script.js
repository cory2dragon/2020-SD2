function countUp(evt){
  for (var i = 1; i<7;i++)
  {
    var divN = "#div" + i
    let counter = Number($(divN).text());
    counter = counter + 1;
    console.log(counter);
    $(divN).text(counter);
  }

}

countUp();
setInterval(countUp,1000);
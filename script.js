$(document).ready(function(){
  function rolldice() {
    //Place your code here 
    var x = Math.random()*5+1;
    return Math.round(x);
  };

  $("#roll-dice").click(function(){
    var dice = rolldice();
    console.log(dice)
    if(dice===1)
    $("#container").append("<img src='images/1.png'>");
   
    if(dice===2)
    $("#container").append("<img src='images/2.png'>");
    
     if(dice===3)
    $("#container").append("<img src='images/3.png'>");
    
     if(dice===4)
    $("#container").append("<img src='images/4.png'>");
     
     if(dice===5)
    $("#container").append("<img src='images/5.png'>");
    
     if(dice===6)
    $("#container").append("<img src='images/6.png'>");
  });
  
});


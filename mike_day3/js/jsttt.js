

$(document).ready(function() {
  //  var tictactoe = (function (){
  //    var turnCount = 0;
  //    var gameBoard = []
  //  })
  // $(".grid").on("click", "td", function(){
  //   $(".cell").append("<img class = 'x' src = 'css/x_image.png'/>");
  //   // alert("clicked");
  // });
// <img class = 'x' src = 'css/x_image.png'/>

  var turn_count = 0;
// this displays x and o images for markers
  var player_1 = "<img class = 'x' src = 'css/x_image.png'/>";
  var player_2 = "<img class = 'o' src = 'css/o_image.png'/>";

  var winSpots = [
                   ["field1", "field2", "field3"],
                   ["field4", "field5", "field6"],
                   ["field7", "field8", "field9"],
                   ["field1", "field5", "field9"],
                   ["field3", "field5", "field7"]
                 ];
      // var player_1_turn = 1, 3, 5, 7, 9;
      // var player_2_turn = 2, 4, 6, 8;
// this allows only one image to be place pe click per cell
$(".cell").one("click", function(){
   turn_count++;
        // for (var i=0; i < turn_count.length; i++)
        //   turn_count = (i + 1);
// this is alternating between players
  if (turn_count%2 === 0 ){
    $(this).append(player_2).addClass('playerTwo');
  } else {
    $(this).append(player_1).addClass('playerOne');
  }
// comment: display game over
  if (turn_count === 9) {
    alert("Game Over!");
  }
  // UGHK THIS IS UGGGGLLLY CODE. Must learn loops.
  if ($("#field1").hasClass("playerOne") && $("#field2").hasClass("playerOne") && $("#field3").hasClass("playerOne")){
    alert("Player One Wins!");
  }

  if ($("#field4").hasClass("playerOne") && $("#field5").hasClass("playerOne") && $("#field6").hasClass("playerOne")){
    alert("Player One Wins!");
  }
  if ($("#field7").hasClass("playerOne") && $("#field8").hasClass("playerOne") && $("#field9").hasClass("playerOne")){
    alert("Player One Wins!");
  }
  if ($("#field1").hasClass("playerOne") &&
  $("#field5").hasClass("playerOne") && $("#field9").hasClass("playerOne")){
    alert("Player One Wins!");
  }
  if ($("#field3").hasClass("playerOne") && $("#field5").hasClass("playerOne") && $("#field7").hasClass("playerOne")){
    alert("Player One Wins!");
  }
  if ($("#field1").hasClass("playerOne") && $("#field4").hasClass("playerOne") && $("#field7").hasClass("playerOne")){
    alert("Player One Wins!");
  }
  if ($("#field2").hasClass("playerOne") && $("#field5").hasClass("playerOne") && $("#field8").hasClass("playerOne")){
      alert("Player One Wins!");
  }
  if ($("#field3").hasClass("playerOne") && $("#field6").hasClass("playerOne") && $("#field9").hasClass("playerOne")){
          alert("Player One Wins!");}

   if ($("#field1").hasClass("playerTwo") && $("#field2").hasClass("playerTwo") && $("#field3").hasClass("playerTwo")){
    alert("Player Two Wins!");
  }
  if ($("#field4").hasClass("playerTwo") && $("#field5").hasClass("playerTwo") && $("#field6").hasClass("playerTwo")){
    alert("Player Two Wins!");
  }
  if ($("#field7").hasClass("playerTwo") && $("#field8").hasClass("playerTwo") && $("#field9").hasClass("playerTwo")){
    alert("Player Two Wins!");
  }
  if ($("#field1").hasClass("playerTwo") && $("#field5").hasClass("playerTwo") && $("#field9").hasClass("playerTwo")){
    alert("Player Two Wins!");
  }
  if ($("#field3").hasClass("playerTwo") && $("#field5").hasClass("playerTwo") && $("#field7").hasClass("playerTwo")){
    alert("Player Two Wins!");
  }
  if ($("#field1").hasClass("playerTwo") && $("#field4").hasClass("playerTwo") && $("#field7").hasClass("playerTwo")){
    alert("Player Two Wins!");
  }
  if ($("#field2").hasClass("playerTwo") && $("#field5").hasClass("playerTwo") && $("#field8").hasClass("playerTwo")){
      alert("Player Two Wins!");
  }
  if ($("#field3").hasClass("playerTwo") && $("#field6").hasClass("playerTwo") && $("#field9").hasClass("playerTwo")){
          alert("Player Two Wins!");
  }


})
});

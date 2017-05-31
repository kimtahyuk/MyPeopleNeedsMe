

//이건 player1용
// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
}, false);


//var x = event.which || event.keyCode; @@@@
//http://www.cambiaresearch.com/articles/15/javascript-key-codes
//player1.who컨트롤
var update_player1_control = function(modifier) {
    if (87 in keysDown) { // player1 holding up
        player1.y -= player1.move_speed * modifier;
    }
    if (83 in keysDown) { // player1 holding down
        player1.y += player1.move_speed * modifier;
    }
    if (65 in keysDown) { // player1 holding left
        player1.x -= player1.move_speed * modifier;
        player1.toward = 0;
    }
    if (68 in keysDown) { // player1 holding right
        player1.x += player1.move_speed * modifier;
        player1.toward = 1;
    }


};
// 여기까지 player1용


//delta/1000 반복
var update_AI_players_control = function(modifier, who) {
    if (who.ai_up == true) {
        who.y -= who.move_speed * modifier;
        who.ai_up = false
    }
    if (who.ai_down == true) {
        who.y += who.move_speed * modifier;
        who.ai_down = false
    }
    if (who.ai_left == true) {
        who.x -= who.move_speed * modifier;
        who.ai_left = false
    }
    if (who.ai_right == true) {
        who.x += who.move_speed * modifier;
        who.ai_right = false
    }
};


















var update_default_AI = function() {


    default_strategy(player2, player1)

    // default_strategy(player2, player3)
    // default_strategy(player2, player4)



    // default_strategy(player3, player1)
    default_strategy(player3, player2)
   // default_strategy(player3, player4)


    // default_strategy(player4, player1)
    // default_strategy(player4, player2)
    default_strategy(player4, player3)

}






//delta / 1000 반복
var default_strategy = function(who, whom) {

    function charge_in_upon_whom() {
      if (whom.y < who.y) { // up
        who.ai_up = true
      }
      if (whom.y > who.y) { // down
        who.ai_down = true
      }
      if (whom.x < who.x) { // left
        who.ai_left = true
      }
      if (whom.x > who.x) { // right
        who.ai_right = true
      }
    }

    function retreat_to_camp() {
      if (who.camp_y < who.y) { // up
        who.ai_up = true
      }
      if (who.camp_y > who.y) { // down
        who.ai_down = true
      }
      if (who.camp_x < who.x) { // left
        who.ai_left = true
      }
      if (who.camp_x > who.x) { // right
        who.ai_right = true
      }
    }

  //유리하면 whom에게 돌진하고 불리하면 포스트로 퇴각
  if (who.hp > whom.hp) /*whom쪽으로*/ {
    charge_in_upon_whom();
  } else /*본진으로*/ {
    retreat_to_camp();
  }
};
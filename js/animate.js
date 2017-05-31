

//셋인터벌로 반복되는데 파라미터 전달해도 되려나?
var animate = function() {
    frame++;
    if (frame == 100) frame = 0; {
        ctx.clearRect(0, 0, c_map.width, c_map.height);

        //프레임 표시
        ctx.font = "bold 16px Verdana";
        ctx.fillText("frame : "+ frame, 5, 15);

        camp_heal(player1)
        camp_heal(player2)
        camp_heal(player3)
        camp_heal(player4)
        draw_object(player1);
        draw_object(player2);
        draw_object(player3);
        draw_object(player4);
        //유닛 충돌 who.meet = true;

        //이 난국을 파해치기 위해선 서있는(정지) 포즈가 있어야한다.
        draw_state(player1);
        if (player1.toward == 0) {
            draw_hero_walk_left(player1);
        } else {
            draw_hero_walk_right(player1);
        }
        
        draw_state(player2);
        if (player2.ai_left == true){
            draw_hero_walk_left(player2);
        } else {
            draw_hero_walk_right(player2);
        }
        draw_state(player3);
        draw_hero_walk_left(player3);

        draw_state(player4);
        draw_hero_walk_left(player4);



        meetCheck(player1, player2);
        meetCheck(player1, player3);
        meetCheck(player1, player4);
        meetCheck(player2, player1);
        meetCheck(player2, player3);
        meetCheck(player2, player4);
        meetCheck(player3, player1);
        meetCheck(player3, player2);
        meetCheck(player3, player4);
        meetCheck(player4, player1);
        meetCheck(player4, player2);
        meetCheck(player4, player3);





        withinSight(player1, player2);

    }
};











function draw_hero_walk_left(who){

    ctx.drawImage(who.frames_normal_walk_left[frame], who.x, who.y);

}
function draw_hero_walk_right(who){

    ctx.drawImage(who.frames_normal_walk_right[frame], who.x, who.y);

}



function draw_object(who) {
    ctx.drawImage(who.camp_img, who.camp_x, who.camp_y);
}














function withinSight(who, whom) {
  if (who.x < whom.x + whom.width+60 &&
    who.x + who.width+60 > whom.x &&
    who.y < whom.y + whom.height+60 &&
    who.height+60 + who.y > whom.y) {

    who.withinSight = 1;
    whom.withinSight = 1;


  } else {
    who.withinSight = 0;
    whom.withinSight = 0;

  }
}

function meetCheck(who, whom) {
  if (who.x < whom.x + whom.width &&
    who.x + who.width > whom.x &&
    who.y < whom.y + whom.height &&
    who.height + who.y > whom.y) {

 
    whom.meet = true;

    who.hp -= 0.1;
    whom.hp -= 0.1;

  } else {
    who.meet = false;
    whom.meet = false;


  }
}
















function draw_state(who) {
    // face
    var face = new Image();
    face.src = who.face;
    ctx.drawImage(face, who.x + 32, who.y - 80, 54, 63);


    // 연결해주는 선
    ctx.beginPath();
    ctx.moveTo(who.x + 15, who.y);
    ctx.lineTo(who.x + 30, who.y - 48);
    ctx.strokeStyle = "#111111";
    ctx.lineWidth = 1;
    ctx.stroke();


    /// oval hp
    var drawCircle = function(radius, color, lineWidth, percent) {
        percent = Math.min(Math.max(0, percent || 1), 1); //이게 없으면 계속 반복됨
        ctx.beginPath();
        ctx.arc(who.x + 59, who.y - 48, radius, 0, Math.PI * 2 * percent, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round'; // butt, round or square
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    };

    drawCircle(34, '#efefef', 15, 100 / 100);
    drawCircle(34, '#339955', 7, who.hp / 100);
    drawCircle(30, '#ff7711', 4, who.charm / 100);


    //데이터들 표시
    ctx.font = "bold 12px Verdana";
    ctx.fillText(who.name, who.x + 95, who.y - 70);
    ctx.fillText("Gold:" + who.gold, who.x + 95, who.y - 60);


}



function draw_state_alt1(who) {
    // face
    var face = new Image();
    face.src = who.face;
    ctx.drawImage(face, who.x - 28, who.y + 80, 54, 63);


    // 연결해주는 선
    ctx.beginPath();
    ctx.moveTo(who.x + 10, who.y + 40);
    ctx.lineTo(who.x - 10, who.y + 88);
    ctx.strokeStyle = "#111111";
    ctx.lineWidth = 1;
    ctx.stroke();


    /// oval hp
    var drawCircle = function(radius, color, lineWidth, percent) {
        percent = Math.min(Math.max(0, percent || 1), 1); //이게 없으면 계속 반복됨
        ctx.beginPath();
        ctx.arc(who.x, who.y + 112, radius, 0, Math.PI * 2 * percent, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round'; // butt, round or square
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    };

    drawCircle(34, '#efefef', 15, 100 / 100);
    drawCircle(34, '#339955', 7, who.hp / 100);
    drawCircle(30, '#ff7711', 4, who.charm / 100);


    //데이터들 표시
    ctx.font = "bold 12px Verdana";
    ctx.fillText(who.name, who.x + 45, who.y + 90);
    ctx.fillText("Gold:" + who.gold, who.x + 45, who.y + 100);


}











function camp_heal(who) {
    if (who.x < who.camp_x + who.camp_width &&
        who.x + who.width > who.camp_x &&
        who.y < who.camp_y + who.camp_height &&
        who.height + who.y > who.camp_y) {

        if (who.hp < 100) {
            who.hp+=0.05;
        }
    } else {

    }
}
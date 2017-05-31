
//무반복
function register_hero(who, xxx, yyy) {
    who.x = xxx;
    who.y = yyy;
    who.width = 20;
    who.height = 20;

    who.frames_normal_walk_left = [];
    var assetsNormal_walk_left =
        [
            'media/normal_walk_left_1.png',
            'media/normal_walk_left_2.png'
        ];

    //frames[1~100]까지 채워주는거
    for (var i = 0; i < 100; i++) {
        if (i < 50) {
            who.frames_normal_walk_left[i] = new Image();
            who.frames_normal_walk_left[i].onload = function() {};
            who.frames_normal_walk_left[i].src = assetsNormal_walk_left[0];
        } else {
            who.frames_normal_walk_left[i] = new Image();
            who.frames_normal_walk_left[i].onload = function() {};
            who.frames_normal_walk_left[i].src = assetsNormal_walk_left[1];
        }
    }


    who.frames_normal_walk_right = [];
    var assetsNormal_walk_right =
        [
            'media/normal_walk_right_1.png',
            'media/normal_walk_right_1.png'
        ];

    //frames[1~100]까지 채워주는거
    for (var i = 0; i < 100; i++) {
        if (i < 50) {
            who.frames_normal_walk_right[i] = new Image();
            who.frames_normal_walk_right[i].onload = function() {};
            who.frames_normal_walk_right[i].src = assetsNormal_walk_right[0];
        } else {
            who.frames_normal_walk_right[i] = new Image();
            who.frames_normal_walk_right[i].onload = function() {};
            who.frames_normal_walk_right[i].src = assetsNormal_walk_right[1];
        }
    }












    who.camp_img = new Image();
    who.camp_img.onload = function() {};
    who.camp_img.src = "media/camp.jpg";

    who.camp_x = xxx;
    who.camp_y = yyy;
    who.camp_width = 60;
    who.camp_height = 60;






    who.hp = 100;
    who.charm = 100;
    who.gold = 2000;
    who.follower = 5;


    who.ai_up = false;
    who.ai_down = false;
    who.ai_left = false;
    who.ai_right = false;

    who.move_speed = 40;
    who.meet = 0;
}


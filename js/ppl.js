
function ppl_huns() {

    // this.obj = {
    //     speed: 70, // 젤 빠른게(제트기정도) 90나와야됨
    //     x: 100,
    //     y: 100,
    //     width: 40,
    //     height: 40,
    //     troops: 5000

    // };

    this.name = "huns";
    

    this.frames = [];
    assetsNormal =
        [
            'media/mob100_huns1.png',
            'media/mob100_huns2.png'
        ];


    //frames[1~100]까지 채워주는거
    for (var i = 0; i < 100; i++) {
        if (i < 50) {
            this.frames[i] = new Image();
            this.frames[i].onload = function() {};
            this.frames[i].src = assetsNormal[0];
        } else {
            this.frames[i] = new Image();
            this.frames[i].onload = function() {};
            this.frames[i].src = assetsNormal[1];
        }
    }

}
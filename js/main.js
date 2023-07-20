function playMusic() {
  var audioEle = document.getElementById("audio");
  if (audioEle.paused){
    audioEle.play();
  }else {
    audioEle.pause();
  }
}
    var ispaly=true;
    $("#wenan").click(function(){
        play();
    });

    var player = document.getElementById("audio");
    play();
    function play(){
        player.play();
        // swal("请问是否开启音乐一边浏览一边听呢？ \n 暂时无法自动播放下一首哦！！！ \n 只能手动刷新哦！！", {
        //     buttons: {
        //         cancel: "开启",
        //         allow: "关闭"
        //     }
        // }).then(function(value) {
        //     if (value == "allow") {
        //         player.pause()
        //     } else {
        //         player.play();
        //     }
        // });
    }

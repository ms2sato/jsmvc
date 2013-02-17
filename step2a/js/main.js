$(function(){
    boot();
});

function boot(){

    var app = new MVC.App();
    MVC.app = app; //シングルトン扱い
    app.init();

}


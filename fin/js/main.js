$(function(){
    MVC.jqueryInitialized = true;
    boot();
});

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(function(){
    MVC.chartInitialized = true;
    boot();
});

function boot(){

    if(MVC.jqueryInitialized && MVC.chartInitialized){
        var app = new MVC.App();
        MVC.app = app;
        app.init();
    }

}


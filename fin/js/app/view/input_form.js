// 外部に変数、関数の定義が公開されないようにガード
(function(global){

    //アプリのネームスペースはMVCとします。
    if(!global.MVC){
        global.MVC = {};
    }


    var InputFormView = Backbone.View.extend({

        events: {
            "click .addButton":   "addScore"
        },

        initialize: function() {
        },

        render: function() {
        },

        addScore:function(){
            var score = new MVC.Score();

            //値が追加された。addイベントが発火する
            MVC.app.model.scoreCollection.add(score);
        }

    });

    global.MVC.InputFormView = InputFormView;

})(this);


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
            score.set({
                name: this.$('input[name=name]').val(),
                js: parseInt(this.$('input[name=js]').val()),
                cpp: parseInt(this.$('input[name=cpp]').val()),
                ruby: parseInt(this.$('input[name=ruby]').val()),
                php: parseInt(this.$('input[name=php]').val())
            });

            //値が追加された。addイベントが発火する
            this.collection.add(score);
        }

    });

    global.MVC.InputFormView = InputFormView;

})(this);


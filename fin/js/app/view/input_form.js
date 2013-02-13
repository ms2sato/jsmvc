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

            var self = this;
            function setInteger(score, lang){
                score.set(lang, parseInt(self.$('input[name=' + lang + ']').val()));
            }

            var score = new MVC.Score();
            score.set('name', this.$('input[name=name]').val());
            setInteger(score, 'js');
            setInteger(score, 'cpp');
            setInteger(score, 'ruby');
            setInteger(score, 'php');

            //値が追加された。addイベントが発火する
            MVC.app.model.scoreCollection.add(score);
        }

    });

    global.MVC.InputFormView = InputFormView;

})(this);


// 外部に変数、関数の定義が公開されないようにガード
(function(global){

    //アプリのネームスペースはMVCとします。
    if(!global.MVC){
        global.MVC = {};
    }


    var InputFormView = Backbone.View.extend({

        events: {
            "click .addButton":   "addScore", //イベントと対象の要素を指定：呼ばれるメソッド
            "click .clearButton": "clear" //Q2.2模範解答
        },

        initialize: function() {
        },

        render: function() {
            return this;
        },

        addScore:function(){

            var self = this;
            function setInteger(score, lang){
                score.set(lang, parseInt(self.$('input[name=' + lang + ']').val()));
            }

            var score = new MVC.Score();
            score.on('change:name', function(score){
                console.log('change:name:', score.get('name'));
            });
            score.set('name', this.$('input[name=name]').val());
            // Q2.1の模範解答
            setInteger(score, 'js');
            setInteger(score, 'cpp');
            setInteger(score, 'ruby');
            setInteger(score, 'php');

            //値が追加された。addイベントが発火する
            MVC.app.model.scoreCollection.add(score);
        },


        // Q2.2の模範解答
        clear:function(){
            this.$('input[name=name]').val('');
            this.$('input[name=js]').val('');
            this.$('input[name=cpp]').val('');
            this.$('input[name=ruby]').val('');
            this.$('input[name=php]').val('');
        }

    });

    global.MVC.InputFormView = InputFormView;

})(this);


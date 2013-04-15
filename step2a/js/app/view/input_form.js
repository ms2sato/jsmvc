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

            var score = new MVC.Score();
            score.on('change:name', function(score, value){
                console.log('change:name:', value);
            });
            score.on('change:js', function(score, value){
                console.log('change:js:', value);
            });
            score.on('change:cpp', function(score, value){
                console.log('change:cpp:', value);
            });
            score.on('change:ruby', function(score, value){
                console.log('change:ruby:', value);
            });
            score.on('change:php', function(score, value){
                console.log('change:php:', value);
            });

            // Q2.1の模範解答
            function setInteger(score, lang){
                score.set(lang, parseInt(self.$('input[name=' + lang + ']').val()));
            }

            score.set('name', this.$('input[name=name]').val());

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


// 外部に変数、関数の定義が公開されないようにガード
(function(global){

    //アプリのネームスペースはMVCとします。
    if(!global.MVC){
        global.MVC = {};
    }


    var InputFormView = Backbone.View.extend({

        events: {
            "click .addButton":   "addScore" //イベントと対象の要素を指定：呼ばれるメソッド
        },

        /**
         * 初期化時に呼ばれる
         */
        initialize: function() {
        },

        /**
         * 自分自身を全更新する際に呼ぶ推奨メソッド。
         * @return 自分自身
         */
        render: function() {
            return this;
        },


        addScore:function(){

            var score = new MVC.Score();
            score.on('change:name', function(score){
                console.log('change:name:', score.get('name'));
            });

            score.set('name', this.$('input[name=name]').val());

            //値が追加された。addイベントが発火する
            MVC.app.model.scoreCollection.add(score);

            //Q2.1: 今はscoreの中身にnameしか反映されていません。他の値も反映させましょう。
            // ヒント：input[name=name]で取れる値は文字列です。parseIntで変換しましょう。

            //Q2.2: 入力された内容を全て消去するクリアボタンを画面に定義して、押すと入力内容が消えるようにしましょう。
            // ヒント: $.val('') で中身を消去できます
        }

    });

    global.MVC.InputFormView = InputFormView;

})(this);


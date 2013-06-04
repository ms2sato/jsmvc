//アプリのネームスペースはMVCとします。
var global = window;
if (!global.MVC) {
    global.MVC = {};
}


MVC.InputFormView = Backbone.View.extend({

    events: {
        "click .addButton": "addScore", //イベントと対象の要素を指定：呼ばれるメソッド
        "click .clearButton": "clear" //Q2模範解答
    },

    /**
     * 初期化時に呼ばれる
     */
    initialize: function () {
    },

    /**
     * 自分自身を全更新する際に呼ぶ推奨メソッド。
     * @return 自分自身
     */
    render: function () {
        return this;
    },


    addScore: function () {

        var score = new MVC.Score();
//            score.on('change:name', function(score){
//                console.log('change:name:', score.get('name'));
//            });

        score.on('change', function (score) {
            console.log('change:name:', score.get('name'));
            console.log('change:cpp:', score.get('cpp'));
            console.log('change:js:', score.get('js'));
            console.log('change:ruby:', score.get('ruby'));
            console.log('change:php:', score.get('php'));
        });

        score.set({
            name: this.$('input[name=name]').val(),
            js: parseInt(this.$('input[name=js]').val()),
            cpp: parseInt(this.$('input[name=cpp]').val()),
            ruby: parseInt(this.$('input[name=ruby]').val()),
            php: parseInt(this.$('input[name=php]').val())
        });

        //値が追加された。addイベントが発火する
        this.collection.add(score);

        //Q2: 入力された内容を全て消去するクリアボタンを画面に定義して、押すと入力内容が消えるようにしましょう。
        // ヒント: $.val('') で中身を消去できます
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


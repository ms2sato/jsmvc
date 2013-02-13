// 外部に変数、関数の定義が公開されないようにガード
(function(global){

    //アプリのネームスペースはMVCとします。
    if(!global.MVC){
        global.MVC = {};
    }

    /**
     * 必要な要素にアクセスできるアプリケーションインスタンス。
     * 基本的にシングルトンで利用する。
     *
     * @constructor
     */
    var Score = Backbone.Model.extend({

        defaults:{
            name: 'Noone',
            js: 50,
            cpp: 50,
            ruby: 50,
            php: 50
        }

    });

    /**
     * Scoreのコレクション
     * @type {*}
     */
    var ScoreCollection = Backbone.Collection.extend({
        model: Score
    });

    //グローバル空間に型を公開する
    global.MVC.Score = Score;
    global.MVC.ScoreCollection = ScoreCollection;

})(this);
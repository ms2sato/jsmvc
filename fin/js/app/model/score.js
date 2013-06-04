// 外部に変数、関数の定義が公開されないようにガード
(function(global){

    //アプリのネームスペースはMVCとします。
    if(!global.MVC){
        global.MVC = {};
    }

    /**
     * ある人の得点のレコード
     * @constructor
     */
    var Score = Backbone.Model.extend({

        defaults: function(){
            return {
                name: 'Noone',
                js: 50,
                cpp: 50,
                ruby: 50,
                php: 50
            }
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
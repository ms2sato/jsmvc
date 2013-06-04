//アプリのネームスペースはMVCとします。
var global = window;
if(!global.MVC){
    global.MVC = {};
}

/**
 * ある人の得点のレコード
 * @constructor
 */
MVC.Score = Backbone.Model.extend({

    /**
     * デフォルトの値を返却します
     */
    defaults: function () {
        return {
            name: 'Noone',
            js: 50,
            cpp: 50,
            ruby: 50,
            php: 50
        };
    }

});

/**
 * Scoreのコレクション
 * @type {*}
 */
MVC.ScoreCollection = Backbone.Collection.extend({
    model: MVC.Score
});

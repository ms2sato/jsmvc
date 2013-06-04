/**
 * ある人の得点のレコード
 * @constructor
 */
var Score = Backbone.Model.extend({

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
var ScoreCollection = Backbone.Collection.extend({
    model: Score
});

// jQueryのエントリポイント
$(function () {
    //モデルの変更をハンドルできることを確認するよ！
    var scoreCollection = new ScoreCollection();
    scoreCollection.on('add', function (score) {
        alert('add score: ' + score.get('name'));
    });


    var score = new Score();

    //セッター的なもの
    score.set('name', 'ジョニー');
    score.set('js', 40);
    score.set('cpp', 20);

    //まとめて指定する事もできます
    score.set({
        ruby: 50,
        php: 80
    });

    //追加すると、addイベントが発生します！
    scoreCollection.add(score);

    // Q1: scoreの変更をconsole.logで見たいです。どうやったら良いでしょう。
    // ヒント: プロパティの変更はchangeイベントで捕まえる事ができます。
    //   （考える事）イベントの定義はどこですべきでしょう？
});
//アプリのネームスペースはMVCとします。
var global = window;
if (!global.MVC) {
    global.MVC = {};
}

/**
 * 必要な要素にアクセスできるアプリケーションインスタンス。
 * 基本的にシングルトンで利用する。
 *
 * @constructor
 */
MVC.App = function () {
    this.model = {};
    this.view = {};
}

MVC.App.prototype.init = function () {

    //モデルの変更をハンドルできることを確認するよ！
    var scoreCollection = new MVC.ScoreCollection();
    scoreCollection.on('add', function (score) {
        alert('add score: ' + score.get('name'));
    });

    this.model.scoreCollection = scoreCollection;


    // ここで作成しているのは今回はアプリが小さなため。
    // 大規模なアプリでは必要なタイミングで作成する方が良い。

    this.view.inputForm = new MVC.InputFormView({
        collection: this.model.scoreCollection,
        el: $("#inputForm")
    });

}
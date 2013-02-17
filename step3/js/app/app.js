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
    var App = function(){
        this.model = {};
        this.view = {};
    }

    /*
        _.extendを利用すれば
         App.prototype.myFunction = function(){}
         をまとめて複数定義できる
     */

    _.extend(App.prototype, {

        init:function(){

            //モデルの変更をハンドルできることを確認するよ！
            var scoreCollection = new MVC.ScoreCollection();
            scoreCollection.on('add', function(score){
                alert('add score: ' + score.get('name'));
            });

            this.model.scoreCollection = scoreCollection;

            this.view.table = new MVC.TableView({
                model: this.model.scoreCollection,
                el: $("#table")
            });

            // ここで作成しているのは今回はアプリが小さなため。
            // 大規模なアプリでは必要なタイミングで作成する方が良い。

            this.view.inputForm = new MVC.InputFormView({
                model: this.model.scoreCollection,
                el: $("#inputForm")
            });
        }
    });


    global.MVC.App = App;

})(this);
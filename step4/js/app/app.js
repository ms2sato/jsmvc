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
        this.status = {};

        this.model.scoreCollection = new MVC.ScoreCollection();
    }

    /*
        _.extendを利用すれば
         App.prototype.myFunction = function(){}
         をまとめて複数定義できる
     */

    _.extend(App.prototype, {

        init:function(){

            // ここで作成しているのは今回はアプリが小さなため。
            // 大規模なアプリでは必要なタイミングで作成する方が良い。

            this.view.table = new MVC.TableView({
                collection: this.model.scoreCollection,
                el: $("#table")
            });

            this.view.inputForm = new MVC.InputFormView({
                collection: this.model.scoreCollection,
                el: $("#inputForm")
            });
        }
    });


    global.MVC.App = App;

})(this);
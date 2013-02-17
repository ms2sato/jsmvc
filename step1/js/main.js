$(function(){
    boot();
});

function boot(){

    //モデルの変更をハンドルできることを確認するよ！
    var scoreCollection = new MVC.ScoreCollection();
    scoreCollection.on('add', function(score){
       alert('add score: ' + score.get('name'));
    });


    var score = new MVC.Score();
    score.on('change:name', function(score){
       console.log('change:name:', score.get('name'));
    });

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

}


// 外部に変数、関数の定義が公開されないようにガード
(function(global){

    //アプリのネームスペースはMVCとします。
    if(!global.MVC){
        global.MVC = {};
    }


    var TableView = Backbone.View.extend({

        initialize: function() {

            //テンプレートのコンパイル
            var tableStr = $('#tableTpl').html();
            this.tableTpl = _.template(tableStr);

            var tableRowStr = $('#tableRowTpl').html();
            this.tableRowTpl = _.template(tableRowStr);


            /*
             * モデルのイベント監視
             * this.model.on('add', this.addNewRow, this)とほぼ同じ動きだが、remove時にリスナを自動解放してくれる
             */
            this.listenTo(this.model, "add", this.addNewRow);

            //初期の描画
            this.render();
        },

        render: function() {
            console.log('table.render');
            this.$el.empty();
            this.appendTable();
            return this;
        },

        appendTable:function(){
            var self = this;
            var table = this.$el.append(this.tableTpl({}));
            var tbody = table.find('tbody');
            this.model.forEach(function(score){
                self.addRow(tbody, score);
            });
        },

        addNewRow:function(model){
            return this.addRow(this.$('tbody'), model);
        },

        addRow: function(tbody, score){
            return tbody.append(this.tableRowTpl(score.toJSON()));
        }

        //Q3: 各行に「削除」ボタンをつけて、ボタンを押したら行が削除されるようにしましょう
        // ヒント:
        // ボタンを押されたら、モデルを更新します。
        // 更新されたモデルのremoveイベントで、表示を更新します。

    });

    global.MVC.TableView = TableView;

})(this);


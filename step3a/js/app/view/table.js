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


            //モデルのイベント監視  this.collection は ScoreCollectionのインスタンスです。
            this.listenTo(this.collection, 'add', this.addNewRow);
            this.listenTo(this.collection, 'remove', this.removeRow);
            /*
             * var self = this;
             * this.collection.on('remove', function(score){ self.removeRow(score); }
             */

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
            this.$el.append(this.tableTpl({}));
            this.collection.forEach(function(score){
                self.addNewRow(score);
            });
        },

        addNewRow:function(score){
            var self = this;
            var row = this.addRow(this.$('tbody'), score);
            row.find('.removeButton').click(function(){

                //追加されたscoreを削除
                self.collection.remove(score);
            });
        },

        addRow: function(tbody, score){
            return $($.parseHTML(this.tableRowTpl(score.toJSON()))).appendTo(tbody);
        },

        removeRow:function(score){
            this.render();
        }

    });

    global.MVC.TableView = TableView;

})(this);


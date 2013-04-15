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


            //モデルのイベント監視  this.model は ScoreCollectionのインスタンスです。
            this.listenTo(this.model, 'add', this.addNewRow);
            this.listenTo(this.model, 'remove', this.removeRow);
            /*
             * var self = this;
             * this.model.on('remove', function(score){ self.removeRow(score); }
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
            this.model.forEach(function(score){
                self.addNewRow(score);
            });
        },

        addNewRow:function(score){
            var row = this.addRow(this.$('tbody'), score);
            row.find('.removeButton').click(function(){

                //追加されたscoreを削除
                MVC.app.model.scoreCollection.remove(score);
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


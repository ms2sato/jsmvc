// 外部に変数、関数の定義が公開されないようにガード
(function(global){

    //アプリのネームスペースはMVCとします。
    if(!global.MVC){
        global.MVC = {};
    }


    var ChartView = Backbone.View.extend({

        initialize: function() {

            //モデルのイベント監視
            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model, "add", this.refreshChart);

            //初期の描画
            this.render();
        },

        render: function() {
            console.log('chart.render');
            this.$el.empty();
            this.refreshChart();
        },

        refreshChart:function(){

            this.$el.empty();

            var array = [
                [       '', 'JavaScript', 'C++', 'Ruby', 'PHP']
            ];

            this.model.forEach(function(score){
               array.push([
                   score.get('name'),
                   score.get('js'),
                   score.get('cpp'),
                   score.get('ruby'),
                   score.get('php')
               ]);
            });


            this.appendChart(array);
        },

        appendChart:function(array){

            if(!this.model.size()) return;

            var data = google.visualization.arrayToDataTable(array);

            var options = {
                title: '得点',
                vAxis: {title: 'メンバー'}
            };

            var chart = new google.visualization.BarChart(document.getElementById('chart'));
            chart.draw(data, options);
        }

    });

    global.MVC.ChartView = ChartView;

})(this);


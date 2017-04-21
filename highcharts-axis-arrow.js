/**
 * Highcharts Axis arrow v 1.0.0 (2017-04-21)
 *
 * (c) john@jianshukeji.com
 *  
 * License: MIT
 */
(function(HC) {
    var axisProto = HC.Axis.prototype;

    // rewrite Axis,renderLine method
    axisProto.renderLine = function() {
        if (!this.axisLine) {

            this.axisLine = this.chart.renderer.path()
                .addClass('highcharts-axis-line')
                .add(this.axisGroup);

            var axisLineAttr = {
                stroke: this.options.lineColor,
                'stroke-width': this.options.lineWidth,
                fill: this.options.lineColor,
                zIndex: 7
            };

            // add Makrer-end Attr
            if (this.userOptions.arrow || this.userOptions.arrow === undefined) {
                var arrowId = this.chart.arrows && this.chart.arrows[this.options.lineColor];

                // and marker to defs
                if (!arrowId) {
                    var chart = this.chart,
                        renderer = chart.renderer,
                        arrowId = HC.uniqueKey(),
                        arrow = renderer.createElement('marker').attr({
                            id: arrowId,
                            markerUnits: "strokeWidth",
                            markerWidth: 12,
                            markerHeight: 12,
                            viewBox: '0 0 12 12',
                            refX: 6,
                            refY: 6,
                            orient: 'auto'
                        }).add(renderer.defs);

                    renderer.path(['M', '2', '2', 'L', '10', '6', 'L', '2', '10', 'L', '6', '6', 'L', '2', '2'])
                        .attr({
                            fill: this.options.lineColor,
                        }).add(arrow);

                    if (!this.chart.arrows) {
                        this.chart.arrows = {};
                    }
                    this.chart.arrows[this.options.lineColor] = arrowId;
                }

                axisLineAttr['marker-end'] = 'url(#' + arrowId + ')';
            }

            this.axisLine.attr(axisLineAttr);
        }
    };
}(Highcharts));

# Highcharts Axis arrow plugin

Add arrow you Highcharts axis

### Usage

first: include highcharts and this plugin file in you page

​	<script src="https://code.highcharts.com/highcharts.js"></script>
​	<script src="https://code.highcharts.com/modules/exporting.js"></script>
​	<script src="highcharts-axis-arrow.js"></script>

second: axis arrow enabled for all axis default, and can be disabled be set `axis.arrow = false`

    yAxis: [{
       lineWidth: 1,
       lineColor: 'black',
       arrow: true,
       reversed: true // reversed axis arrow
     }, {
       opposite: true,
       linkedTo: 0,
       lineWidth: 1,
       lineColor: 'red',
       arrow: false // diabled axis arrow
     }],

     xAxis: [{
       arrow: true,
       lineColor: 'black',
     }, {
       // enabled by default
       opposite: true,
       linkedTo: 0
     }]


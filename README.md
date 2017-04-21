# Highcharts Axis arrow plugin

Add arrow you Highcharts axis


### Usage

1. include highcharts and plugins file in you page

	<script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="highcharts-axis-arrow.js"></script>

2. axis arrow enabled for all axis default, and can be disabled be set <code>axis.arrow = false</code

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

### Demo

demo.html
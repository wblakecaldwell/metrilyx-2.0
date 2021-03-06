/*
 * Client Side Configuration 
 */

/* 
 * This is a list of servers to use for backend calls.
 * This was specifically added to bypass the browser limitation
 * in the number of ajax requests that can be made.
 *
 * It can be a list of cname's to the same server as well.
 * 
 * If supplied some of the ajax calls will use it to rotate through the connection
 * pool to improve load times and user experience.
 *
 * Example: "http://some_fqdn"
 *
 */
var CONN_POOL_CFG = {
	urls: []
};
/* Auth config until auth is enabled. This is just a future placeholder. */
//var AUTHCONFIG = {
//	modelstore: {
//		username: 'admin',
//		password: 'metrilyx'
//	}
//};
/* WebSocket URI */
//var WS_URI = "ws://"+SERVER_NAME+"/api/data?compressed=true";

// Annotation poll interval //
var ANNO_POLL_INTERVAL = 75000;
// Annotation fetch time window //
var ANNO_FETCH_TIME_WIN = 300000;

// DO NOT TOUCH BELOW TIHS UNLESS YOU KNOW WHAT YOU ARE DOING //
// Metric poll interval.  //
var METRIC_POLL_INTERVAL = 50000;
// amount of data to fetch.  this needs to be a specific proportion to METRIC_POLL_INTERVAL //
var METRIC_FETCH_TIME_WIN = 900000;

// graph loader html //
var GRAPH_LOADING_HTML = "<table class='gif-loader-table'><tr><td><img src='/ui/imgs/loader.gif'></td></tr></table>";

var ADHOC_DEFAULT_GRAPH_SIZE = "large";
var ADHOC_DEFAULT_GRAPH_TYPE = "line";

// configure any js analytics here //
var SITE_ANALYTICS = {
	enabled: false,
	init: function() {
		// initialize library //
	},
	send: function(args) {
		// @params: { page: '', title: '' }
	}
};

/*
 * - jquery sortable with angular configuration for app
 */
var DNDCONFIG = {
	metricList: {
		scroll:true,
		scrollSensitivity: 5,
		tolerance: "pointer",
		revert: false,
		helper: "clone",
		connectWith: '.graph',
		cursor: '-webkit-grabbing',
		appendTo:"body",
		zindex: 999999,
		disabled:true,
		stop: function(event, ui) {
			var ce = new CustomEvent("refresh-metric-list", 
				{'detail': 'metric list needs a refresh' });
       		document.getElementById('edit-panel').dispatchEvent(ce);
		}
	},
	/* graph in graphs */
	graph: {
		items: "[ng-repeat='graph in pod.graphs']",
		tolerance:"pointer",
		cursor: "move",
		disabled:true,
	},
	/* new pod adder icon */
	pod: {
		connectWith: [ ".layout-column", ".layout-row", ".layout" ],
		tolerance: "pointer",
		helper: "clone",
		cursor: '-webkit-grabbing',
		appendTo:"body",
		zindex: 999999,
		disabled:true,
	},
	/* pods within column */
	column: {
		revert: false,
		tolerance: "pointer",
		items: "[ng-model='pod']",
		connectWith: [".layout-column"],
		handle: ".pod-header",
		cursor: "move",
		disabled:true,
		over: function(event, ui) {
			$(event.target).addClass('layout-column-hover');
		},
		out: function(event, ui) {
			$(event.target).removeClass('layout-column-hover');
		},
	},
	row: {
		tolerance: "pointer",
		cursor: "move",
		items: ".layout-column",
		connectWith: [".layout-row"],
		disabled:true,
	},
	layout: {
		tolerance: "pointer",
		cursor: "move",
		axis:"y",
		disabled:true,
		over: function(event, ui) {
			$(event.target).addClass('layout-hover');
		},
		out: function(event, ui) {
			$(event.target).removeClass('layout-hover');
		}
	}
};
if(SITE_ANALYTICS.enabled) SITE_ANALYTICS.init();
jQuery(document).ready(function($) {
	$("#header-button").click(function() {
		$("#header-menu").toggle(200);
	});
	$("#page-title").mousedown(function() {
		$("#header-menu").hide(200);
	});
	$("#page-content").mousedown(function() {
		$("#header-menu").hide(200);
	});
});
jQuery(document).ready(function($) {
	
	//Menu animation
	$("#header-button").click(function() {
		$("#header-menu").toggle(200);
	});
	$("#page-title").mousedown(function() {
		$("#header-menu").hide(200);
	});
	$("#page-content").mousedown(function() {
		$("#header-menu").hide(200);
	});
	
	//Account center score animation
	$(".account-bg .unsign").click(function() {
		$(this).addClass("no-show");
		$(".account-bg .sign-score").removeClass("no-show");
	});
	
	//Input textarea animation
	$(".input-comment").click(function() {
		if($(this).val() == "请输入文字") {
			$(this).val("");
			$(this).removeClass("comment-light");
		}
	});
	
	$(".input-comment").blur(function() {
		if($(this).val() == "") {
			$(this).addClass("comment-light");
			$(this).val("请输入文字");
		}
	});
	
	//file upload button function
	$("#file-upload").on('change',function() {
		var path = $(this).val();
		$("#file-name").text(path);
	});
});
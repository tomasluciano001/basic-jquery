$(document).ready(function(){
	$("#bt1").click(function(){
		$("#p1").before("<b> Before </b>");
	});
});

$(document).ready(function(){
	$("#bt2").click(function(){
		$("#p1").before("<i> Before </i>");
	});
});
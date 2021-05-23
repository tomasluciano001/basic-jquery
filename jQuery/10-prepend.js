$(document).ready(function(){
	$("#bt1").click(function(){
		$("#p1").prepend("<b> Prepend </b>");
	});
});

$(document).ready(function(){
	$("#bt2").click(function(){
		$("#p1").prepend("<i> Prepend </i>");
	});
});
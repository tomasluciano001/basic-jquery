$(document).ready(function(){
	$("button").click(function(){
		$("p").on({
			mouseenter: function(){
				$(this).css("background-color", "black")
			},
			mouseleave: function(){
				$(this).css("background-color", "red")
			},
			click: function(){
				$(this).css("background-color", "#1045b0")
			}
		});
	});
});
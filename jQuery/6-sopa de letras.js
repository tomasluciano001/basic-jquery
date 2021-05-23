$(document).ready(function(){
	$(".lorem").hover(function(){
		$(".lorem").addClass('resaltar')
	});

	$(".lorem").mouseleave(function(){
		$(".lorem").removeClass('resaltar')
	});

	$(".lorem").click(function(){
		$(".caja").css("color", "green").slideUp(2000).slideDown(2000);
	});


	$(".estilo").hover(function(){
		$(".estilo").addClass('resaltar')
	});

	$(".estilo").mouseleave(function(){
		$(".estilo").removeClass('resaltar')
	});
});
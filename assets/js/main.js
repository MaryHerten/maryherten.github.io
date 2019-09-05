$(document).ready(function(){
	console.log("The page is ready!");

	$('.research-item').click(function(){
		$(this).toggleClass('large');
	});

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	})

	var hideAll	= function() {
		$('.research-item').addClass('hide');
	}

	$('.btn-ENTER').click(function(){
		hideAll();
		$('.ENTER').removeClass('hide')
	});

	$('.btn-EXIT').click(function(){
		hideAll();
		$('.EXIT').removeClass('hide')
	});

	$('.btn-DOORBELL').click(function(){
		hideAll();
		$('.DOORBELL').removeClass('hide')
	});



});
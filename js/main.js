$(document).ready(function(){

	$('.btn-1').addClass('select');
	$('.pricetable-1').addClass('table-select');

	$('.btn-1').click(function(){
		$('.btn-1').addClass('select');
		$('.btn-2').removeClass('select');

		$('.pricetable-1').addClass('table-select');
		$('.pricetable-2').removeClass('table-select');

	});

	$('.btn-2').click(function(){
		$('.btn-1').removeClass('select');
		$('.btn-2').addClass('select');

		$('.pricetable-1').removeClass('table-select');
		$('.pricetable-2').addClass('table-select');
	});

	$('.accordion-button').click(function() { 
            $(this).find('i').toggleClass('fas fa-plus fas fa-minus'); 
        });

});

$(document).ready(function() {

	$('.menu-link,.back-link').on('click',function(){
		$('.main section,.sub-menu').hide();
		$('.menu,.mobile-link,.sub-back-link,.back-link').show();
	});
	
	$('.mobile-link').on('click',function(){
		$(this).parent().find('.sub-menu').show();
		$('.mobile-link,.sub-back-link').hide();
	});
	
	$( window ).resize(function() {
		var mql = window.matchMedia("(min-width: 760px)");
		if(mql.matches){
			$('.menu,.main section').show();
			$('.mobile-link,.sub-back-link,.back-link,.sub-menu').hide();
		}
	});
	
	
	$('li.has-submenu').on('mouseover',function(e){
		var mql = window.matchMedia("(min-width: 760px)");
		mql.matches &&
		$(this).find('.sub-menu').show();
		
	});
	$('li.has-submenu').on('mouseout',function(e){
		var mql = window.matchMedia("(min-width: 760px)");
		mql.matches && $(this).find('.sub-menu').hide();
	});
});



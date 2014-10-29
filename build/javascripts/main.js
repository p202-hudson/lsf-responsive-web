
$(document).ready(function() {

	$('.menu-link,.back-link').on('click',function(){
		$('.main section,.sub-menu').hide();
		$('.menu,.mobile-link,.sub-back-link,.back-link').show();
	});
	
/*	$('.sub-menu li').on('click',function(){
		if(!$(this).hasClass('back-link')){
			$('.sub-menu li').hide();
			$('.menu,.sub-menu li.back-link').show();
		}
	});*/
	$('.sub-back-link').on('click',function(){
		$('.main section,.mobile-link,.sub-menu').hide();
		$('.menu,.back-link').show();
		$('.menu .sub-menu:eq('+$(this).attr('list_index')+')').show();
	});
	
	$('.mobile-link').on('click',function(){
		$(this).parent().find('.sub-menu').show();
		$('.mobile-link,.sub-back-link').hide();
	});
	
	$( window ).resize(function() {
		var mql = window.matchMedia("(min-width: 760px)");
		if(mql.matches){
			$('.menu,.main section,.sub-back-link,.sidebar .sub-menu').show();
			$('.mobile-link,.back-link,.menu .sub-menu').hide();
		}
	});
	
	
	$('header li.has-submenu').on('mouseover',function(e){
		var mql = window.matchMedia("(min-width: 760px)");
		mql.matches &&
		$(this).find('.sub-menu').show();
		
	});
	$('header li.has-submenu').on('mouseout',function(e){
		var mql = window.matchMedia("(min-width: 760px)");
		mql.matches && $(this).find('.sub-menu').hide();
	});
});



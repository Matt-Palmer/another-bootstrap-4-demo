$(function(){

	$('#myButton').click(function () {
	    
	    if($('#myNav').hasClass('nav-active-background')){
	    	$('#myNav').removeClass('nav-active-background');
	    }else{
	    	$('#myNav').addClass('nav-active-background');
	    }

   })

})
jQuery(document).ready(function(){ 
    // Logo
	var $logo 	= $('#logo');
    

    if (location.href.indexOf("#") != -1) {
        $logo.show();
    }
	// Show logo 
	$('.menu .tabs a').click(function() {
	  $logo.fadeIn('slow');
	});
	// Hide logo
	$('.tab-profile').click(function() {
	  $logo.fadeOut('slow');
	});	
    /* ---------------------------------------------------------------------- */
	/*	Menu
	/* ---------------------------------------------------------------------- */
	$("button.pulse-button").hide();
	
  
    $('ul.tabs li a').eq(0).addClass("activo a");
    $('.secciones section').hide();
    
    
    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass("activo a");
        $(this).addClass('activo a');
        $('.secciones section').hide();
        $('#profile').hide();

        var activoTab=$(this).attr('href')
        $(activoTab).show();
        return false;
    });
	
	// Needed variables
	var $content 		= $("#content");
	
	// Run easytabs
  	$content.easytabs({
	  animate			: true,
	  updateHash		: false,
	  transitionIn		:'slideDown',
	  transitionOut		:'slideUp',
	  animationSpeed	:600,
	  tabs				:".tmenu",
	  tabActiveClass	:'active',
	});
  
	
	// Hover menu effect
	$content.find('.tabs li a').hover(
		function() {
			$(this).stop().animate({ marginTop: "-7px" }, 200);
		},function(){
			$(this).stop().animate({ marginTop: "0px" }, 300);
		}
	);
   /*resume*/ 
   
   $("#yellow-color").click(function(e){
       $(".main-wrapper-resume").attr("id","yellow");
   });
   $("#red-color").click(function(e){
    $(".main-wrapper-resume").attr("id","red");
    });
    $('#blue-color').click(function(e){
        $(".main-wrapper-resume").attr("id","blue");
    });
    $("#green-color").click(function(e){
        $(".main-wrapper-resume").attr("id","green");
    });
	$(".color-box").addClass("main");
    $(".setting-icon").click(function(){
		$('#yellow-color').show();
		$('#red-color').show();
		$('#blue-color').show();
		$('#green-color').show();
	});
	$(".setting-icon").dblclick(function(){
		$('#yellow-color').hide();
		$('#red-color').hide();
		$('#blue-color').hide();
		$('#green-color').hide();
  });
  //portfolio
  var $catsfilter 		= $('.cats-filter');
  $catsfilter.find('a').click(function() {
	var currentOption = $(this).attr('data-filter');
	$(this).parent().parent().find('a').removeClass('current');
	$(this).addClass('current');
});	
/* ---------------------------------------------------------------------- */
	/*	Portfolio
/* ---------------------------------------------------------------------- */ 
	// Needed variables
	var $plist	 	= $('#portfoli-list');
	var $pfilter 		= $('#portfoli-filter');
	// Run Isotope  
	$plist.isotope({
		filter				: '*',
		layoutMode   		: 'masonry',
		animationOptions	: {
		duration			: 750,
		easing				: 'linear'
	   }
	});	
	
	// Isotope Filter 
	$pfilter.find('a').click(function(){
	  var selector = $(this).attr('data-filter');
		$plist.isotope({ 
		filter				: selector,
		animationOptions	: {
		duration			: 750,
		easing				: 'linear',
		queue				: false,
	   }
	  });
	  return false;
	});	 
  /*fin */
	$(".skills li .rating").each(function(index,e) { 

		// Vars
		var 
			$ratNum = 7,
			$rat = $(e).attr("data-rat"),
			$point = "<span></span>";

		// Append points
		while($ratNum > 0){
		     $(e).append($point);
		     $ratNum--;
		}

		$(e).find("span").each(function(index,e) { 
			if(index >= $rat) return false;
			// Append Disabled Rats
			$(e).animate({
			    opacity: 1
			  });
		});

    });


});
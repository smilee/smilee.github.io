$(document).ready(function(){
	init();
});//endfunction

function init() {
 filter();
 gallery();
 toggle();
 card();
 totop();
 popup();
 top_scroll();
 mainvisual();
 rolling_banner();
 reload();
}

function filter() {
	// Make room for the font to go bold
	$('#filter ul li a').each(function(){
	    $(this).parent().width($(this).width() + 4);
	});
	// Keep the selected option highlighted
	$('#filter ul li').click(function() {
		$('#filter ul li').removeClass('on');
		$(this).addClass('on');
	});
}
function gallery() {
	// Stack them up nicely (init isotope)
	var $container = $('.grid').isotope({
    	itemSelector: '.card',
    	masonry: {
    		columnWidth: 0,
    		gutter: 16,
    		isFitWidth: true,
    		isInitLayout: false
    	}
	});

	/*
		// layout Isotope after each image loads
		$container.imagesLoaded().progress(function() {
	  	$container.isotope('layout');
		});
	*/

	// Filter them according to type!
	$('#filter ul li').click(function() {
		var filterValue = $(this).attr('data-filter');
		$container.isotope({filter: filterValue});
	});
};
function toggle() {
	//Toggle process in mobile and tablet view
	$('#process ul li div').hide();
	$('#process ul li h4').click(function() {
		if($(window).width() >= 900) {
			return;
		};
		$(this).toggleClass('active').next().slideToggle();
	});
};

function card() {
	$('.card.link').hover(function() {
		$(this).find('a img:first-child').css('outline', '5px solid #111').css('outline-offset', '-5px')
	}, function() {
		$(this).find('a img:first-child').css('outline', '3px solid #111').css('outline-offset', '-3px');
	});
}

function totop() {
	var y = 0;

	$('.totop').hide();
	$(window).scroll(function() {
		y = $(window).scrollTop();
		if (y > 550) {
			$('.totop').fadeIn();
		} else {
			$('.totop').fadeOut();
		}
	})

	$("a[href='#top']").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		return false;
	});
}

function popup() {
	var current = 0;
	var process1Url = [];
	var process2Url = [];
	var process3Url = [];
	var process4Url = [];
	var process5Url = [];
	var process6Url = [];
	var project = $("#process").attr("class");
	switch(project) {
		case "liv linked cf":
			process1Url[0] = "liv/process1/subprocess1.html";
			process1Url[1] = "liv/process1/subprocess2.html";
			process1Url[2] = "liv/process1/subprocess3.html";

			process2Url[0] = "liv/process2/subprocess1.html";
			process2Url[1] = "liv/process2/subprocess2.html";

			process3Url[0] = "liv/process3/subprocess1.html";
			process3Url[1] = "liv/process3/subprocess2.html";

			process4Url[0] = "liv/process4/subprocess1.html";
			process4Url[1] = "liv/process4/subprocess2.html";
			process4Url[2] = "liv/process4/subprocess3.html";

			process5Url[0] = "liv/process5/subprocess1.html";
			process5Url[1] = "liv/process5/subprocess2.html";

			process6Url[0] = "liv/process6/subprocess1.html";
			process6Url[1] = "liv/process6/subprocess2.html";
			break;
		case "kvm linked cf":
			process1Url[0] = "kvm/process1/subprocess1.html";
			process1Url[1] = "kvm/process1/subprocess2.html";
			process1Url[2] = "kvm/process1/subprocess3.html";
			process1Url[3] = "kvm/process1/subprocess4.html";

			process2Url[0] = "kvm/process2/subprocess1.html";
			process2Url[1] = "kvm/process2/subprocess2.html";

			process3Url[0] = "kvm/process3/subprocess1.html";
			process3Url[1] = "kvm/process3/subprocess2.html";
			process3Url[2] = "kvm/process3/subprocess3.html";
			process3Url[3] = "kvm/process3/subprocess4.html";

			process4Url[0] = "kvm/process4/subprocess1.html";
			process4Url[1] = "kvm/process4/subprocess2.html";
			process4Url[2] = "kvm/process4/subprocess3.html";
			process4Url[3] = "kvm/process4/subprocess4.html";
			break;
		case "smanager linked":
			process1Url[0] = "smanager/process1/subprocess1.html";
			process1Url[1] = "smanager/process1/subprocess2.html";

			process2Url[0] = "smanager/process2/subprocess1.html";
			process2Url[1] = "smanager/process2/subprocess2.html";

			process3Url[0] = "smanager/process3/subprocess1.html";

			process4Url[0] = "smanager/process4/subprocess1.html";
			process4Url[1] = "smanager/process4/subprocess2.html";
			process4Url[2] = "smanager/process4/subprocess3.html";
			break;
	}

	// Hide background
	$('.bg').hide();
	// Popup
	var process = "";

	$('#process ul li div ul li a').click(function() {
		current = $(this).parent().index();
		process = $(this).parent().parent().parent().prev().attr("class");
		switch(process) {
			case "process1":
				pop(process1Url[current]);
				break;
			case "process2":
				pop(process2Url[current]);
				break;
			case "process3":
				pop(process3Url[current]);
				break;
			case "process4":
				pop(process4Url[current]);
				break;
			case "process5":
				pop(process5Url[current]);
				break;
			case "process6":
				pop(process6Url[current]);
				break;
		};
	});

	// Close popup when you click on the background
	$('.bg').click(function() {
		$(this).fadeOut();
		$('.popup').fadeOut();
	});
}
function pop(page) {
	$(".popup").load(page);
	$('.bg, .popup').fadeIn();
}
function top_scroll(){}
function mainvisual(){}

function rolling_banner() {

}

function reload() {
	window.onorientationchange = function() {
		var orientation = window.orientation;
		switch(orientation) {
			case 0:
			case 90:
			case -90: window.location.reload();
			break;
		}
	}
}

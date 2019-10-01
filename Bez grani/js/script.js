$(".carousel").owlCarousel({
	items:1,
	nav:false,
	dots:true,
	loop:true,
	autoplay:true
});

$(".sexy-slider").owlCarousel({
	items:1,
	nav:false,
	dots:true,
	loop:true,
	autoplay:true
});

/*------------ACCORDEON-------------------*/
$(function() {
	let Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		
		let accord_div = this.el.find('.accord_div');
		accord_div.on('click',
			{ el: this.el, multiple: this.multiple },
			this.dropdown);
	};

	Accordion.prototype.dropdown = function(e) {
		let $el = e.data.el,
		$this = $(this),
		$next = $this.next();
		$next.slideToggle();
		$this.parent().toggleClass('open');
		
		if(!e.data.multiple) {
			
			$el.find('.accord_ul').not($next).slideUp().parent().removeClass('open');
		}
	}

	let accordion = new Accordion($('.accordion-menu'), false);
});



$(".btnup").click(function () {
	$("html,body").animate({scrollTop: 0
	}, 500);
});

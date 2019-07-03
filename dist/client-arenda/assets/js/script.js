$(document).ready(function() {



	/* Toggle attr function */
	$.fn.toggleAttr = function(attr, val) {

		var $attr = $(this).attr(attr);

		if ($attr) { 
			$(this).removeAttr(attr);
		} else {
			$(this).attr(attr, val);
		}
		return this;

	};
	


	/* Function hide block click outside */
	function closeField(clickField, callback) {

		$(document).mouseup(function (e) {

			var div = $(clickField);

			if (!div.is(e.target) && div.has(e.target).length === 0) {
					
				callback();

			}

		});

	}
	closeField('.---modal .---wrapper', function() {

		$('#---modal-video')
			.find('.---video')
			.html('');
		
		$('.---modal')
			.removeClass('---d-flex');

	});



    /* Select */
    $("body").on("click", ".---select .---select__cur-value", function(e) {
   
        e.preventDefault();
   
        $(".---select")
        	.removeClass('---is-active');

        $(this)
        	.parent()
        	.addClass('---is-active');
 
    });
	closeField('.---select', function() {
		
		$('.---select')
			.removeClass('---is-active');

	});



    /* Choose "option" in select */
    $("body").on("click", ".---select__list-item", function(e) {
   
        e.preventDefault();
   
        var $text = $(this).html();
   
        $(".---select")
        	.removeClass('---is-active')

        $(this)
        	.parent()
        	.parent()
    		.siblings(".---select__cur-value")
    		.find("span")
    		.html($text)

    		.parent()

    		.siblings("select")
    		.find("option")
    		.removeAttr("selected")
    		.filter('[value="' + $text + '"]')
    		.attr("selected", "")
   
    });



	/* Open modal window */
	$('.---js-open-modal').click(function(e) {

		e.preventDefault();

		var $id = $(this).data('modal-id');

		if ($id === '---modal-video') {
			$('#' + $id).find('.---video').html('<iframe src="https://www.youtube.com/embed/'+ $(this).data('video-url') +'" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
		}
		else if ($id === '---modal-image') {
			$('#' + $id).find('.---img').html('<img src="'+ $(this).data('img-src') +'">');
		}

		$('html')
			.addClass('---is-hidden')
			.find('#' + $id)
			.addClass('---d-flex');

	});



	/* Close modal window */
	$('.---js-close-modal').click(function(e) {

		e.preventDefault();

		$('#---modal-video').find('.---video').html('');

		$('html')
			.removeClass('---is-hidden')
			.find('.---modal')
			.removeClass('---d-flex');

	});



	/* Input masks */
	$('input[type="money"]').mask('000 000 000 000', {reverse: true});
	$('input[type="tel"]').mask('+7 (000) 000-00-00');
	$('input[type="tel"]').on('focus', function(e) {
		e.preventDefault();

		if ($(this).val().length == 0) {
			$(this).val('+7 ');
		}

	});
	$('input[type="tel"]').keyup(function(e) {
		
		e.preventDefault();

		if ($(this).val().length == 0) {
			$(this).val('+7 ');
		}

	});



	/* Smooth scroll to element */
	$('.---js-goto-anchor').click(function(e) {

		e.preventDefault();

		var $anchor = $(this).data('anchor');

		$('html').removeClass('---is-hidden');
		$('html, body').animate({scrollTop: $($anchor).offset().top - 30}, 400);

	});



	/* Mobile menu open trigger */
	$('#---menu-trigger').click(function(e) {

		e.preventDefault();

		$(this).toggleClass('---is-active');

		if ($('html').hasClass('---is-menu-visible')) {
			
			$('html')
				.removeClass('---is-menu-visible')
				.removeClass('---is-hidden');
		
		}
		else {
			
			$('html')
				.toggleClass('---is-menu-visible')
				.toggleClass('---is-hidden');
		
		}

	});
	closeField('.---left-main-menu, #---menu-trigger', function() {

		$('#---menu-trigger').removeClass('---is-active')

		$('html')
			.removeClass('---is-menu-visible')
			.removeClass('---is-hidden');

	});



	/* Tabs */
	$('body').on('click', '.---tabs__switcher', function(e) {

		e.preventDefault();
		
		var $tab = $(this).data('tab');


		console.log($(this).closest('.---tabs'));


		$(this)
			.addClass('---is-active')
			.siblings('.---tabs__switcher')
			.removeClass('---is-active')

			.closest('.---tabs')
			
			.find('.---tabs__tab[data-tab="'+ $tab +'"]')
			.addClass('---is-visible')
			.siblings('.---tabs__tab')
			.removeClass('---is-visible');

	});



	/* Checkbox click */
	$('.---checkbox').click(function(e) {

		e.preventDefault();

		if ($(this).hasClass('---checkbox--radio')) {
			$(this)
				.addClass('---is-active')
				.siblings('.---checkbox--radio')
				.removeClass('---is-active');
		}
		else {
			$(this)
				.toggleClass('---is-active');
		}

	});



	/* Disabled input by checkbox click */
	$('.---r-side-add-block .---check .---box').click(function(e) {

		e.preventDefault();

		$(this)
			.toggleClass('---is-active')
			.parent()
			.toggleClass('---fill--bg')
			.find('input')
			.toggleAttr('disabled', '');

	});



	/* Change payment type in add-new-payment modal */
	$('.---modal .---modal__header .---payment-type__item').on('click', function(e) {

		e.preventDefault();

		$(this)
			.addClass('---is-active')
			.siblings('.---payment-type__item')
			.removeClass('---is-active');

	});



	/* Select all table elements */
	$('table th .---checkbox').on('click', function(e) {
		
		e.preventDefault();

		$(this)
			.closest('table')
			.find('td')
			.find('.---checkbox')
			.toggleClass('---is-active');

	});



	/* Init datepicker */
    $(".---datepicker").datepicker();



	/* Upload file (change title on filename) */
    $("body").on("change", ".---input--file-upload", function(e) {

        var $fileName = e.target.files[0].name;

        if ($fileName.length > 0) {

    		$(this)
    			.addClass("---input--file-uploaded")
    			.find(".---input__file-name")
    			.text($fileName)
    			.siblings(".ifont")
    			.removeClass("---icon-upload")
    			.addClass("---icon-document");

        }
    
    });



    /* Toggle show */
    $('.---js-toggle-show').click(function(e) {

		e.preventDefault();

		var $block = $(this).data('block');

		$(this)
			.toggleClass('---is-active');

		$($block)
			.toggleClass('---d-none');

    });



    /* Open & close search form */
    $('.---js-open-search-form').click(function(e) {
    
    	e.preventDefault();

    	$('.---page-header .---search-form')
    		.addClass('---is-visible');

    });
    $('.---js-close-search-form').click(function(e) {

    	e.preventDefault();

    	$('.---page-header .---search-form')
    		.removeClass('---is-visible');

    });

});
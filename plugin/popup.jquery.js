(function ($) {
	$.fn.setPopup = function (content) {
		return this.each(function () {
			$(this).on('click', function(){
				$('body').addClass('ui-popup-open')
						.append('<div class="ui-popup-hider">')
						.on('click', '.ui-popup-hider', onHiderClick);

				$('.ui-popup-hider').append('<div class="ui-popup-content">');
				$('.ui-popup-content').html(content)
			});

		});

		function onHiderClick(){
			$('.ui-popup-hider').remove();
			$('body').removeClass('ui-popup-open')
					.off('click', '.ui-popup-hider',onHiderClick);
		}
	};

})(jQuery);
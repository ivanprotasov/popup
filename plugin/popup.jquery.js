(function ($) {
	$.fn.setPopup = function (content) {
		return this.each(function () {
			$(this).on('click', function(){
				var $elem = $('<div class="ui-popup-hider"><div class="ui-table"><div class="ui-inner-wrapper">');
				var $innerElem = $('<div class="ui-popup-content">');
				$innerElem.append(content);
				$elem.find('.ui-inner-wrapper').append($innerElem);

				$('body').addClass('ui-popup-open')
						.append($elem)
						.on('click', '.ui-popup-hider', onHiderClick);

			});

		});

		function onHiderClick(){
			$('.ui-popup-hider').remove();
			$('body').removeClass('ui-popup-open')
					.off('click', '.ui-popup-hider',onHiderClick);
		}
	};

})(jQuery);
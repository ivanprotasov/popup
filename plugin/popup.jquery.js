(function ($) {
	$.fn.setPopup = function (content) {
		return this.each(function () {
			$(this).on('click', function(){
				$window = $(window);
				$body = $('body');

				var $hider = $('<div class="ui-popup-hider">');
				var $content = $('<div class="ui-popup-content">');
				$content.append(content);
				$hider.append($content);

				$body.addClass('ui-popup-open')
						.append($hider)
						.on('click', '.ui-popup-hider', onHiderClick)
						.on('click', '.ui-popup-content', onInnerElemClick);

				var innerElemWidth = $content.outerWidth();
				var innerElemHeight = $content.outerHeight();

				setPosition();

				$window.resize(setPosition);

				function setPosition(){
					var windowHeight = $window.height();
					var windowWidth = $window.width();


					var marginTopPosition=(innerElemHeight > windowHeight)?30:(windowHeight-innerElemHeight)/2;
					var marginLeftPosition=(innerElemWidth > windowWidth)?30:(windowWidth-innerElemWidth)/2;

					$content.css({
						marginTop: marginTopPosition,
						marginLeft: marginLeftPosition
					})
				}

				function onHiderClick(){
					$hider.remove();
					$body.removeClass('ui-popup-open')
						.off('click', '.ui-popup-hider',onHiderClick)
						.off('click', '.ui-popup-hider',onInnerElemClick);
					$window.off("resize", setPosition);
				}

				function onInnerElemClick(e){
					e.stopPropagation();
				}

			});

		});

	};

})(jQuery);
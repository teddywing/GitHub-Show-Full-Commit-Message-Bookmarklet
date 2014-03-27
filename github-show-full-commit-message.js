(function() {
	if (window.location.href.indexOf('github.com') != -1) {
		var $hidden_text_expander = $('.commit .hidden-text-expander .js-details-target');
		
		if ($('.commit.open').length > 0) {
			$('.commit').removeClass('open');
		}
		else {
			$hidden_text_expander.click();
		}
	}
})();
/* 
 * Source from wp-admin/js/common.js (WordPress 4.7.3)
 * Copyright 2011-2017 by the contributors
 * License: GPLv2 or late
 */
(function($) {
	// tab in textareas

	// Jimmy:Unlike theme or plugin's textarea (#newcontent), post-edit's textarea is (#content)
	// Post Editor
	if ($("#content").length !== 0) {
		var $target_area = $("#content");
	// Theme or Plugin Editor
	} else if ($("#newcontent").length !== 0) {
		//var $target_area = $("#newcontent");
		return true;
	}
	$target_area.bind('keydown.wpevent_InsertTab', function(e) {
	// Jimmy:

		var el = e.target, selStart, selEnd, val, scroll, sel;

		if ( e.keyCode == 27 ) { // escape key
			// when pressing Escape: Opera 12 and 27 blur form fields, IE 8 clears them
			e.preventDefault();
			$(el).data('tab-out', true);
			return;
		}

		if ( e.keyCode != 9 || e.ctrlKey || e.altKey || e.shiftKey ) // tab key
			return;

		if ( $(el).data('tab-out') ) {
			$(el).data('tab-out', false);
			return;
		}

		selStart = el.selectionStart;
		selEnd = el.selectionEnd;
		val = el.value;

		if ( document.selection ) {
			el.focus();
			sel = document.selection.createRange();
			sel.text = '\t';
		} else if ( selStart >= 0 ) {
			scroll = this.scrollTop;
			el.value = val.substring(0, selStart).concat('\t', val.substring(selEnd) );
			el.selectionStart = el.selectionEnd = selStart + 1;
			this.scrollTop = scroll;
		}

		if ( e.stopPropagation )
			e.stopPropagation();
		if ( e.preventDefault )
			e.preventDefault();
	});
})(jQuery);
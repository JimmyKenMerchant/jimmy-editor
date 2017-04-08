/* 
 * Source from wp-admin/js/common.js line No.516 (WordPress 4.7.3)
 * Copyright 2011-2017 by the contributors
 * License: GPLv2 or late
 */
(function($) {
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Original
	// tab in textareas
	//$('#newcontent').bind('keydown.wpevent_InsertTab', function(e) {
//==========================================
	// Unlike theme or plugin's textarea id (#newcontent), post-edit's textarea id is (#content)
	var $target_area = {};
	if ( $('#content').length === 1 ) {
	// Post Editor
		$target_area = $('#content');
	} else if ( $('#newcontent').length === 1 ) {
	// Theme or Plugin Editor
	// #newcontent already has similar function, so it is commented out
		//$target_area = $('#newcontent');
	}

	if ( $target_area.length === 1 ) {
		$target_area.bind('keydown.wpevent_InsertTab', function(e) {
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> jimmyken
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
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Original
//==========================================
	}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> jimmyken
})(jQuery);
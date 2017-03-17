/* 
 * Sticker Box, a Movable HTML Menus @jimmy-editor
 * Author: Kenta Ishii, Tokyo
 * Copyright 2017 Kenta Ishii. All Rights Reserved.
 * License: GPLv2 or late
 */
(function($) {

	function lines_box($target_area, x_pos, y_pos, order_num) {
		// Common
		$target_area.attr({
				"selectionStart": "0",
				"selectionEnd": "0"
				});

		$("<div>").appendTo($("body"))
			.attr({
				"id": "lines-box",
				"class": "the-boxes"
				}
			)
			.css({
				"visibility": "hidden",
				"display": "block",
				"position": "fixed",
				"margin": "0",
				"padding": "0",
				"left": x_pos + "px",
				"top": y_pos + "px",
				"z-index": "100000",
				"width": "6.0rem",
				"height": "auto",
				"text-align": "left",
				"background-color": "rgba(0, 255, 255, 0.6)",
				"color": "rgba(0, 0, 0, 0.8)",
				"transition": "top 0.2s, left 0.2s"
				}
			);
	
		$("<div>").appendTo($("#lines-box"))
			.attr({
				"id": "lines-sticker",
				"class": "the-stickers"
				}
			)
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"text-align": "center",
				"width": "6.0rem",
				"height": "1.5rem",
				"background-color": "rgba(255, 0, 255, 0.6)",
				"transition": "background-color 0.5s"
				}
			)
			.click( function() {
					if (sticker_flag === parseInt(order_num)) {
						sticker_flag = 0;
						$(".the-stickers").css("background-color","rgba(255, 0, 255, 0.6)");
						$(".the-pins").css({
									"border-right": "1.0em solid transparent",
									"border-left": "1.0em solid transparent"
								});
						return false;
					} else {
						sticker_flag = parseInt(order_num);
						$(".the-stickers").css("background-color","rgba(255, 0, 255, 0.6)");
						$(".the-pins").css({
									"border-right": "1.0em solid transparent",
									"border-left": "1.0em solid transparent"
								});
						$(this).css("background-color","rgba(255, 255, 0, 0.6)");
						$(this).children("div")
								.css({
									"border-right": "1.0em solid rgba(255, 255, 0, 0.6)",
									"border-left": "1.0em solid rgba(255, 255, 0, 0.6)"
								});
						return false;
					}
				}
			)
			.bind('mousemove', function(e) {
							// prevent propagation to parent tags (body)
							// not to move sticker in this block
							return false;
						}
			)
			.bind('mouseenter', function(e) {
							$(this).css("background-color", "rgba(255, 255, 0, 0.6)");
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "rgba(255, 0, 255, 0.6)");
							return false;
						}
			);

		$("<div>").appendTo($("#lines-sticker"))
			.attr({
				"id": "lines-pin",
				"class": "the-pins"
				}
			)
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"width": "0",
				"height": "0",
				"margin": "0",
				"padding": "0",
				"border-top": "2.0em solid rgba(255, 255, 0, 0.6)",
				"border-right": "1.0em solid transparent",
				"border-left": "1.0em solid transparent",
				"transition": "border-right 0.5s, border-left 0.5s"
				}
			);
		// End of Common
	
		$("<div>").appendTo($("#lines-box"))
			.attr("id", "lines-text")
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"width": "6.0rem",
				"height": "auto",
				"line-height": "1.5rem",
				"text-align": "center",
				"font-size": "1.5rem",
				"white-space": "pre",
				"background-color": "rgba(0, 255, 255, 0.6)",
				"color": "rgba(0, 0, 0, 0.8)"
				}
			)
			.click( function() {
					sticker_flag = 0;
					$(".the-stickers").css("background-color","rgba(255, 0, 255, 0.6)");
					$(".the-pins").css({
							"border-right": "1.0em solid transparent",
							"border-left": "1.0em solid transparent"
							});
					$("#lines-box").css("visibility", "hidden");
					$target_area.focus();
				}
			)
			.text("");
	
		$("<div>").appendTo($("#lines-box"))
			.attr("id", "lines-button")
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"line-height": "1.8rem",
				"text-align": "center",
				"font-size": "1.0rem",
				"font-weight": "bold",
				"width": "2.0rem",
				"height": "2.0rem",
				"background-color": "rgba(255, 255, 0, 0.6)",
				"color": "rgba(0, 0, 0, 0.8)"
				}
			)
			.bind('mouseenter', function(e) {
							$(this).css("background-color", "rgba(0, 255, 255, 0.6)");
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "rgba(255, 255, 0, 0.6)");
							return false;
						}
			)
			.text("Go");
	
		$("<input>").attr({
					"id": "lines-input",
					"type": "text",
					"value": "L:N?"
					}
				)
				.css({
					"display": "inline-block",
					"vertical-align": "top",
					"font-size": "1.2rem",
					"font-weight": "bold",
					"margin": "0",
					"padding": "0",
					"width": "4.0rem",
					"height": "2.0rem",
					"background-color": "rgba(255, 255, 255, 0.6)",
					"color": "rgba(0, 0, 0, 0.8)"
					}
				)
				.click( function() {
						$(this).val([]);
					}
				)
				.appendTo($("#lines-box"));	
	
		$target_area.bind('click.jimmy-editor_lines_showbox', function(e) {
	
			var el = e.target;
			var selStart = el.selectionStart;
			var val = el.value;
	
			var the_cal = val.substr(0, selStart).split("\n");
			var the_lines = the_cal.length;
			var the_num = the_cal[ the_cal.length - 1 ].length;
	
			$("#lines-text").text("L: " + the_lines + "\r\n" + "N: " + the_num);
	
			$("#lines-box").css("visibility", "visible");

			return false;
		});
	
		$('#lines-button').bind('click.jimmy-editor_lines', function(e) {
	
			var the_val = $('#lines-input').val();
			if(the_val == parseInt(the_val)) {
				var the_lines = parseInt(the_val) - 1;
				var the_num = 0;
			} else {
				the_val = the_val.split(":", 2);
				var the_lines = parseInt(the_val[0]) - 1;
				var the_num = parseInt(the_val[1]);
			}
	
			$('#lines-input').val("L:N?");
			var val = $target_area[0].value;
			var the_cal = val.substr(0).split("\n");
			var the_dest = 0;
			for(var i=0; i < the_lines; i++){
				the_dest += the_cal[i].length + 1;
			}
			the_dest += the_num;
			if(the_dest > val.length) {
				the_dest = 0;
			}
			$target_area[0].selectionStart = the_dest;
			$target_area[0].selectionEnd = the_dest;
			$target_area.focus();
	
			the_lines++;
	
			$("#lines-text").text("L: " + the_lines + "\r\n" + "N: " + the_num);

			return false;
		});
	
		$('#lines-input').bind('keydown.jimmy-editor_lines', function(e) {
			if ( e.keyCode == 13 ) { // enter key
				e.preventDefault();
				$('#lines-button').trigger('click.jimmy-editor_lines');
				return false;
			}
		});
	
		$('body').bind('mousemove.jimmy-editor_lines', function(e) {
	
			if (sticker_flag === parseInt(order_num)) {
				// Add Border Width	
				$("#lines-box").css({
						"left": e.clientX - 4 + "px",
						"top": e.clientY - 4 + "px"
						});
				return false;
			}
		});
	}

	function search_box($target_area, x_pos, y_pos, order_num) {
		// Common
		$target_area.attr({
				"selectionStart": "0",
				"selectionEnd": "0"
				});

		$("<div>").appendTo($("body"))
			.attr({
				"id": "search-box",
				"class": "the-boxes"
				}
			)
			.css({
				"visibility": "hidden",
				"display": "block",
				"position": "fixed",
				"margin": "0",
				"padding": "0",
				"left": x_pos + "px",
				"top": y_pos + "px",
				"z-index": "100000",
				"width": "6.0rem",
				"height": "auto",
				"text-align": "left",
				"background-color": "rgba(0, 255, 255, 0.6)",
				"color": "rgba(0, 0, 0, 0.8)",
				"transition": "top 0.2s, left 0.2s"
				}
			);
	
		$("<div>").appendTo($("#search-box"))
			.attr({
				"id": "search-sticker",
				"class": "the-stickers"
				}
			)
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"text-align": "center",
				"width": "6.0rem",
				"height": "1.5rem",
				"background-color": "rgba(255, 0, 255, 0.6)",
				"transition": "background-color 0.5s"
				}
			)
			.click( function() {
					if (sticker_flag === parseInt(order_num)) {
						sticker_flag = 0;
						$(".the-stickers").css("background-color","rgba(255, 0, 255, 0.6)");
						$(".the-pins").css({
									"border-right": "1.0em solid transparent",
									"border-left": "1.0em solid transparent"
								});
						return false;
					} else {
						$(".the-stickers").css("background-color","rgba(255, 0, 255, 0.6)");
						$(".the-pins").css({
									"border-right": "1.0em solid transparent",
									"border-left": "1.0em solid transparent"
								});
						sticker_flag = parseInt(order_num);
						$(this).css("background-color","rgba(255, 255, 0, 0.6)");
						$(this).children("div")
								.css({
									"border-right": "1.0em solid rgba(255, 255, 0, 0.6)",
									"border-left": "1.0em solid rgba(255, 255, 0, 0.6)"
								});
						return false;
					}
				}
			)
			.bind('mousemove', function(e) {
							// prevent propagation to parent tags (body)
							// not to move sticker in this block
							return false;
						}
			)
			.bind('mouseenter', function(e) {
							$(this).css("background-color", "rgba(255, 255, 0, 0.6)");
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "rgba(255, 0, 255, 0.6)");
							return false;
						}
			);


		$("<div>").appendTo($("#search-sticker"))
			.attr({
				"id": "search-pin",
				"class": "the-pins"
				}
			)
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"width": "0",
				"height": "0",
				"margin": "0",
				"padding": "0",
				"border-top": "2.0em solid rgba(255, 255, 0, 0.6)",
				"border-right": "1.0em solid transparent",
				"border-left": "1.0em solid transparent",
				"transition": "border-right 0.5s, border-left 0.5s"
				}
			);
		// End of Common
	
		$("<div>").appendTo($("#search-box"))
			.attr("id", "search-text")
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"width": "6.0rem",
				"height": "auto",
				"line-height": "1.5rem",
				"text-align": "center",
				"font-size": "1.5rem",
				"white-space": "pre",
				"background-color": "rgba(0, 255, 255, 0.6)",
				"color": "rgba(0, 0, 0, 0.8)"
				}
			)
			.click( function() {
					sticker_flag = 0;
					$(".the-stickers").css("background-color","rgba(255, 0, 255, 0.6)");
					$(".the-pins").css({
							"border-right": "1.0em solid transparent",
							"border-left": "1.0em solid transparent"
							});
					$("#search-box").css("visibility", "hidden");
					$target_area.focus();
				}
			)
			.text("Search");

		var select_flag = 0;
		$("<div>").appendTo($("#search-box"))
			.attr("id", "search-select")
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"width": "6.0rem",
				"height": "auto",
				"line-height": "1.5rem",
				"text-align": "center",
				"font-size": "1.0rem",
				"white-space": "pre",
				"background-color": "rgba(255, 255, 0, 0.6)",
				"color": "rgba(255, 0, 0, 0.8)"
				}
			)
			.click( function() {
					if (select_flag === 0) {
						select_flag = 1;
						$("#search-text").text("Replace");
					} else if (select_flag === 1) {
						select_flag = 2;
						$("#search-text").text("Deleate");
					} else if (select_flag === 2) {
						select_flag = 0;
						$("#search-text").text("Search");
					}
				}
			)
			.bind('mouseenter', function(e) {
							$(this).css("background-color", "rgba(0, 255, 255, 0.6)");
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "rgba(255, 255, 0, 0.6)");
							return false;
						}
			).text("Select");

		$("<input>").attr({
					"id": "search-input1",
					"class": "search-input",
					"type": "text",
					"value": "Search?"
					}
				)
				.css({
					"display": "inline-block",
					"vertical-align": "top",
					"font-size": "1.2rem",
					"font-weight": "bold",
					"margin": "0",
					"padding": "0",
					"width": "6.0rem",
					"height": "2.0rem",
					"background-color": "rgba(255, 255, 255, 0.6)",
					"color": "rgba(0, 0, 0, 0.8)"
					}
				)
				.click( function() {
						$(".search-input").val([]);
					}
				)
				.appendTo($("#search-box"));

		$("<input>").attr({
					"id": "search-input2",
					"class": "search-input",
					"type": "text",
					"value": "Replace?"
					}
				)
				.css({
					"display": "inline-block",
					"vertical-align": "top",
					"font-size": "1.2rem",
					"font-weight": "bold",
					"margin": "0",
					"padding": "0",
					"width": "6.0rem",
					"height": "2.0rem",
					"background-color": "rgba(255, 255, 255, 0.6)",
					"color": "rgba(0, 0, 0, 0.8)"
					}
				)
				.click( function() {
						$("#search-input2").val([]);
					}
				)
				.appendTo($("#search-box"));
	
		$("<div>").appendTo($("#search-box"))
			.attr("id", "search-button")
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"line-height": "1.8rem",
				"text-align": "center",
				"font-size": "1.0rem",
				"font-weight": "bold",
				"width": "6.0rem",
				"height": "2.0rem",
				"background-color": "rgba(255, 255, 0, 0.6)",
				"color": "rgba(0, 0, 0, 0.8)"
				}
			)
			.bind('mouseenter', function(e) {
							$(this).css("background-color", "rgba(0, 255, 255, 0.6)");
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "rgba(255, 255, 0, 0.6)");
							return false;
						}
			)
			.text("Go");

		// Variable the_nextstart uses for search/replace/delete
		var the_nextstart = 0;
		$target_area.bind('click.jimmy-editor_search_showbox', function(e) {
			the_nextstart = e.target.selectionStart;
			$("#search-box").css("visibility", "visible");
			return false;	
		});

		var the_val_search = "";
		var the_search_regex = {};
		var the_val_replace = "";
		$('#search-button').bind('click.jimmy-editor_search', function(e) {
			the_temp_search = $('#search-input1').val();
			if (the_val_search !== the_temp_search) {
				the_val_search = the_temp_search;
				the_nextstart = $target_area[0].selectionStart;
			}
			the_temp_replace = $('#search-input2').val();
			if (the_val_replace !== the_temp_replace) {
				the_val_replace = the_temp_replace;
				the_nextstart = $target_area[0].selectionStart;
			}

			var val = $target_area[0].value;

			if (the_val_search === "" ) {
			// Nothing
				$target_area.focus();
			} else if (the_val_replace !== "" && select_flag === 1) {
			// Replace
				// If you want all replace, RegExp("the_val_search", "g")
				var the_search_regex = new RegExp(the_val_search);
				var the_cal = val.substr(the_nextstart).search(the_search_regex);
				if (the_cal === -1) {
					$target_area.focus();
					return false;
				}
				the_cal += the_nextstart;
				var the_slice = the_cal + the_val_search.length;
				var the_front = val.slice(0, the_cal);
				var the_rear = val.slice(the_slice);
				// Replace Itself
				$target_area[0].value = the_front + the_val_replace + the_rear;
				the_nextstart = the_cal + the_val_replace.length;
				$target_area[0].selectionStart = the_cal;
				$target_area[0].selectionEnd = the_nextstart;
				$target_area.focus();
				$target_area.trigger('click.jimmy-editor_lines_showbox');
			} else if (the_val_replace === "" && select_flag === 2) {
			// Delete
				// If you want all delete, RegExp("the_val_search", "g")
				var the_search_regex = new RegExp(the_val_search);
				var the_cal = val.substr(the_nextstart).search(the_search_regex);
				if (the_cal === -1) {
					$target_area.focus();
					return false;
				}
				the_cal += the_nextstart;
				var the_slice = the_cal + the_val_search.length;
				var the_front = val.slice(0, the_cal);
				var the_rear = val.slice(the_slice);
				// Replace Itself
				$target_area[0].value = the_front + the_rear;
				the_nextstart = the_cal;
				$target_area[0].selectionStart = the_cal;
				$target_area[0].selectionEnd = the_nextstart;
				$target_area.focus();
				$target_area.trigger('click.jimmy-editor_lines_showbox');
			} else if (select_flag === 0) {
			// Search
				var the_search_regex = new RegExp(the_val_search);
				var the_cal = val.substr(the_nextstart).search(the_search_regex);
				if (the_cal === -1) {
					$target_area.focus();
					return false;
				}
				the_cal += the_nextstart;

				the_nextstart = the_cal + the_val_search.length;
				$target_area[0].selectionStart = the_cal;
				$target_area[0].selectionEnd = the_nextstart;
				$target_area.focus();
				$target_area.trigger('click.jimmy-editor_lines_showbox');
			}

			return false;
		});
	
    		$('#search-input1, #search-input2').bind('keydown.jimmy-editor_search', function(e) {
			if ( e.keyCode == 13 ) { // enter key
				e.preventDefault();
				$('#search-button').trigger('click.jimmy-editor_search');
				return false;
			}
		});
	
		$('body').bind('mousemove.jimmy-editor_search', function(e) {
	
			if (sticker_flag === parseInt(order_num)) {
				// Add Border Width
				$("#search-box").css({
						"left": e.clientX - 4 + "px",
						"top": e.clientY - 4 + "px"
						});
				return false;
			}
		});
	}

	var sticker_flag = false;
	// Post Editor
	if ($("#content").length !== 0) {
		var $target_area = $("#content");
	// Theme or Plugin Editor
	} else if ($("#newcontent").length !== 0) {
		var $target_area = $("#newcontent");
	}

	// Second and Third Arguments are X and Y coordinates
	// Last Argument needs unique number except 0
	lines_box($target_area, 500, 500, 1);
	search_box($target_area, 550, 550, 2);

})(jQuery);
/* 
 * Sticker Box, a Movable Web Menus @jimmy-editor
 * Author: Kenta Ishii, Tokyo
 * Copyright 2017 Kenta Ishii. All Rights Reserved.
 * License: GPLv2 or late
 */
(function($) {

	/*
	 * lines Box Construction
	 * Line and Number Detection and Search
	 */
	function lines_box(x_pos, y_pos, order_num) {
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
				"opacity": "0.8",
				"position": "fixed",
				"margin": "0",
				"padding": "0",
				"left": x_pos + "px",
				"top": y_pos + "px",
				"z-index": "100000",
				"width": "6.0rem",
				"height": "auto",
				"text-align": "left",
				"background-color": "#0ff",
				"color": "#000",
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
				"background-color": "#f0f",
				"transition": "background-color 0.5s"
				}
			)
			.click( function() {
					if (sticker_flag === parseInt(order_num)) {
						sticker_flag = 0;
						$(".the-stickers").css("background-color", "#f0f");
						$(".the-pins").css({
									"border-right": "1.0em solid transparent",
									"border-left": "1.0em solid transparent"
								});
						return false;
					} else {
						sticker_flag = parseInt(order_num);
						$(".the-stickers").css("background-color", "#f0f");
						$(".the-pins").css({
									"border-right": "1.0em solid transparent",
									"border-left": "1.0em solid transparent"
								});
						$(this).css("background-color", "#ff0");
						$(this).children("div")
								.css({
									"border-right": "1.0em solid #0ff",
									"border-left": "1.0em solid #0ff"
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
							$(this).css("background-color", "#ff0");
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "#f0f");
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
				"border-top": "2.0em solid #0ff",
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
				"background-color": "#aff",
				"color": "#000"
				}
			)
			.click( function() {
					sticker_flag = 0;
					$(".the-stickers").css("background-color", "#f0f");
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
			.attr("id", "lines-button1")
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"line-height": "1.8rem",
				"text-align": "center",
				"font-size": "1.0rem",
				"font-weight": "bold",
				"width": "2.0rem",
				"height": "2.0rem",
				"background-color": "#ff0",
				"color": "#000",
				"transition": "background-color 0.5s"
				}
			)
			.bind('mouseenter', function(e) {
							$(this).css("background-color", "#0ff");
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "#ff0");
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
					"background-color": "#fff",
					"color": "#000"
					}
				)
				.click( function() {
						$(this).val([]);
					}
				)
				.appendTo($("#lines-box"));

		$("<div>").appendTo($("#lines-box"))
			.attr("id", "lines-button2")
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"line-height": "1.8rem",
				"text-align": "center",
				"font-size": "1.0rem",
				"font-weight": "bold",
				"width": "3.0rem",
				"height": "2.0rem",
				"background-color": "#ff0",
				"color": "#000",
				"transition": "background-color 0.5s"
				}
			)
			.bind('mouseenter', function(e) {
							$(this).css("background-color", "#0ff");
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "#ff0");
							return false;
						}
			)
			.text("Top");

		$("<div>").appendTo($("#lines-box"))
			.attr("id", "lines-button3")
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"line-height": "1.8rem",
				"text-align": "center",
				"font-size": "1.0rem",
				"font-weight": "bold",
				"width": "3.0rem",
				"height": "2.0rem",
				"background-color": "#ff0",
				"color": "#000",
				"transition": "background-color 0.5s"
				}
			)
			.bind('mouseenter', function(e) {
							$(this).css("background-color", "#0ff");
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "#ff0");
							return false;
						}
			)
			.text("Last");
	
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
	
		$('#lines-button1').bind('click.jimmy-editor_lines', function(e) {
	
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
			$target_area[0].selectionEnd = the_dest + 1;
			$target_area.focus();
	
			the_lines++;
	
			$("#lines-text").text("L: " + the_lines + "\r\n" + "N: " + the_num);

			return false;
		});

		$('#lines-button2').bind('click.jimmy-editor_top', function(e) {
	
			$target_area[0].selectionStart = 0;
			$target_area[0].selectionEnd = 1;
			$target_area.focus();

			$("#lines-text").text("L: " + 1 + "\r\n" + "N: " + 0);

			return false;
		});

		$('#lines-button3').bind('click.jimmy-editor_last', function(e) {

			var val = $target_area[0].value;	
			$target_area[0].selectionStart = val.length - 1;
			$target_area[0].selectionEnd = val.length;
			$target_area.focus();

			var the_cal = val.substr(0).split("\n");
			$("#lines-text").text("L: " + the_cal.length + "\r\n" + "N: " + the_cal[the_cal.length - 1].length);

			return false;
		});
	
		$('#lines-input').bind('keydown.jimmy-editor_lines', function(e) {
			if ( e.keyCode == 13 ) { // enter key
				e.preventDefault();
				$('#lines-button1').trigger('click.jimmy-editor_lines');
				return false;
			}
		});
	
		$('body').bind('mousemove.jimmy-editor_lines', function(e) {
	
			if (sticker_flag === parseInt(order_num)) {
				// Slide the menu 4px minus of X and Y from the (mouse|touch) pointer
				$("#lines-box").css({
						"left": e.clientX - 4 + "px",
						"top": e.clientY - 4 + "px"
						});
				return false;
			}
		});
	}

	/*
	 * Search Box Construction
	 * Search, Replace or Delete Word
	 */
	function search_box(x_pos, y_pos, order_num) {
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
				"opacity": "0.8",
				"position": "fixed",
				"margin": "0",
				"padding": "0",
				"left": x_pos + "px",
				"top": y_pos + "px",
				"z-index": "100000",
				"width": "6.0rem",
				"height": "auto",
				"text-align": "left",
				"background-color": "#0ff",
				"color": "#000",
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
				"background-color": "#f0f",
				"transition": "background-color 0.5s"
				}
			)
			.click( function() {
					if (sticker_flag === parseInt(order_num)) {
						sticker_flag = 0;
						$(".the-stickers").css("background-color", "#f0f");
						$(".the-pins").css({
									"border-right": "1.0em solid transparent",
									"border-left": "1.0em solid transparent"
								});
						return false;
					} else {
						sticker_flag = parseInt(order_num);
						$(".the-stickers").css("background-color", "#f0f");
						$(".the-pins").css({
									"border-right": "1.0em solid transparent",
									"border-left": "1.0em solid transparent"
								});
						$(this).css("background-color", "#ff0");
						$(this).children("div")
								.css({
									"border-right": "1.0em solid #0ff",
									"border-left": "1.0em solid #0ff"
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
							$(this).css("background-color", "#ff0");
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "#f0f");
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
				"border-top": "2.0em solid #0ff",
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
				"background-color": "#aff",
				"color": "#000"
				}
			)
			.click( function() {
					sticker_flag = 0;
					$(".the-stickers").css("background-color", "#f0f");
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
			.attr("id", "search-button1")
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"width": "6.0rem",
				"height": "auto",
				"line-height": "1.5rem",
				"text-align": "center",
				"font-size": "1.0rem",
				"white-space": "pre",
				"background-color": "#ff0",
				"color": "#f00"
				}
			)
			.click( function() {
					if (select_flag === 0) {
						select_flag = 1;
						$("#search-text").text("Replace");
					} else if (select_flag === 1) {
						select_flag = 2;
						$("#search-text").text("Delete");
					} else if (select_flag === 2) {
						select_flag = 0;
						$("#search-text").text("Search");
					}
				}
			)
			.bind('mouseenter', function(e) {
							$(this).css("background-color", "#0ff");
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "#ff0");
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
					"background-color": "#fff",
					"color": "#000"
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
					"background-color": "#fff",
					"color": "#000"
					}
				)
				.click( function() {
						$("#search-input2").val([]);
					}
				)
				.appendTo($("#search-box"));
	
		$("<div>").appendTo($("#search-box"))
			.attr("id", "search-button2")
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"line-height": "1.8rem",
				"text-align": "center",
				"font-size": "1.0rem",
				"font-weight": "bold",
				"width": "6.0rem",
				"height": "2.0rem",
				"background-color": "#ff0",
				"color": "#000",
				"transition": "background-color 0.5s"
				}
			)
			.bind('mouseenter', function(e) {
							$(this).css("background-color", "#0ff");
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "#ff0");
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
		$('#search-button2').bind('click.jimmy-editor_search', function(e) {
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
	
    		$('.search-input').bind('keydown.jimmy-editor_search', function(e) {
			if ( e.keyCode == 13 ) { // enter key
				e.preventDefault();
				$('#search-button2').trigger('click.jimmy-editor_search');
				return false;
			}
		});
	
		$('body').bind('mousemove.jimmy-editor_search', function(e) {
	
			if (sticker_flag === parseInt(order_num)) {
				// Slide the menu 4px minus of X and Y from the (mouse|touch) pointer
				$("#search-box").css({
						"left": e.clientX - 4 + "px",
						"top": e.clientY - 4 + "px"
						});
				return false;
			}
		});
	}

	/*
	 * Style Box Construction
	 * font color, font sytle and background color
	 */
	function style_box(x_pos, y_pos, order_num) {
		// Common
		$target_area.attr({
				"selectionStart": "0",
				"selectionEnd": "0"
				});

		$("<div>").appendTo($("body"))
			.attr({
				"id": "style-box",
				"class": "the-boxes"
				}
			)
			.css({
				"visibility": "hidden",
				"display": "block",
				"opacity": "0.8",
				"position": "fixed",
				"margin": "0",
				"padding": "0",
				"left": x_pos + "px",
				"top": y_pos + "px",
				"z-index": "100000",
				"width": "6.0rem",
				"height": "auto",
				"text-align": "left",
				"background-color": "#0ff",
				"color": "#000",
				"transition": "top 0.2s, left 0.2s"
				}
			);
	
		$("<div>").appendTo($("#style-box"))
			.attr({
				"id": "style-sticker",
				"class": "the-stickers"
				}
			)
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"text-align": "center",
				"width": "6.0rem",
				"height": "1.5rem",
				"background-color": "#f0f",
				"transition": "background-color 0.5s"
				}
			)
			.click( function() {
					if (sticker_flag === parseInt(order_num)) {
						sticker_flag = 0;
						$(".the-stickers").css("background-color", "#f0f");
						$(".the-pins").css({
									"border-right": "1.0em solid transparent",
									"border-left": "1.0em solid transparent"
								});
						return false;
					} else {
						sticker_flag = parseInt(order_num);
						$(".the-stickers").css("background-color", "#f0f");
						$(".the-pins").css({
									"border-right": "1.0em solid transparent",
									"border-left": "1.0em solid transparent"
								});
						$(this).css("background-color", "#ff0");
						$(this).children("div")
								.css({
									"border-right": "1.0em solid #0ff",
									"border-left": "1.0em solid #0ff"
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
							$(this).css("background-color", "#ff0");
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "#f0f");
							return false;
						}
			);

		$("<div>").appendTo($("#style-sticker"))
			.attr({
				"id": "style-pin",
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
				"border-top": "2.0em solid #0ff",
				"border-right": "1.0em solid transparent",
				"border-left": "1.0em solid transparent",
				"transition": "border-right 0.5s, border-left 0.5s"
				}
			);
		// End of Common
	
		$("<div>").appendTo($("#style-box"))
			.attr("id", "style-text")
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"width": "6.0rem",
				"height": "auto",
				"line-height": "1.0rem",
				"text-align": "center",
				"font-size": "1.0rem",
				"white-space": "pre",
				"background-color": "#aff",
				"color": "#000"
				}
			)
			.click( function() {
					sticker_flag = 0;
					$(".the-stickers").css("background-color", "#f0f");
					$(".the-pins").css({
							"border-right": "1.0em solid transparent",
							"border-left": "1.0em solid transparent"
							});
					$("#style-box").css("visibility", "hidden");
					$target_area.focus();
				}
			)
			.text("Font Color" + "\r\n" + "Size:Weight" + "\r\n" + "Back Color");
		
		var font_color = $target_area.css("color");
		$("<input>").attr({
					"id": "style-input1",
					"class": "style-input",
					"type": "text",
					"value": font_color
					}
				)
				.css({
					"display": "inline-block",
					"vertical-align": "top",
					"font-size": "0.7rem",
					"font-weight": "bold",
					"margin": "0",
					"padding": "0",
					"width": "6.0rem",
					"height": "2.0rem",
					"background-color": "#fff",
					"color": "#000"
					}
				)
				.click( function() {
						$("#style-input1").val([]);
					}
				)
				.appendTo($("#style-box"));

		var font_params = $target_area.css("font-size") + ":" + $target_area.css("font-weight");
		$("<input>").attr({
					"id": "style-input2",
					"class": "style-input",
					"type": "text",
					"value": font_params
					}
				)
				.css({
					"display": "inline-block",
					"vertical-align": "top",
					"font-size": "0.7rem",
					"font-weight": "bold",
					"margin": "0",
					"padding": "0",
					"width": "6.0rem",
					"height": "2.0rem",
					"background-color": "#fff",
					"color": "#000"
					}
				)
				.click( function() {
						$("#style-input2").val([]);
					}
				)
				.appendTo($("#style-box"));

		var back_color = $target_area.css("background-color");
		$("<input>").attr({
					"id": "style-input3",
					"class": "style-input",
					"type": "text",
					"value": back_color
					}
				)
				.css({
					"display": "inline-block",
					"vertical-align": "top",
					"font-size": "0.7rem",
					"font-weight": "bold",
					"margin": "0",
					"padding": "0",
					"width": "6.0rem",
					"height": "2.0rem",
					"background-color": "#fff",
					"color": "#000"
					}
				)
				.click( function() {
						$("#style-input3").val([]);
					}
				)
				.appendTo($("#style-box"));

	
		$("<div>").appendTo($("#style-box"))
			.attr("id", "style-button1")
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"line-height": "1.8rem",
				"text-align": "center",
				"font-size": "1.0rem",
				"font-weight": "bold",
				"width": "6.0rem",
				"height": "2.0rem",
				"background-color": "#ff0",
				"color": "#000",
				"transition": "background-color 0.5s"
				}
			)
			.bind('mouseenter', function(e) {
							$(this).css("background-color", "#0ff");
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "#ff0");
							return false;
						}
			)
			.text("Change");

		$target_area.bind('click.jimmy-editor_style_showbox', function(e) {
			$("#style-box").css("visibility", "visible");
			return false;	
		});

		$('#style-button1').bind('click.jimmy-editor_style', function(e) {
			if ($('#style-input1').val() !== "" ) {
				var the_font_color = $('#style-input1').val();
			} else {
				var the_font_color = $target_area.css("color");
			}

			var the_parm = $('#style-input2').val();
			the_parm = the_parm.split(":", 2);
			if (the_parm[0] !== "" ) {
				var the_font_size = the_parm[0];
			} else {
				var the_font_size = $target_area.css("font-size");
			}

			if (the_parm[1] !== "" ) {
				var the_font_weight = the_parm[1];
			} else {
				var the_font_weight = $target_area.css("font-weight");
			}

			if ($('#style-input3').val() !== "" ) {
				var the_back_color = $('#style-input3').val();
			} else {
				var the_back_color = $target_area.css("background-color");
			}

			$target_area.css({
					"color": the_font_color,
					"font-size": the_font_size,
					"font-weight": the_font_weight,
					"background-color": the_back_color
					}
				)

			$('#style-input1').val($target_area.css("color"));
			$('#style-input2').val($target_area.css("font-size") + ":" + $target_area.css("font-weight"));
			$('#style-input3').val($target_area.css("background-color"));

			return false;
		});

    		$('.style-input').bind('keydown.jimmy-editor_style', function(e) {
			if ( e.keyCode == 13 ) { // enter key
				e.preventDefault();
				$('#style-button1').trigger('click.jimmy-editor_style');
				return false;
			}
		});
	
		$('body').bind('mousemove.jimmy-editor_style', function(e) {
	
			if (sticker_flag === parseInt(order_num)) {
				// Slide the menu 4px minus of X and Y from the (mouse|touch) pointer
				$("#style-box").css({
						"left": e.clientX - 4 + "px",
						"top": e.clientY - 4 + "px"
						});
				return false;
			}
		});
	}

	var sticker_flag = false;
	// variable $target_area should be global
	// Post Editor
	if ($("#content").length !== 0) {
		var $target_area = $("#content");
	// Theme or Plugin Editor
	} else if ($("#newcontent").length !== 0) {
		var $target_area = $("#newcontent");
	}

	// First and Second Arguments are X and Y coordinates
	// Last Argument needs unique number except 0
	lines_box(400, 20, 1);
	search_box(400, 45, 2);
	style_box(400, 70, 3);

})(jQuery);
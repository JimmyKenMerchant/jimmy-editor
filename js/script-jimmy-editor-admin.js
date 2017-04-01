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
		// If moved already, retrieves its position
		if (window.sessionStorage.getItem("x-" + order_num)) {
			x_pos = window.sessionStorage.getItem("x-" + order_num);
		}
		if (window.sessionStorage.getItem("y-" + order_num)) {
			y_pos = window.sessionStorage.getItem("y-" + order_num);
		}
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
					if (g_sticker_flag === parseInt(order_num)) {
						g_sticker_flag = 0;
						$(".the-stickers").css("background-color", "#f0f");
						$(".the-pins").css({
									"border-right": "1.0em solid transparent",
									"border-left": "1.0em solid transparent"
								});
						var xstore = parseInt($("#lines-box").css("left"));
 						window.sessionStorage.setItem("x-" + order_num, xstore);
						var ystore = parseInt($("#lines-box").css("top"));
 						window.sessionStorage.setItem("y-" + order_num, ystore);
						return false;
					} else {
						g_sticker_flag = parseInt(order_num);
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
			)
			.click( function() {
					g_sticker_flag = 0;
					$(".the-stickers").css("background-color", "#f0f");
					$(".the-pins").css({
							"border-right": "1.0em solid transparent",
							"border-left": "1.0em solid transparent"
							});
					$("#lines-box").css("visibility", "hidden");
					$target_area[0].focus();
					return false;
				}
			);

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
					if(the_wrap === true) {
						$("#lines-wrap").css("display", "none");
						$target_area[0].focus();
						the_wrap = false;
					} else if(the_wrap === false) {
						$("#lines-wrap").css("display", "inline-block");
						the_wrap = true;
					}
					return false;
				}
			)
			.text("");

		var the_wrap = false;
		$("<div>").appendTo($("#lines-box"))
			.attr("id", "lines-wrap")
			.css({
				"display": "none",
				"vertical-align": "top",
				"width": "6.0rem",
				"height": "auto"
				}
			);
		// End of Common

		$("<div>").appendTo($("#lines-wrap"))
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
				.appendTo($("#lines-wrap"));

		$("<div>").appendTo($("#lines-wrap"))
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

		$("<div>").appendTo($("#lines-wrap"))
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
			var sel_start = el.selectionStart;
			var val = el.value;
	
			var cal = val.substr(0, sel_start).split("\n");
			var lines_n = cal.length;
			var num_n = cal[ cal.length - 1 ].length;
	
			$("#lines-text").text("L: " + lines_n + "\r\n" + "N: " + num_n);
	
			$("#lines-box").css("visibility", "visible");

			return false;
		});

		$('#lines-button1').bind('click.jimmy-editor_lines', function(e) {
			var val_input = $('#lines-input').val();
			if(val_input == parseInt(val_input)) {
				var lines_n = parseInt(val_input) - 1;
				var num_n = 0;
			} else {
				val_input = val_input.split(":", 2);
				if (val_input[0] === "" || val_input[1] === "") {
					return false;
				} else {
					var lines_n = parseInt(val_input[0]) - 1;
					var num_n = parseInt(val_input[1]);
				}
			}

			$('#lines-input').val("L:N?");
			var val = $target_area[0].value;
			var cal = val.substr(0).split("\n");

			// If lines is overflowed length of text
			var ck_length = lines_n + 1;
			if(cal.length < ck_length) {
				return false;
			}
			// If number is overflowed length of line
			if(cal[lines_n].length < num_n) {
				num_n = cal[lines_n].length;
			}

			var dest = 0;
			for(var i=0; i < lines_n; i++){
				dest += cal[i].length + 1;
			}

			dest += num_n;

			// Needs to refocus to correct siting particular in post editor
			$target_area[0].selectionStart = dest;
			$target_area[0].selectionEnd = dest;
			$('#lines-input').focus();
			$target_area[0].focus();

			// For Correct Scroll with Caret
			var front_v = val.slice(0, dest);
			var rear_v = val.slice(dest);
			$target_area[0].value = front_v + " " + rear_v;
			$target_area[0].value = front_v + rear_v;

			if(cal[lines_n].length === num_n) {
				$target_area[0].selectionStart = dest;
				$target_area[0].selectionEnd = dest;
			} else {
				$target_area[0].selectionStart = dest;
				$target_area[0].selectionEnd = dest + 1;
			}

			lines_n++;
	
			$("#lines-text").text("L: " + lines_n + "\r\n" + "N: " + num_n);

			return false;
		});

		$('#lines-button2').bind('click.jimmy-editor_top', function(e) {
			$target_area[0].selectionStart = 0;
			$target_area[0].selectionEnd = 0;

			// Needs to refocus to correct siting particular in post editor
			$('#lines-input').focus();
			$target_area[0].focus();

			$("#lines-text").text("L: " + 1 + "\r\n" + "N: " + 0);

			return false;
		});

		$('#lines-button3').bind('click.jimmy-editor_last', function(e) {
			var val = $target_area[0].value;	
			$target_area[0].selectionStart = val.length;
			$target_area[0].selectionEnd = val.length;

			// Needs to refocus to correct siting particular in post editor
			$('#lines-input').focus();
			$target_area[0].focus();

			var cal = val.substr(0).split("\n");
			$("#lines-text").text("L: " + cal.length + "\r\n" + "N: " + cal[cal.length - 1].length);

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

			if (g_sticker_flag === parseInt(order_num)) {
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
		// If moved already, retrieves its position
		if (window.sessionStorage.getItem("x-" + order_num)) {
			x_pos = window.sessionStorage.getItem("x-" + order_num);
		}
		if (window.sessionStorage.getItem("y-" + order_num)) {
			y_pos = window.sessionStorage.getItem("y-" + order_num);
		}
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
					if (g_sticker_flag === parseInt(order_num)) {
						g_sticker_flag = 0;
						$(".the-stickers").css("background-color", "#f0f");
						$(".the-pins").css({
									"border-right": "1.0em solid transparent",
									"border-left": "1.0em solid transparent"
								});
						var xstore = parseInt($("#search-box").css("left"));
 						window.sessionStorage.setItem("x-" + order_num, xstore);
						var ystore = parseInt($("#search-box").css("top"));
 						window.sessionStorage.setItem("y-" + order_num, ystore);
						return false;
					} else {
						g_sticker_flag = parseInt(order_num);
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
			)
			.click( function() {
					g_sticker_flag = 0;
					$(".the-stickers").css("background-color", "#f0f");
					$(".the-pins").css({
							"border-right": "1.0em solid transparent",
							"border-left": "1.0em solid transparent"
							});
					$("#search-box").css("visibility", "hidden");
					$target_area[0].focus();
					return false;
				}
			);

		$("<div>").appendTo($("#search-box"))
			.attr("id", "search-text")
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"width": "6.0rem",
				"height": "auto",
				"line-height": "2.0rem",
				"text-align": "center",
				"font-size": "1.5rem",
				"white-space": "pre",
				"background-color": "#aff",
				"color": "#000"
				}
			)
			.click( function() {
					if(the_wrap === true) {
						$("#search-wrap").css("display", "none");
						$target_area[0].focus();
						the_wrap = false;
					} else if(the_wrap === false) {
						$("#search-wrap").css("display", "inline-block");
						the_wrap = true;
					}
					return false;
				}
			)
			.text("Search");

		var the_wrap = false;
		$("<div>").appendTo($("#search-box"))
			.attr("id", "search-wrap")
			.css({
				"display": "none",
				"vertical-align": "top",
				"width": "6.0rem",
				"height": "auto"
				}
			);
		// End of Common

		var the_select_flag = 0;
		$("<div>").appendTo($("#search-wrap"))
			.attr("id", "search-button1")
			.css({
				"display": "inline-block",
				"vertical-align": "top",
				"width": "6.0rem",
				"height": "auto",
				"line-height": "2.0rem",
				"text-align": "center",
				"font-size": "1.0rem",
				"white-space": "pre",
				"background-color": "#ff0",
				"color": "#f00"
				}
			)
			.click( function() {
					if (the_select_flag === 0) {
						the_select_flag = 1;
						$("#search-text").text("Replace");
					} else if (the_select_flag === 1) {
						the_select_flag = 2;
						$("#search-text").text("Delete");
					} else if (the_select_flag === 2) {
						the_select_flag = 0;
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
				.appendTo($("#search-wrap"));

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
				.appendTo($("#search-wrap"));

		var the_i_flag = false;
		$("<div>").appendTo($("#search-wrap"))
			.attr("id", "search-button4")
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
				"color": "#AAA",
				"border-bottom": "1px solid #aaa",
				"transition": "background-color 0.5s"
				}
			)
			.click( function() {
					if (the_i_flag === false) {
						the_i_flag = true;
						$(this).css("color", "#000");
					} else if (the_i_flag === true) {
						the_i_flag = false;
						$(this).css("color", "#AAA");
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
			)
			.text("i");

		var the_m_flag = false;
		$("<div>").appendTo($("#search-wrap"))
			.attr("id", "search-button5")
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
				"color": "#AAA",
				"border-bottom": "1px solid #aaa",
				"transition": "background-color 0.5s"
				}
			)
			.click( function() {
					if (the_m_flag === false) {
						the_m_flag = true;
						$(this).css("color", "#000");
					} else if (the_m_flag === true) {
						the_m_flag = false;
						$(this).css("color", "#AAA");
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
			)
			.text("m");

		$("<div>").appendTo($("#search-wrap"))
			.attr("id", "search-button2")
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
			.text("Go");

		var the_bt3_backcol_hover = "#ff0";
		$("<div>").appendTo($("#search-wrap"))
			.attr("id", "search-button3")
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
				"color": "#AAA",
				"transition": "background-color 0.5s"
				}
			)
			.bind('mouseenter', function(e) {
							$(this).css("background-color", the_bt3_backcol_hover);
							return false;
						}
			)
			.bind('mouseleave', function(e) {
							$(this).css("background-color", "#ff0");
							return false;
						}
			)
			.text("Back");

		$target_area.bind('click.jimmy-editor_search_showbox', function(e) {
			the_nextstart = e.target.selectionStart;
			$("#search-box").css("visibility", "visible");
			// Clear Existing Array for back
			the_past.length = 0;
			the_bt3_backcol_hover = "#ff0";
			$("#search-button3").css("color", "#AAA");
			return false;	
		});

		// Variable the_nextstart uses for search/replace/delete
		var the_nextstart = 0;
		var the_val_search = "";
		var the_search_regex = {};
		var the_val_replace = "";
		var the_past = [];
		$('#search-button2').bind('click.jimmy-editor_search', function(e) {
			var temp_search = $('#search-input1').val();
			if (the_val_search !== temp_search) {
				the_val_search = temp_search;
				the_nextstart = $target_area[0].selectionStart;
			}
			var temp_replace = $('#search-input2').val();
			if (the_val_replace !== temp_replace) {
				the_val_replace = temp_replace;
				the_nextstart = $target_area[0].selectionStart;
			}

			// If Caret is moved after search/replace/delete
			if (the_nextstart !== $target_area[0].selectionEnd) {
				the_nextstart = $target_area[0].selectionStart;
			}

			if (the_val_search === "") {
				return false;
			}		

			var val = $target_area[0].value;

			if (the_val_replace !== "" && the_select_flag === 1) {
			// Replace
				var modi = "";
				if (the_m_flag === true) {
					modi = modi + "m";
				}
				if (the_i_flag === true) {
					modi = modi + "i";
				}
				the_search_regex = new RegExp(the_val_search, modi);
				var cal = val.substr(the_nextstart).search(the_search_regex);
				if (cal === -1) {
					$target_area[0].focus();
					return false;
				}
				cal += the_nextstart;

				// Returns whole matched string on [0]
				var mat = val.substr(the_nextstart).match(the_search_regex);

				// Needs to refocus to correct siting particular in post editor
				$target_area[0].selectionStart = cal;
				$target_area[0].selectionEnd = cal;
				$('#search-input1').focus();
				$target_area[0].focus();

				var slice_p = cal + mat[0].length;
				var front_v = val.slice(0, cal);
				var rear_v = val.slice(slice_p);
				// Replace Itself
				$target_area[0].value = front_v + the_val_replace + rear_v;

				the_nextstart = cal + the_val_replace.length;
				$target_area[0].selectionStart = cal;
				$target_area[0].selectionEnd = the_nextstart;

				$target_area.trigger('click.jimmy-editor_lines_showbox');

				// Undo up to 10 times
				if (the_past.length > 27) {
					for (var i = 0; i < 3 ; i++) {
						the_past.shift();
					}
				}
				the_past.push(cal);
				the_past.push(mat[0]);
				the_past.push(the_val_replace);
				the_bt3_backcol_hover = "#0ff";
				$("#search-button3").css("color", "#000");

				return false;
			} else if (the_val_replace === "" && the_select_flag === 2) {
			// Delete
				var modi = "";
				if (the_m_flag === true) {
					modi = modi + "m";
				}
				if (the_i_flag === true) {
					modi = modi + "i";
				}
				the_search_regex = new RegExp(the_val_search, modi);
				var cal = val.substr(the_nextstart).search(the_search_regex);
				if (cal === -1) {
					$target_area[0].focus();
					return false;
				}
				cal += the_nextstart;

				// Returns whole matched string on [0]
				var mat = val.substr(the_nextstart).match(the_search_regex);

				// Needs to refocus to correct siting particular in post editor
				$target_area[0].selectionStart = cal;
				$target_area[0].selectionEnd = cal;
				$('#search-input1').focus();
				$target_area[0].focus();

				var slice_p = cal + mat[0].length;
				var front_v = val.slice(0, cal);
				var rear_v = val.slice(slice_p);
				// Replace Itself
				$target_area[0].value = front_v + rear_v;

				the_nextstart = cal;
				$target_area[0].selectionStart = cal;
				$target_area[0].selectionEnd = the_nextstart;

				$target_area.trigger('click.jimmy-editor_lines_showbox');

				// Undo up to 10 times
				if (the_past.length > 27) {
					for (var i = 0; i < 3 ; i++) {
						the_past.shift();
					}
				}
				the_past.push(cal);
				the_past.push(mat[0]);
				the_past.push("");
				the_bt3_backcol_hover = "#0ff";
				$("#search-button3").css("color", "#000");

				return false;
			} else if (the_select_flag === 0) {
			// Search
				var modi = "";
				if (the_m_flag === true) {
					modi = modi + "m";
				}
				if (the_i_flag === true) {
					modi = modi + "i";
				}
				the_search_regex = new RegExp(the_val_search, modi);
				var cal = val.substr(the_nextstart).search(the_search_regex);
				if (cal === -1) {
					$target_area[0].focus();
					return false;
				}
				cal += the_nextstart;

				// Returns whole matched string on [0]
				var mat = val.substr(the_nextstart).match(the_search_regex);

				// Needs to refocus to correct siting particular in post editor
				$target_area[0].selectionStart = cal;
				$target_area[0].selectionEnd = cal;
				$('#search-input1').focus();
				$target_area[0].focus();

				// For Correct Scroll with Caret
				var front_v = val.slice(0, cal);
				var rear_v = val.slice(cal);
				$target_area[0].value = front_v + " " + rear_v;
				$target_area[0].value = front_v + rear_v;

				the_nextstart = cal + mat[0].length;
				$target_area[0].selectionStart = cal;
				$target_area[0].selectionEnd = the_nextstart;

				$target_area.trigger('click.jimmy-editor_lines_showbox');

				return false;
			}

			$target_area[0].focus();
			return false;
		});

		// Undo
		$('#search-button3').bind('click.jimmy-editor_search_undo', function(e) {

			if (the_past.length === 0) {
				$target_area[0].focus();
				return false;
			}

			var back_replace = the_past.pop();
			var back_search = the_past.pop();
			var cal = the_past.pop();

			// Needs to refocus to correct siting particular in post editor
			$target_area[0].selectionStart = cal;
			$target_area[0].selectionEnd = cal;
			$('#search-input1').focus();
			$target_area[0].focus();

			var val = $target_area[0].value;
			var slice_p = cal + back_replace.length;
			var front_v = val.slice(0, cal);
			var rear_v = val.slice(slice_p);

			$target_area[0].value = front_v + back_search + rear_v;
			the_nextstart = cal + back_search.length;
			$target_area[0].selectionStart = cal;
			$target_area[0].selectionEnd = the_nextstart;

			if (the_past.length === 0) {
				the_bt3_backcol_hover = "#ff0";
				$("#search-button3").css("color", "#AAA");
			}

			$target_area.trigger('click.jimmy-editor_lines_showbox');

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

			if (g_sticker_flag === parseInt(order_num)) {
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
		// If moved already, retrieves its position
		if (window.sessionStorage.getItem("x-" + order_num)) {
			x_pos = window.sessionStorage.getItem("x-" + order_num);
		}
		if (window.sessionStorage.getItem("y-" + order_num)) {
			y_pos = window.sessionStorage.getItem("y-" + order_num);
		}
		if (window.sessionStorage.getItem("col-" + order_num)) {
			$target_area.css("color", window.sessionStorage.getItem("col-" + order_num));
		}
		if (window.sessionStorage.getItem("size-" + order_num)) {
			$target_area.css("font-size", window.sessionStorage.getItem("size-" + order_num));
		}
		if (window.sessionStorage.getItem("weight-" + order_num)) {
			$target_area.css("font-weight", window.sessionStorage.getItem("weight-" + order_num));
		}
		if (window.sessionStorage.getItem("backcol-" + order_num)) {
			$target_area.css("background-color", window.sessionStorage.getItem("backcol-" + order_num));
		}

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
					if (g_sticker_flag === parseInt(order_num)) {
						g_sticker_flag = 0;
						$(".the-stickers").css("background-color", "#f0f");
						$(".the-pins").css({
									"border-right": "1.0em solid transparent",
									"border-left": "1.0em solid transparent"
								});
						var xstore = parseInt($("#style-box").css("left"));
 						window.sessionStorage.setItem("x-" + order_num, xstore);
						var ystore = parseInt($("#style-box").css("top"));
 						window.sessionStorage.setItem("y-" + order_num, ystore);
						return false;
					} else {
						g_sticker_flag = parseInt(order_num);
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
			)
			.click( function() {
					g_sticker_flag = 0;
					$(".the-stickers").css("background-color", "#f0f");
					$(".the-pins").css({
							"border-right": "1.0em solid transparent",
							"border-left": "1.0em solid transparent"
							});
					$("#style-box").css("visibility", "hidden");
					$target_area[0].focus();
					return false;
				}
			);

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
					if(the_wrap === true) {
						$("#style-wrap").css("display", "none");
						$target_area[0].focus();
						the_wrap = false;
					} else if(the_wrap === false) {
						$("#style-wrap").css("display", "inline-block");
						the_wrap = true;
					}
					return false;
				}
			)
			.text("Font Color" + "\r\n" + "Size:Weight" + "\r\n" + "Back Color");
		
		var the_wrap = false;
		$("<div>").appendTo($("#style-box"))
			.attr("id", "style-wrap")
			.css({
				"display": "none",
				"vertical-align": "top",
				"width": "6.0rem",
				"height": "auto"
				}
			);
		// End of Common

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
				.appendTo($("#style-wrap"));

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
				.appendTo($("#style-wrap"));

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
				.appendTo($("#style-wrap"));


		$("<div>").appendTo($("#style-wrap"))
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
				var font_color = $('#style-input1').val();
			} else {
				var font_color = $target_area.css("color");
			}

			var parm = $('#style-input2').val();
			parm = parm.split(":", 2);
			if (parm[0] !== "" ) {
				var font_size = parm[0];
			} else {
				var font_size = $target_area.css("font-size");
			}

			if (parm[1] !== "" ) {
				var font_weight = parm[1];
			} else {
				var font_weight = $target_area.css("font-weight");
			}

			if ($('#style-input3').val() !== "" ) {
				var back_color = $('#style-input3').val();
			} else {
				var back_color = $target_area.css("background-color");
			}

			$target_area.css({
					"color": font_color,
					"font-size": font_size,
					"font-weight": font_weight,
					"background-color": back_color
					}
				)

 			window.sessionStorage.setItem("col-" + order_num, $target_area.css("color"));
 			window.sessionStorage.setItem("size-" + order_num, $target_area.css("font-size"));
 			window.sessionStorage.setItem("weight-" + order_num, $target_area.css("font-weight"));
 			window.sessionStorage.setItem("backcol-" + order_num, $target_area.css("background-color"));

			$('#style-input1').val($target_area.css("color"));
			$('#style-input2').val($target_area.css("font-size") + ":" + $target_area.css("font-weight"));
			$('#style-input3').val($target_area.css("background-color"));

			$target_area[0].focus();

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

			if (g_sticker_flag === parseInt(order_num)) {
				// Slide the menu 4px minus of X and Y from the (mouse|touch) pointer
				$("#style-box").css({
						"left": e.clientX - 4 + "px",
						"top": e.clientY - 4 + "px"
						});
				return false;
			}
		});
	}

	var g_sticker_flag = false;
	// variable $target_area should be global
	var $target_area = {};
	if ($("#content").length !== 0) {
	// Post Editor
		$target_area = $("#content");
	} else if ($("#newcontent").length !== 0) {
	// Theme or Plugin Editor
		$target_area = $("#newcontent");
	} else {
	// Nothing of Both
		return true;
	}

	// First and Second Arguments are X and Y coordinates
	// Last Argument needs unique number except 0
	lines_box(400, 20, 1);
	search_box(400, 45, 2);
	style_box(400, 70, 3);

	return true;

})(jQuery);
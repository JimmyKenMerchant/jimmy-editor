<?php
/*
Plugin Name: Jimmy Editor
Plugin URI: http://electronics.jimmykenmerchant.com/jimmy-editor/
Description: Post Editor Patch and More
Author: Kenta Ishii
Author URI: http://electronics.jimmykenmerchant.com
Version: 0.9.9.3 Beta
Text Domain: jimmy-editor
Domain Path: /languages
License: GPL2 or Later
*/

/*
 * Enable to use tab indent in Post Editor ("Text" mode)
 *
 * admin_print_footer_scripts is a suitable hook. $hook_suffix may be changed by language.
 * In my experience, wp_enqueue_script where deps as array( 'jquery' ) was wrong for adding scripts of jQuery on both normal pages and admin pages.
 * Your scripts of jQuery needs echo just as below.
 */
function jimmy_editor_admin() {
	echo '<script type="text/javascript" src="' . plugins_url( 'js/post-editor-patch.js', __FILE__ ) . '"></script>' . "\r\n";
	echo '<script type="text/javascript" src="' . plugins_url( 'js/script-jimmy-editor-admin.js', __FILE__ ) . '"></script>' . "\r\n";
	return true;
}
add_action( 'admin_print_footer_scripts', 'jimmy_editor_admin' );


/*
 * Add admin style
 */
function jimmy_editor_admin_style() {
	wp_enqueue_style( 'jimmy-editor-admin-style',  plugins_url( 'style-jimmy-editor-admin.css', __FILE__ ), array(), '1.0' );
	return true;
}
add_action( 'admin_enqueue_scripts', 'jimmy_editor_admin_style' );


/*
 * Change Default Mode of Post Editor to "Text" mode
 */
function jimmy_editor_posteditor_default() {
	//return "tinymce";
	return "html";
}
add_filter( 'wp_default_editor', 'jimmy_editor_posteditor_default' );

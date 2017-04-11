<?php
/*
Plugin Name: Jimmy Editor
Plugin URI: http://electronics.jimmykenmerchant.com/jimmy-editor/
Description: Post Editor Patch and More
Author: Kenta Ishii
Author URI: http://electronics.jimmykenmerchant.com
Version: 1.0
Text Domain: jimmy-editor
Domain Path: /languages
License: GPL2 or Later
*/

/*
 * Enable to use tab indent in Post Editor ("Text" mode)
 *
 * In my experience, wp_enqueue_script where deps as array('jquery') was wrong for adding scripts of jQuery on both the normal page and the admin page.
 * By "true" of the last argument of wp_enqueue_script, the script will be on the footer.
 * This is good for your scripts of jQuery.
 */
function jimmy_editor_admin() {
	wp_enqueue_script( 'jimmy-editor-admin-script-patch',  plugins_url( 'js/post-editor-patch.js', __FILE__ ), array(), '1.0', true );
	wp_enqueue_script( 'jimmy-editor-admin-script',  plugins_url( 'js/script-jimmy-editor-admin.js', __FILE__ ), array(), '1.0', true );
	return true;
}
add_action( 'admin_enqueue_scripts', 'jimmy_editor_admin' );


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

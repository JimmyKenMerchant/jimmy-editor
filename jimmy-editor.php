<?php
/*
Plugin Name: Jimmy Editor
Plugin URI: http://electronics.jimmykenmerchant.com/jimmy-editor
Description: Post Editor Patch and More
Author: Kenta Ishii
Author URI: http://electronics.jimmykenmerchant.com
Version: 0.9.4 Beta
Text Domain: jimmy-editor
Domain Path: /languages
License: GPL2 or Later
*/

/*
 * post-editor patch in admin pages
 * To be able to use tab indent in post-editors (Text mode)
 *
 * admin_print_footer_scripts is a suitable hook. some $hook_suffix may be changed by language.
 * In my experience, wp_enqueue_script where deps as array( 'jquery' ) was wrong for adding JavaScript with jQuery
 * on both normal pages and admin pages. Your JavaScript with jQuery needs echo just as below.
 */
function jimmy_admin_editor() {
	// The Fourth argument makes Version Information. True Makes "1", false makes actual Version, null makes nothing
	echo '<script src="' . plugins_url( 'js/post-editor-patch.js', __FILE__ ) . '" type="text/javascript"></script>' . "\r\n";
	echo '<script src="' . plugins_url( 'js/script-jimmy-editor-admin.js', __FILE__ ) . '" type="text/javascript"></script>' . "\r\n";
	return true;
}
add_action( 'admin_print_footer_scripts', 'jimmy_admin_editor' );

/* Add admin style */
function admin_jimmy_editor_style() {
	wp_enqueue_style( 'style-jimmy-editor-admin',  plugins_url( 'style-jimmy-editor-admin.css', __FILE__ ), array(), null );
	return true;
}
add_action( 'admin_enqueue_scripts', 'admin_jimmy_editor_style' );

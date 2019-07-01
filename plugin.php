<?php
/**
 * Plugin Name: columns-block
 * Plugin URI: git@github.com:cs-ferguson/columns-block.git
 * Description: For laying out content blocks in columns using flex
 * Author: Chris Ferguson
 * Author URI: https://github.com/cs-ferguson
 * Version: 1.0.4
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'init.php';

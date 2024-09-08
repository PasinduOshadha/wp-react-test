<?php
/**
 * Plugin Name: Enqueue React JS Plugin
 * Description: A simple plugin to enqueue react.js.
 * Version: 1.0
 * Author: Your Name
 */

 // Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

function enqueue_react_js_and_css() {
    // Enqueue the React JS build file
    wp_enqueue_script(
        'react-js', // Handle for the script
        plugin_dir_url(__FILE__) . 'app/dist/build.js', // Path to the final build.js file
        array(), // Dependencies (if any)
        '1.0', // Version number
        true // Load in footer
    );

    // Enqueue the CSS file from app/build directory
    wp_enqueue_style(
        'app-styles', // Handle for the CSS file
        plugin_dir_url(__FILE__) . 'app/dist/index.css', // Path to the CSS file
        array(), // Dependencies (if any)
        '1.0' // Version number
    );
}

// Hook into 'wp_enqueue_scripts' to load JS and CSS on the front-end
add_action('wp_enqueue_scripts', 'enqueue_react_js_and_css');

// Function to output the div with id 'app-wrap'
function app_wrap_shortcode() {
    // This is the shortcode output, a div with id "app-wrap"
    return '<div id="app-wrap"></div>';
}

// Register the shortcode for 'app-wrap'
function register_app_wrap_shortcode() {
    add_shortcode('app_wrap', 'app_wrap_shortcode');
}



// Hook into 'init' to register the shortcode
add_action('init', 'register_app_wrap_shortcode');

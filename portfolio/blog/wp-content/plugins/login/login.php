<?php
/**
 * Plugin Name: Login
 * Plugin URI: seungmin.kr
 * Description: This plugin helps you edit the login page.
 * Version: 1.0.0
 * Author: Seungmin Lee
 * Author URI: seungmin.kr
 * License: GPL2
 */

function custom_login() {
  echo '<link rel="stylesheet" type="text/css" href="' . get_bloginfo('stylesheet_directory') . '/login/custom-login-styles.css" />';
}
add_action('login_head', 'custom_login');

function login_logo_url() {
  return get_bloginfo( 'url' );
}
add_filter( 'login_headerurl', 'login_logo_url' );

function login_logo_url_title() {
  return 'Seungmin Lee - Blog';
}
add_filter( 'login_headertitle', 'login_logo_url_title' );
?>

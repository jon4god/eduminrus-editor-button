<?php
/*
Plugin Name: Теги для ВУЗов
Plugin URI: https://github.com/jon4god/eduminrus-editor-button
Description: Плагин для редактора TinyMCE, который добавляет для сайта теги в соотвествии с рекомендациями Министерства Образования.
Version: 0.1
Author: Evgeniy Kutsenko
Author URI: http://starcoms.ru
License: GPL2
*/
if (!function_exists('add_action')) {
  echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
  exit;
}

add_filter('tiny_mce_before_init', 'eduminrus_mce_options');
function eduminrus_mce_options( $init ) {
  $ext = 'span[id|name|class|lang|style|itemprop]';
  if ( isset( $init['extended_valid_elements'] ) ) {
    $init['extended_valid_elements'] .= ',' . $ext;
  } else {
    $init['extended_valid_elements'] = $ext;
   }
  return $init;
}

add_action( 'mce_buttons', 'eduminrus_register_buttons' );
function eduminrus_register_buttons($buttons) {
  array_push( $buttons, 'eduminrus' );
  return $buttons;
}

add_action( 'mce_external_plugins', 'eduminrus_add_button' );
function eduminrus_add_button($plugin_array) {
  $plugin_array['eduminrus'] = plugins_url('/js/eduminrus-plugin.js',__FILE__);
  return $plugin_array;
}

add_action('admin_enqueue_scripts', 'eduminrus_add_css');
function eduminrus_add_css() {
    wp_enqueue_style('eduminrus', plugins_url('/css/eduminrus.css', __FILE__));
}
?>
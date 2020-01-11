<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'smilee');

/** MySQL database username */
define('DB_USER', 'smilee');

/** MySQL database password */
define('DB_PASSWORD', 'dHsmil*3');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '7(@8Iw0T>VL}6ray*/,TMG84-yI-]TvL,7/43Aj*lPIM[ <y#y`IRF^}LZ394ynU');
define('SECURE_AUTH_KEY',  't&)O,56uyvlmfs!jjLj}sb3DA#D5&OMog4ZCJYc9f1|2d&hw:faPjd_J<$ =}wT@');
define('LOGGED_IN_KEY',    'mZ^Yuqf3o]B|Yx5XxIN<6;8wFv*ed@2TH||NCKe=,z`HpS L]aVQdc<y{8s(pq2q');
define('NONCE_KEY',        '.<$x#f#<Z#SS${C!<1gMPct*zo6I7Du%^<3&_wjIGEEh+i!0Tyn,AYO {~VAXLhN');
define('AUTH_SALT',        'UwKi~(n9%JZ(-L_+jOS^symX%<J.yR6wZZv.K|^-|&Jm^$Y#>GtbkQb:Z~@00RkM');
define('SECURE_AUTH_SALT', 'Nh&#t8 gLaE|PoCj,We|c%<KJVv+N+!Y88/k/Y6hTTqPVFa,f?umm%Z4j4xb;wB{');
define('LOGGED_IN_SALT',   '7eey;jj%g9<iCRlN!oZdOt(Q%2<sxmT2X&.;qmJ/8D]v]X8sfN}EDWnU#1]2+|@P');
define('NONCE_SALT',       'fn%.e>e54ik]2YTsj==;v-Tw/2N0!FYHo,kS42<MF$+#|U/|re|-:I(AUbTcMQw)');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

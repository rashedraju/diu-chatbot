<?php
spl_autoload_register( function ( $fileName ) {
    $path = strtolower( str_replace( "Chatbot\\", "", $fileName ) );
    $path = str_replace( "\\", "/", $path );
    include_once ( "../" . $path . ".php" );
    // include_once($path.".php");
} );

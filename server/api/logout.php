<?php
// Headers
header( "Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}" );
header( 'Access-Control-Allow-Credentials: true' );
header( "Content-Type: application/json; charset=UTF-8" );
header( "Access-Control-Allow-Methods: POST" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );

use \Chatbot\Controller\Auth\User;
use \Chatbot\Exceptions\AuthException;

// include file autoloader
include_once "../config/autoloader/autoloader.php";
require "../vendor/autoload.php";

// Instantiate Auth Controller
$user = new User();

try {
    $data = $user->logout();

    // Sent data to client
    http_response_code( 200 );
    echo json_encode( $data );
} catch ( AuthException $error ) {

    http_response_code( $error->getCode() );
    // Sent error status to the client
    echo json_encode( [
        "message" => $error->getMessage()
    ] );
    die();
}

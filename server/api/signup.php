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

require "../vendor/autoload.php";
require "../config/autoloader/autoloader.php";

// Get user data from post request
$data = json_decode( file_get_contents( "php://input" ), true );
$username = $data['username'] ?? "";
$email = $data['email'] ?? "";
$password = $data['password'] ?? "";

// Instantiate Auth Controller
$user = new User();

try {
    $data = $user->signup( $username, $email, $password );

    // Sent data to client
    http_response_code( 200 );
    echo json_encode( $data );

} catch ( AuthException $error ) {
    // Sent error status to the client
    http_response_code( $error->getCode() );
    echo json_encode( [
        "message" => $error->getMessage()
    ] );
    die();
}

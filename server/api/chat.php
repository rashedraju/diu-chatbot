<?php
// Headers
header( "Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}" );
header( 'Access-Control-Allow-Credentials: true' );
header( "Content-Type: application/json; charset=UTF-8" );
header( "Access-Control-Allow-Methods: PUT, GET, POST" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );

use \Chatbot\Controller\Chat\Chat;

require "../config/autoloader/autoloader.php";
require "../vendor/autoload.php";

// Get user data from post request
$data = json_decode( file_get_contents( "php://input" ), true );
$question = $data['question'] ?? "";

// Get user authorization token
$headers = getallheaders();
$AuthString = $headers['Authorization'] ?? "";
$token = explode( " ", $AuthString )[1];

// Instantiate Auth Controller
$chat = new Chat();

try {
    $data = $chat->chat( $token, $question );
    // Sent data to client
    echo json_encode( $data );

} catch ( \Exception $error ) {
    // Sent error status to the client
    echo json_encode( $error->getMessage() );
    die();
}

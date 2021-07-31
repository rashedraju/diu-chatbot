<?php
namespace Chatbot\Model\Auth\User;

use Chatbot\Exceptions\AuthException;

// Interfaces
interface SignupInterface {
    public function signup( string $username, string $email, string $password );
}

/**/
class Signup implements SignupInterface {
    private $connection;
    function __construct( $conn ) {
        $this->connection = $conn;
    }

    function signup( string $username = "", string $email = "", string $password = "" ) {
        // Sanitize Data
        $username = filter_var( $username, FILTER_SANITIZE_STRING );
        $email = filter_var( $email, FILTER_SANITIZE_STRING );
        $password = filter_var( $password, FILTER_SANITIZE_STRING );

        // check if email, password and user name is't empty
        if ( $username && $email && $password ) {
            // make password hash
            $_password = password_hash( $password, PASSWORD_BCRYPT );

            // inser query
            $query = "INSERT INTO `users` (`email`, `password`, `username`) VALUES('{$email}', '{$_password}', '{$username}')";
            mysqli_query( $this->connection, $query );

            // check data added successfully
            if ( mysqli_error( $this->connection ) ) {
                throw new AuthException( 'Email already exist.', 409 );
            } else {
                // signup success
                return true;
            }
        } else {
            throw new AuthException( 'Form field should\'t be empty.', 204 );
        }
    }
}

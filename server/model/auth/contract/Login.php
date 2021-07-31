<?php
namespace Chatbot\Model\Auth\Contract;

use Chatbot\Exceptions\AuthException;

interface BaseLogin{
    function login( $email, $pass );
}

abstract class Login implements BaseLogin{
    protected $connection;
    protected $query = "";
    protected $email;
    protected $password;

    public function __construct( $conn ) {
        // get connection
        $this->connection = $conn;
    }

    protected function filterInput() {
        $this->emeil = filter_var( $this->email, FILTER_SANITIZE_STRING );
        $this->password = filter_var( $this->password, FILTER_SANITIZE_STRING );
        return $this;
    }

    protected function isEmailPasswordNotEmpty() {
        if ( $this->email && $this->password ) {
            return $this;
        }
        throw new AuthException( "Email or password is empty.", 403 );
    }

    protected function doLogin() {
        $res = mysqli_query( $this->connection, $this->query );

        if ( mysqli_num_rows( $res ) > 0 ) {
            $data = mysqli_fetch_assoc( $res );
            $_password = $data['password'];

            // verify password
            if ( password_verify( $this->password, $_password ) ) {
                // password matches

                $payload = [
                    "id"       => $data['id'],
                    'username' => $data['username']
                ];

                return $payload;

            } else {
                throw new AuthException( "Email and password did't match.", 403 );
            }
        } else {
            throw new AuthException( "Email not found.", 403 );
        }
    }
}

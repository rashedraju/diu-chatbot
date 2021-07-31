<?php
namespace Chatbot\Controller\Auth;

use Chatbot\Config\Database\Database;
use Chatbot\Config\Env\Env;
use Chatbot\Model\Auth\Contract\Authorization;
use Chatbot\Model\Auth\User\Login;
use Chatbot\Model\Auth\User\Signup;

// Interfaces
interface UserAuthInterface {
    function login( string $email, string $password );
    function signup( string $username, string $email, string $password );
    function logout();
}

/**
 * Abstract class for centralize auth modules such as login and signup
 * @not instantiatable
 * @must have database object
 */
abstract class UserAuthAdapter {
    protected $loginObj;
    protected $signupObj;

    function __construct() {
        // Environment variable config
        Env::configure();

        // connect database
        $db = new Database();
        $connection = $db->connect();

        // Instantiate Login and Signup
        $this->loginObj = new Login( $connection );
        $this->signupObj = new Signup( $connection );
    }
}

/**
 * Auth Controller should extends AuthAdapter.
 * must have login and signup method
 */
class User extends UserAuthAdapter implements UserAuthInterface {
    public function login( string $email, string $password ) {
        if ( $email && $password ) {
            // Loign with email and password
            $response = $this->loginObj->login( $email, $password );

            // generate authotrization token
            $token = Authorization::generateJWT( $response );

            // set cookie
            Authorization::setCookie( $token );

        } else {
            // If email & password empty: check atuhorization cookie
            $token = Authorization::getCookie();
            $response = Authorization::checkAuthorization( $token );
        }

        return [
            "accessToken" => $token,
            "userData"    => $response
        ];
    }

    public function signup( string $username, string $email, string $password ) {
        $this->signupObj->signup( $username, $email, $password );
        // if signup successfully
        // do loign
        return $this->login( $email, $password );
    }

    public function logout() {
        $res = Authorization::removeCookie();
        return $res;
    }
}

<?php
namespace Chatbot\Model\Auth\Contract;

use Chatbot\Exceptions\AuthException;
use Firebase\JWT\JWT;

class Authorization {
    public static function checkAuthorization( $jwt ) {
        $privateKey = $_ENV['JWT_KEY'];
        $decodedData = JWT::decode( $jwt, $privateKey, ['HS256'] );
        $decodedArray = (array) $decodedData;
        return $decodedArray['userData'];
    }

    public static function generateJWT( array $userPayload = [] ): string {
        $secret_key = $_ENV['JWT_KEY'];
        $issuedat_claim = time();
        $expire_claim = $issuedat_claim + 60 * 60 * 24 * 7;

        $payload = [
            "Issuedat"   => $issuedat_claim,
            "Expiration" => $expire_claim,
            "userData"   => $userPayload
        ];
        $jwt = JWT::encode( $payload, $secret_key );
        return $jwt;
    }

    public static function setCookie( string $jwt ) {
        $expTime = time() + 60 * 60 * 24 * 7;
        setcookie( 'access_token', $jwt, $expTime, "", "", 1, 1 );
    }

    public static function getCookie() {
        $token = $_COOKIE['access_token'];
        if ( $token ) {
            return $token;
        }

        throw new AuthException( "User not authenticated.", 401 );

    }

    public static function removeCookie() {
        setcookie( 'access_token', "", time() - 3600, "", "", 1, 1 );
        return [
            "message" => "You are now logged out"
        ];
    }
}

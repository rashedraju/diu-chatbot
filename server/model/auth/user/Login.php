<?php
namespace Chatbot\Model\Auth\User;

use Chatbot\Model\Auth\Contract\Login as BaseLogin;

class Login extends BaseLogin {
    public function login( $email, $password ) {
        $this->email = $email;
        $this->password = $password;
        $response = $this->filterInput()->isEmailPasswordNotEmpty()->generateQuery()->doLogin();
        return $response;
    }

    private function generateQuery() {
        $this->query = "SELECT * FROM `users` WHERE `email`='{$this->email}'";
        
        return $this;
    }
}


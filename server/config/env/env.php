<?php
namespace Chatbot\Config\Env;

use Dotenv\Dotenv;

class Env {
    public static function configure() {
        $dotenv = Dotenv::createImmutable( __DIR__ . "\..\.." );
        $dotenv->safeLoad();
    }
}

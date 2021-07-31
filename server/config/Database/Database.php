<?php
namespace Chatbot\Config\Database;

use Chatbot\Config\Env\Env;
use Chatbot\Exceptions\DbException;

class Database {
    private $dbHost = "";
    private $dbUser = "";
    private $dbPass = "";
    private $dbName = "";

    public function __construct() {
        Env::configure();

        $this->dbHost = $_ENV['DB_HOST'];
        $this->dbUser = $_ENV['DB_USER'];
        $this->dbPass = $_ENV['DB_PASS'];
        $this->dbName = $_ENV['DB_NAME'];
    }

    public function connect() {
        $connection = mysqli_connect( $this->dbHost, $this->dbUser, $this->dbPass, $this->dbName );
        if ( $connection ) {
            return $connection;
        } else {
            throw new DbException( "Failed to connect database", 502 );
        }
    }
}

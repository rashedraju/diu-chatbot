<?php
namespace Chatbot\Controller\Chat;

use Chatbot\Config\Database\Database;
use Chatbot\Config\Env\Env;
use Chatbot\Exceptions\DbException;
use Chatbot\Model\Auth\Contract\Authorization;
use Chatbot\Model\Chat\Initial;
use Chatbot\Model\Chat\Question;
use Chatbot\Model\Chat\Reply;
use Chatbot\Model\Chat\Suggestions;
use Chatbot\Model\Chat\Token;

class Chat {
    public function chat( string $authToken = "", string $query = "" ) {
        try {
            // Environtment config
            Env::configure();

            // check authorization
            Authorization::checkAuthorization( $authToken );

            // connect database
            $db = new Database();
            $connection = $db->connect();

            // Initail state of chatbot
            // Sent some welcome message and suggestion
            if ( $query == "" ) {
                return Initial::initial( $connection );
            }

            // Try make a reply with query directly
            $reply = Reply::getReplyByQuery( $connection, $query );
            if ( $reply ) {
                return $reply;
            }

            // If no reply found with query. go for next steps
            // Generate tokens
            $tokens = Token::generateToken( $query );

            // if no tokens found send some suggestions
            if ( !$tokens ) {
                return Initial::getSuggestions( $connection );
            }

            // Find question ids
            $ids = Question::getIds( $connection, $tokens );

            // if no question ids found send some suggestions
            if ( count( $tokens ) == 0 ) {
                return Initial::getSuggestions( $connection );
            }

            // If ids contains one id, make a reply with that id.
            if ( count( $ids ) == 1 ) {
                return Reply::getReplyById( $connection, $ids[0] );
            } else if ( count( $ids ) > 1 ) {
                // If ids array has more than one id's then there should be more questions. so make some suggestions.
                return Suggestions::getSuggestions( $connection, $ids );
            }

            // if no questions id found we will do:
            //  1. sent interupt messages and suggestions
            //  2. sent the user question to admin. admin will reply manually of this question.
            return Initial::interupt( $connection );

        } catch ( DbException $err ) {
            echo $err->getMessage();
        }
    }
}

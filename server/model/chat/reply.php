<?php
namespace Chatbot\Model\Chat;

// Interfaces
interface ReplyInterface {
    public static function getReplyById( $connection, int $id );
    static function getReplyByQuery( $connection, string $query );
}

class Reply implements ReplyInterface {

    static function getReplyById( $connection, int $id ) {
        $query = "SELECT `id`, `reply` FROM `data` WHERE `id`={$id}";
        $res = mysqli_query( $connection, $query );

        // result found, return data
        if ( $row = mysqli_fetch_assoc( $res ) ) {
            return ["messages" => [$row]];
        }
        return false;
    }

    static function getReplyByQuery( $connection, string $query ) {
        $query = "SELECT `id`, `reply` FROM `data` WHERE `question` LIKE '%{$query}%'";
        $res = mysqli_query( $connection, $query );

        // result found, return data
        if ( $row = mysqli_fetch_assoc( $res ) ) {
            return ["messages" => [$row]];
        }
        return false;
    }
}

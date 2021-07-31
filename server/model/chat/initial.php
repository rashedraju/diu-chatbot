<?php
namespace Chatbot\Model\Chat;

class Initial {
    public static function initial( $connection ): array{
        $messages = self::initialReply( $connection );
        $suggestions = self::getSuggestions( $connection );

        return ["messages" => $messages, "suggestions" => $suggestions];
    }

    public static function interupt( $connection ): array{
        $messages = self::interuptReply( $connection );
        $suggestions = self::getSuggestions( $connection );

        return ["messages" => $messages, "suggestions" => $suggestions];
    }

    public static function initialReply( $connection ): array{
        $query = "SELECT `id`, `reply` FROM `initial_reply` WHERE `role`='initial'";
        return self::getData( $connection, $query );
    }

    private static function interuptReply( $connection ): array{
        $query = "SELECT `id`, `reply` FROM `initial_reply` WHERE `role`='interupt'";
        return self::getData( $connection, $query );
    }

    public static function getSuggestions( $connection ): array{
        $query = "SELECT `id`, `question` FROM `initial_suggestions`";
        return self::getData( $connection, $query );
    }

    private static function getData( $connection, $query ): array{
        $res = mysqli_query( $connection, $query );

        $_data = [];
        while ( $row = mysqli_fetch_assoc( $res ) ) {
            array_push( $_data, $row );
        }

        return $_data;
    }
}

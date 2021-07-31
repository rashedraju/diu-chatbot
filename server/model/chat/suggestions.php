<?php
namespace Chatbot\Model\Chat;

// Interfaces
interface SuggestionsInterface {
    public static function getSuggestions( $connection, array $ids );
}

class Suggestions implements SuggestionsInterface {
    static function getSuggestions( $connection, array $ids = [] ) {
        // Generate query from ids array
        $query = self::generateQuery( $ids );

        $suggestions = self::searchSuggestions( $connection, $query );
        return ["messages" => [["reply" => "Did you mean? "]], "suggestions" => $suggestions];
    }

    // Generate mysql query from tokens
    private static function generateQuery( array $ids ): string {
        $_query = "";

        // loop over array and generate query
        foreach ( $ids as $id ) {
            $_query .= "SELECT `id`, `question` FROM `data` WHERE `id`={$id};";
        }

        return $_query;
    }

    // Search all matching id's from `data` table
    private static function searchSuggestions( $connection, string $query = "" ): array{
        $data = [];

        // Operating mysql multi query to find ids.
        // To know more about mysql multi query how does its work, visit: https://php.net/manual/en/mysqli.multi-query.php
        $queryStatus = mysqli_multi_query( $connection, $query );

        if ( $queryStatus ) {
            do {

                // store first result set
                if ( $result = mysqli_store_result( $connection ) ) {
                    while ( $row = mysqli_fetch_assoc( $result ) ) {
                        // store id
                        array_push( $data, $row );
                    }

                    mysqli_free_result( $result );
                }

            } while ( mysqli_next_result( $connection ) );
        };

        return $data;
    }
}

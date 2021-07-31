<?php
namespace Chatbot\Model\Chat;

// Question class used to find most possible questions from given user query.
class Question {
    public static function getIds( $connection, array $tokens = [] ): array{

        // Generate query from tokens array
        $query = self::generateQuery( $tokens );

        // Search all ids in database with matching query
        $allIds = self::searchIds( $connection, $query );

        // Find the most frequent ids from allIds array
        return self::mostFrequentArrayItems( $allIds );
    }

    // Takes the input array and return a array with most frequent elements
    private static function mostFrequentArrayItems( array $items = [] ): array{
        $_ids = [];

        if ( count( $items ) > 0 ) {
            $arr = array_count_values( $items );
            arsort( $arr );

            // Takes array first element
            $tempCount = $arr[array_key_first( $arr )];

            foreach ( $arr as $id => $count ) {
                if ( $tempCount == $count ) {
                    array_push( $_ids, $id );
                } else {
                    break;
                }
            }
        }

        return $_ids;
    }

    // Generate mysql query from tokens
    private static function generateQuery( array $keyWords ): string {
        $_query = "";

        // loop over array and generate query
        foreach ( $keyWords as $key ) {
            $_query .= "SELECT id FROM `data` WHERE keywords LIKE '%{$key}%';";
        }

        return $_query;
    }

    // Search all matching id's from `data` table
    private static function searchIds( $connection, string $query = "" ): array{
        $data = [];

        // Operating mysql multi query to find ids.
        // To know more about mysql multi query how does its work, visit: https://php.net/manual/en/mysqli.multi-query.php
        $queryStatus = mysqli_multi_query( $connection, $query );

        if ( $queryStatus ) {
            do {

                // store first result set
                if ( $result = mysqli_store_result( $connection ) ) {
                    while ( $row = mysqli_fetch_row( $result ) ) {
                        // store id
                        array_push( $data, $row[0] );
                    }

                    mysqli_free_result( $result );
                }

            } while ( mysqli_next_result( $connection ) );
        };

        return $data;
    }
}

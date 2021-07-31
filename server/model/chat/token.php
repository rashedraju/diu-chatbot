<?php
namespace Chatbot\Model\Chat;

/*
 * Implements Natural Language Processing (NLP) to process of converting text into structured data  for a machine to understand.
 */

interface TokenInterface {
    public static function generateToken( string $token );
}

class Token implements TokenInterface {
    /**
     * genereateToken takes a string as input to make a array with possible tokens
     */
    public static function generateToken( string $string = "" ) {
        $string = strtolower( $string );

        $string = self::phase1( $string );
        $string = self::phase2( $string );
        $string = self::phase3( $string );

        $string = self::removeSpecialChar( $string );
        if ( strlen( $string ) > 0 ) {
            return explode( " ", $string );
        }
        return false;
    }

    // String perser methods
    private static function phase1( string $string = "" ): string {
        $words = ['another', 'any', 'anybody', 'anyone', 'anything', 'as', 'aught', 'both', 'each', 'either', 'enough', 'everybody', 'everyone', 'everything', 'few', 'he', 'her', 'hers', 'herself', 'him', 'himself', 'his', 'I', 'idem', 'it', 'its', 'itself', 'many', 'me', 'mine', 'most', 'my', 'myself', 'naught', 'neither', 'no', 'one', 'nobody', 'none', 'nothing', 'nought', 'one', 'one', 'another', 'other', 'others', 'ought', 'our', 'ours', 'ourself', 'ourselves', 'several', 'she', 'some', 'somebody', 'someone', 'something', 'somewhat', 'such', 'suchlike', 'that', 'thee', 'their', 'theirs', 'theirself', 'theirselves', 'them', 'themself', 'themselves', 'there', 'these', 'they', 'thine', 'this', 'those', 'thou', 'thy', 'thyself', 'us', 'we', 'whatever', 'whatnot', 'whatsoever', 'whence', 'whereby', 'wherefrom', 'wherein', 'whereinto', 'whereof', 'whereon', 'wherever', 'wheresoever', 'whereto', 'whereunto', 'wherewith', 'wherewithal', 'whether', 'which', 'whichever', 'whichsoever', 'whoever', 'whom', 'whomever', 'whomso', 'whomsoever', 'whosever', 'whosesoever', 'whoso', 'whosoever', 'yon', 'yonder', 'above', 'across', 'after', 'against', 'along', 'amid', 'among', 'anti', 'around', 'as', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'besides', 'between', 'beyond', 'but', 'by', 'concerning', 'considering', 'despite', 'down', 'during', 'except', 'excepting', 'excluding', 'following', 'for', 'from', 'inside', 'into', 'like', 'minus', 'near', 'of', 'off', 'on', 'onto', 'opposite', 'outside', 'over', 'past', 'per', 'plus', 'regarding', 'round', 'save', 'since', 'than', 'through', 'to', 'toward', 'towards', 'under', 'underneath', 'unlike', 'until', 'up', 'upon', 'versus', 'via', 'with', 'within', 'without'];

        $pattern = self::generateRegex( $words );

        $string = preg_replace( $pattern, "", $string );
        return $string;
    }

    private static function phase2( string $string = "" ) {
        $words = ['am', 'is', 'are', 'and', 'in', 'that', 'but', 'or', 'as', 'if', 'than', 'because', 'while', 'after', 'so', 'though', 'since', 'until', 'whether', 'before', 'although', 'nor', 'like', 'once', 'unless', 'now', 'except'];

        $pattern = self::generateRegex( $words );

        $string = preg_replace( $pattern, "", $string );
        return $string;
    }

    private static function phase3( string $string = "" ): string {
        $words = ['a', 'an', 'any', 'both', 'each', 'either', 'enough', 'every', 'half', 'her', 'his', 'its', 'least', 'less', 'many', 'more', 'such', 'some', 'several', 'our', 'not', 'neither', 'much', 'most', 'that', 'a few', 'fewer', 'fewest', 'a litle', 'other', 'another', 'the', 'this', 'their', 'these', 'those', 'which', 'whose'];

        $pattern = self::generateRegex( $words );

        $string = preg_replace( $pattern, "", $string );
        return $string;
    }

    private static function removeSpecialChar( string $string = "" ): string {
        $string = preg_replace( '/[^A-Za-z0-9\-]/', ' ', $string );
        return trim( preg_replace( '/\s+/', " ", $string ) );
    }

    private static function generateRegex( array $words = [] ): string {
        $str = "/";

        foreach ( $words as $value ) {
            $str .= "\\b{$value}\\b|";
        }

        $str = substr( $str, 0, -1 );

        $str .= "/i";

        return $str;
    }
}

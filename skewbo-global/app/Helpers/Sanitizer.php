<?php
/**
 * Skewbo Global Paint Limited
 * Sanitization & Security Helper
 */

declare(strict_types=1);

namespace App\Helpers;

class Sanitizer
{
    /**
     * Escape HTML output against XSS attacks
     */
    public static function escape(?string $data): string
    {
        if ($data === null) {
            return '';
        }
        return htmlspecialchars(trim($data), ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    }

    /**
     * Sanitize string input
     */
    public static function cleanString(?string $data): string
    {
        if ($data === null) {
            return '';
        }
        return trim(strip_tags($data));
    }

    /**
     * Validate and sanitize email
     */
    public static function cleanEmail(?string $email): string
    {
        return filter_var(trim((string)$email), FILTER_SANITIZE_EMAIL) ?: '';
    }

    /**
     * Generate URL slug
     */
    public static function slugify(string $text): string
    {
        $text = preg_replace('~[^\pL\d]+~u', '-', $text);
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text) ?: $text;
        $text = preg_replace('~[^-\w]+~', '', $text);
        $text = trim($text, '-');
        $text = preg_replace('~-+~', '-', $text);
        return strtolower($text ?: 'n-a');
    }
}

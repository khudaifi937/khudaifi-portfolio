<?php
declare(strict_types=1);

function portfolioDatabase(): PDO
{
    $host = getenv('PORTFOLIO_DB_HOST') ?: '127.0.0.1';
    $port = getenv('PORTFOLIO_DB_PORT') ?: '3306';
    $database = getenv('PORTFOLIO_DB_NAME') ?: 'khudaifi_portfolio';
    $username = getenv('PORTFOLIO_DB_USER') ?: 'root';
    $password = getenv('PORTFOLIO_DB_PASSWORD');

    if ($password === false) {
        $password = '';
    }

    $dsn = "mysql:host={$host};port={$port};dbname={$database};charset=utf8mb4";

    return new PDO($dsn, $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
}

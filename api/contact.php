<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['message' => 'Metode permintaan tidak didukung.']);
}

function postedString(string $key): string
{
    $value = $_POST[$key] ?? '';

    return is_string($value) ? trim($value) : '';
}

$name = postedString('name');
$email = postedString('email');
$topic = postedString('topic');
$message = postedString('message');

$allowedTopics = [
    'Website Development',
    'Frontend Development',
    'Backend & API Development',
    'Database Architecture',
    'Website Maintenance',
    'Job Opportunity / Collaboration',
];

if (
    $name === ''
    || strlen($name) > 100
    || filter_var($email, FILTER_VALIDATE_EMAIL) === false
    || strlen($email) > 254
    || !in_array($topic, $allowedTopics, true)
    || $message === ''
    || strlen($message) > 5000
) {
    respond(422, ['message' => 'Mohon periksa kembali nama, email, topik, dan pesan Anda.']);
}

require_once __DIR__ . '/database.php';

try {
    $database = portfolioDatabase();
    $statement = $database->prepare(
        'INSERT INTO contact_messages (name, email, topic, message)
         VALUES (:name, :email, :topic, :message)'
    );
    $statement->execute([
        ':name' => $name,
        ':email' => $email,
        ':topic' => $topic,
        ':message' => $message,
    ]);
} catch (PDOException $error) {
    error_log('Portfolio contact form database error: ' . $error->getMessage());
    respond(500, ['message' => 'Pesan belum dapat disimpan. Periksa koneksi MySQL Laragon lalu coba lagi.']);
}

respond(201, ['message' => 'Terima kasih! Pesan Anda berhasil disimpan.']);

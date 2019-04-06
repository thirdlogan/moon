<?php

class DbService {
    static public function pdo() {
        $host = 'localhost';
        $db = 'moon';
        $user = 'root';
        $pass = 'slashdot';
        $charset = 'utf8mb4';

        $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];

        try {
            $pdo = new PDO($dsn, $user, $pass, $options);
            return $pdo;
        }
        catch (\PDOException $e) {
            throw $e;
        }
    }
}

?>
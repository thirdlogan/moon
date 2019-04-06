<?php

require('db-service.php');
require('../classes/star.php');

class StarService {
    static public function fetchStars() {
        $pdo = DbService::pdo();

        $s = $pdo->prepare("select starId, name, email, metadata from Star");
        $s->execute();

        return $s->fetchAll(PDO::FETCH_CLASS, 'Star');
    }
}

?>
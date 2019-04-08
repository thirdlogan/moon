<?php

require('db-service.php');
require('../classes/star.php');

class StarService {
    static public function fetchStars($search) {
        $pdo = DbService::pdo();
        $s = $pdo->prepare("select starId, moonUserId, profilePicUri, name, email, metadata from Star");
        
        $s->execute();
        return $s->fetchAll(PDO::FETCH_CLASS, 'Star');
    }

    static public function fetchStar($search) {
        $pdo = DbService::pdo();
        $s = $pdo->prepare("select starId, moonUserId, profilePicUri, name, email, metadata from Star where starId = " . $search->starId);
        
        $s->execute();
        $s->setFetchMode(PDO::FETCH_CLASS, 'Star');

        return $s->fetch();
    }
}

?>
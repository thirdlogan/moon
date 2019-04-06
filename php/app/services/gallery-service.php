<?php

require('db-service.php');
require('../classes/media-type.php');
require('../classes/media-file.php');

class GalleryService {
    static public function fetchMediaTypes() {
        $pdo = DbService::pdo();

        $s = $pdo->prepare("select code, description from MediaType");
        $s->execute();

        return $s->fetchAll(PDO::FETCH_CLASS, 'MediaType');
    }

    static public function fetchRecentMediaFiles() {
        $pdo = DbService::pdo();

        $s = $pdo->prepare("select mediaFileId, starId, uri, thumbUri, dateCreated, typeCode, metadata from MediaFile limit 20");
        $s->execute();
        
        return $s->fetchAll(PDO::FETCH_CLASS, 'MediaFile');
    }
}

?>
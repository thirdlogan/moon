<?php
    require('../services/gallery-service.php');
    require('../services/web-helper-service.php');
    
    $payload = WebHelperService::getPayload();
    $action = $payload->action;
    
    switch ($action) {
        case 'fetch-media-types':
            echo json_encode(GalleryService::fetchMediaTypes());
            break;
        
        case 'fetch-recent-media-files':
            echo json_encode(GalleryService::fetchRecentMediaFiles());
            break;
    }
?>
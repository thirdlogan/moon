<?php
    require('../services/gallery-service.php');
    require('../services/web-helper-service.php');
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    $payload = WebHelperService::getPayload();
    $action = (isset($payload->{'action'}) ? $payload->{'action'} : false);
    $mediaTypeCode = (isset($payload->{'mediaTypeCode'}) ? $payload->{'mediaTypeCode'} : 'pic');
    
    switch ($action) {
        case 'fetch-media-types':
            echo json_encode(GalleryService::fetchMediaTypes());
            break;
        
        case 'fetch-recent-media-files':
            echo json_encode(GalleryService::fetchRecentMediaFiles($mediaTypeCode));
            break;

        default:
            echo '{}';
            break;
    }
?>
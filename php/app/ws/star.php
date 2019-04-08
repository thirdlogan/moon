<?php
    require('../services/star-service.php');
    require('../services/web-helper-service.php');
    
    WebHelperService::setCorsHeaders();

    $payload = WebHelperService::getPayload();
    $action = (isset($payload->{'action'}) ? $payload->{'action'} : false);
    
    switch ($action) {
        case 'fetch-stars':
            echo json_encode(StarService::fetchStars($payload));
            break;

        case 'fetch-star': 
            echo json_encode(StarService::fetchStar($payload));
            break;

        default: 
            echo '{}';
    }
?> 
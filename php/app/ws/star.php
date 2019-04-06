<?php
    require('../services/star-service.php');
    require('../services/web-helper-service.php');
    
    $payload = WebHelperService::getPayload();
    $action = $payload->action;
    
    switch ($action) {
        case 'fetch-stars':
            echo json_encode(StarService::fetchStars());
            break;
    }
?> 
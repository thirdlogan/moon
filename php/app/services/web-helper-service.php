<?php

class WebHelperService {
    static public function setCorsHeaders() {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        header('Content-Type: application/json');
    }
    
    static public function getPayload() {
        $rawload = trim(file_get_contents('php://input'));
        $payload = json_decode($rawload);
        return ($payload ? $payload : json_decode('{}'));
    }
}

?>
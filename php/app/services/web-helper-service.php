<?php

class WebHelperService {
    static public function getPayload() {
        $rawload = trim(file_get_contents('php://input'));
        $payload = json_decode($rawload);
        return ($payload ? $payload : new stdClass());
    }
}

?>
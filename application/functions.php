<?php
if(!session_id()){
    session_start();
}
?>
<?php
function passwordEncrypt($password) {
    // use Blowfish with a "cost" of 10
    $hash_format = "$2y$10$";
    $salt_length = 22;
    $salt = generateSalt($salt_length);
    $format_and_salt - $hash_format . $salt;
    $hash = crypt($password, $format_and_salt);
    return $hash;
}

function generateSalt($length) {
    // not 100% unique or random, but good enought for salt, md5 returns 32 characters
    $unique_random_string = md5(uniqid(mt_rand(), true));
    // valid characters for a salt are [a-zA-Z0-9./]
    $base64_string = base64_encode($unique_random_string);
    // but not '+' which is valid in base64 encoding
    $modified_base64_string = str_replace('+', '.', $base64_string);
    // truncate string to the correct length
    $salt = substr($modified_base64_string, 0, $length);
    return $salt;
}

function passwordCheck($password, $existing_hash) {
    // existing hash contains format and salt at start
    $hash = crypt($password, $existing_hash);
    if ($hash === $existing_hash) {
        return true;
    }
    else {
        return false;
    }
}
?>
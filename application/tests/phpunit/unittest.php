<?php
require_once "../../functions.php";

// This unit test file tests the functions in functions.php in the application folder

class UnitTest extends PHPUnit_Framework_TestCase
{
    public function testGenerateSalt() {
        // each salt is unique, so we test length of salt generated
        $this->assertEquals(22, strlen(generateSalt(22)));
        $this->assertEquals(1, strlen(generateSalt(1)));
        $this->assertEquals(0, strlen(generateSalt(0)));
        $this->assertEquals(40, strlen(generateSalt(40)));
        // test that no two salts are identical
        $this->assertFalse(generateSalt(22) == generateSalt(22));
        $this->assertFalse(generateSalt(4) == generateSalt(4));
        // salts of length 0 are identical
        $this->assertEquals(generateSalt(0), generateSalt(0));
    }

    public function testPasswordEncrypt() {
        // each password encryption is unique, ensure that each is 60 characters long
        $this->assertEquals(60, strlen(passwordEncrypt("password")));
        $this->assertEquals(60, strlen(passwordEncrypt("hello")));
        $this->assertEquals(60, strlen(passwordEncrypt("1234")));
        $this->assertEquals(60, strlen(passwordEncrypt("sljkf8j9p4fjw3oj")));
        $this->assertEquals(60, strlen(passwordEncrypt("")));
        // test that no two encryptions are identical
        $this->assertFalse(passwordEncrypt("hello") == passwordEncrypt("hello"));
        $this->assertFalse(passwordEncrypt("password123") == passwordEncrypt("password123"));
    }

    // passwordCheck cannot be tested without the existing hash, which exists in the database
    // therefore we cannot write unit tests for passwordCheck
}
?>

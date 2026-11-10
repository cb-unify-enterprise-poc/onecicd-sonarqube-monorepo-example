package com.example.onecicd.api;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class GreetingServiceTest {

    private final GreetingService service = new GreetingService();

    @Test
    void greetsByName() {
        assertEquals("Hello, Ada!", service.greet("ada"));
    }

    @Test
    void trimsWhitespace() {
        assertEquals("Hello, Grace!", service.greet("  grace  "));
    }

    @Test
    void fallsBackToDefaultForBlankInput() {
        assertEquals("Hello, World!", service.greet(" "));
        assertEquals("Hello, World!", service.greet(null));
    }
}

package com.example.onecicd.api;

import org.apache.commons.lang3.StringUtils;

/** Tiny service used to give the SonarQube scan real Java code to analyze. */
public class GreetingService {

    private static final String DEFAULT_NAME = "World";

    public String greet(String name) {
        if (StringUtils.isBlank(name)) {
            return "Hello, " + DEFAULT_NAME + "!";
        }
        return "Hello, " + StringUtils.capitalize(name.trim()) + "!";
    }
}

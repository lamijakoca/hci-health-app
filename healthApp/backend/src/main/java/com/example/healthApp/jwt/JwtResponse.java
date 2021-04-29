package com.example.healthApp.jwt;

import java.io.Serializable;

public class JwtResponse implements Serializable {
    private String jwttoken;

    public JwtResponse() {
    }

    public JwtResponse(String jwttoken) {
        this.jwttoken = jwttoken;
    }

    public String getJwttoken() {
        return jwttoken;
    }
}

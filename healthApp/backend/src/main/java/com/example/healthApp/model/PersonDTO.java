package com.example.healthApp.model;

import java.util.Date;

public class PersonDTO {
    private String email;
    private String username;
    private String password;
    private String gender;
    private Float weight;
    private Float height;
    private Date dob;
    private Float water_goal;
    private Float sleep_goal;
    private Long steps_goal;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Float getWeight() {
        return weight;
    }

    public void setWeight(Float weight) {
        this.weight = weight;
    }

    public Float getHeight() {
        return height;
    }

    public void setHeight(Float height) {
        this.height = height;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public Float getWater_goal() {
        return water_goal;
    }

    public void setWater_goal(Float water_goal) {
        this.water_goal = water_goal;
    }

    public Float getSleep_goal() {
        return sleep_goal;
    }

    public void setSleep_goal(Float sleep_goal) {
        this.sleep_goal = sleep_goal;
    }

    public Long getSteps_goal() {
        return steps_goal;
    }

    public void setSteps_goal(Long steps_goal) {
        this.steps_goal = steps_goal;
    }
}

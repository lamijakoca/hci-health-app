package com.example.healthApp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Email cannot be blank")
    private String email;

    @NotBlank (message = "Username cannot be blank")
    @Size(min = 3, max = 255, message = "Your username cannot be less than 3 character")
    private String username;

    @NotBlank (message = "Please enter a valid password")
    @Size(min = 8, message = "Your message cannot be less than 8 characters")
    private String password;

    @NotBlank (message = "Please specify your gender")
    private String gender;

    private Float weight;
    private Float height;
    private Date dob;
    private Float water_goal;
    private Float sleep_goal;
    private Long steps_goal;

    public Person() {
    }

    public Person(Long id,
                  @NotBlank(message = "Email cannot be blank") String email,
                  @NotBlank (message = "Username cannot be blank") @Size(min = 3, max = 255, message = "Your username cannot be less than 3 character") String username,
                  @NotBlank (message = "Please enter a valid password") @Size(min = 8, message = "Your message cannot be less than 8 characters") String password,
                  @NotBlank (message = "Please specify your gender") String gender,
                  Float weight,
                  Float height,
                  Date dob,
                  Float water_goal,
                  Float sleep_goal,
                  Long steps_goal) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.dob = dob;
        this.water_goal = water_goal;
        this.sleep_goal = sleep_goal;
        this.steps_goal = steps_goal;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

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

package com.example.healthApp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Day {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idPerson;
    private Date date;
    private Double steps;
    private Double hoursOfSleep;
    private Double calories;

    public Day() {
    }

    public Day(Long idPerson, Date date, Double steps, Double hoursOfSleep, Double calories) {
        this.idPerson = idPerson;
        this.date = date;
        this.steps = steps;
        this.hoursOfSleep = hoursOfSleep;
        this.calories = calories;
    }

    public Long getIdPerson() {
        return idPerson;
    }

    public void setIdPerson(Long idPerson) {
        this.idPerson = idPerson;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Double getSteps() {
        return steps;
    }

    public void setSteps(Double steps) {
        this.steps = steps;
    }

    public Double getHoursOfSleep() {
        return hoursOfSleep;
    }

    public void setHoursOfSleep(Double hoursOfSleep) {
        this.hoursOfSleep = hoursOfSleep;
    }

    public Double getCalories() {
        return calories;
    }

    public void setCalories(Double calories) {
        this.calories = calories;
    }
}

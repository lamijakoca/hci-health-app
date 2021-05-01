package com.example.healthApp.repository;

import com.example.healthApp.model.Person;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface PersonRepository extends CrudRepository<Person, Long> {
    Optional<Person> findByEmail(String email);
    Person findByUsername(String username);
}

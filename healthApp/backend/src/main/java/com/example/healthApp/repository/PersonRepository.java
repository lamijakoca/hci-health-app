package com.example.healthApp.repository;

import com.example.healthApp.model.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PersonRepository extends PagingAndSortingRepository<Person, Long> {
    Person findByUsername(String username);
    List<Person> findPersonByUsername(@Param("username") String username);
}

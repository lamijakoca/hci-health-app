package com.example.healthApp.controller;

import com.example.healthApp.model.Message;
import com.example.healthApp.model.Person;
import com.example.healthApp.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class PersonController {
    PersonRepository personRepository;
//    BCryptPasswordEncoder bCryptPasswordEncoder;


    @Autowired
    public PersonController(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @GetMapping("/helloworld")
    public Message helloWorld(){
        return new Message("Hello!");
    }

    @GetMapping("/users")
    public List<Person> getAll(){
        return (List<Person>) personRepository.findAll();
    }

    @GetMapping("/user/{id}")
    ResponseEntity<?> displayUserById(@PathVariable Long id){
        Optional<Person> person = personRepository.findById(id);
        return person.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/user/{id}")
    public Message deleteUser(@PathVariable Long id){
        personRepository.deleteById(id);
        return new Message("Deleted!");
    }

    @PutMapping("/user/{id}")
    public Message updateUser(@Valid @RequestBody Person person){
        personRepository.save(person);
        return new Message("Successfully updated!");
    }
}

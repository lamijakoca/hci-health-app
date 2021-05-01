package com.example.healthApp.jwt;

import com.example.healthApp.model.Person;
import com.example.healthApp.model.PersonDTO;
import com.example.healthApp.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        Person person = personRepository.findByUsername(username);
        if (person == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        else{
            return new User(person.getUsername(), person.getPassword(), new ArrayList<>());
        }
    }

    public Person save(PersonDTO person){
        Person newPerson = new Person();
        newPerson.setEmail(person.getEmail());
        newPerson.setUsername(person.getUsername());
        newPerson.setPassword(bcryptEncoder.encode(person.getPassword()));
        newPerson.setGender(person.getGender());
        newPerson.setWeight(person.getWeight());
        newPerson.setHeight(person.getHeight());
        newPerson.setDob(person.getDob());
        newPerson.setWater_goal(person.getWater_goal());
        newPerson.setSleep_goal(person.getSleep_goal());
        newPerson.setSteps_goal(person.getSteps_goal());
        return personRepository.save(newPerson);
    }
}

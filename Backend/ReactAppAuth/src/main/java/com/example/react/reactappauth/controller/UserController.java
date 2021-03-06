package com.example.react.reactappauth.controller;

import com.example.react.reactappauth.model.User;
import com.example.react.reactappauth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ReactApp")
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @GetMapping("/Users")
    public List<User> fetchUsers(){
        return userRepository.findAll();
    }
    @PostMapping("/Users")
    public  User AddUser(@RequestBody User user){
     return userRepository.save(user);
    }
    @GetMapping("/Users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Utilisateur n'existe pas"+id));
        return ResponseEntity.ok(user);
    }
}

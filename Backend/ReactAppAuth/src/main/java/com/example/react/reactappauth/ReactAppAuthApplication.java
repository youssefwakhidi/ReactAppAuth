package com.example.react.reactappauth;

import com.example.react.reactappauth.model.User;
import com.example.react.reactappauth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReactAppAuthApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(ReactAppAuthApplication.class, args);
    }
    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        /*User user1= User.builder()
                .firstname("youssef")
                .lastname("Wakhidi")
                .email("youssefasq@gmail.com")
                .build();

        User user2= User.builder()
                .firstname("youness")
                .lastname("Wakhidi")
                .email("younessasq@gmail.com")
                .build();

        userRepository.save(user1);
        userRepository.save(user2);*/
    }
}

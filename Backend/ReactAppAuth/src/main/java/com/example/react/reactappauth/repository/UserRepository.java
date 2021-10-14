package com.example.react.reactappauth.repository;

import com.example.react.reactappauth.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}

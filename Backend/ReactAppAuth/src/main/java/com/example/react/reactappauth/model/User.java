package com.example.react.reactappauth.model;

import lombok.*;

import javax.persistence.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="first_name",nullable = false)
    private String firstname;
    @Column(name="last_name")
    private String lastname;
    @Column(name="email")
    private String email;
    @Column(name="password")
    private String password;
}

package br.com.purocodigo.encuestabackend.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import br.com.purocodigo.encuestabackend.entities.UserEntity;
import br.com.purocodigo.encuestabackend.models.requests.UserRegisterRequestModel;

public interface UserService extends UserDetailsService {

    public UserDetails loadUserByUsername(String email);

    // public UserEntity getUser(String email);

    public UserEntity createUser(UserRegisterRequestModel user);
}

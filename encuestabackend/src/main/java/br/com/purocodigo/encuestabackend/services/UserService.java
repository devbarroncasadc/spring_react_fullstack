package br.com.purocodigo.encuestabackend.services;

import br.com.purocodigo.encuestabackend.entities.UserEntity;
import br.com.purocodigo.encuestabackend.models.requests.UserRegisterRequestModel;

public interface UserService {

    public UserEntity createUser(UserRegisterRequestModel user);

}

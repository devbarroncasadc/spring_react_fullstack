package br.com.purocodigo.encuestabackend.controllers;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.purocodigo.encuestabackend.entities.UserEntity;
import br.com.purocodigo.encuestabackend.models.requests.UserRegisterRequestModel;
import br.com.purocodigo.encuestabackend.models.responses.UserRest;
import br.com.purocodigo.encuestabackend.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    // POST, GET, PUT, DELETE, PATCH

    @Autowired
    UserService userService;

    @PostMapping
    public UserRest createUser(@Valid @RequestBody UserRegisterRequestModel userModel) {

        UserEntity user = userService.createUser(userModel);

        UserRest userRest = new UserRest();

        BeanUtils.copyProperties(user, userRest);

        return userRest;
    }

    @GetMapping
    public UserRest getUser(Authentication authentication) {
        UserEntity user = userService.getUser(
                authentication.getPrincipal().toString());

        UserRest userRest = new UserRest();

        BeanUtils.copyProperties(user, userRest);

        return userRest;
    }

}

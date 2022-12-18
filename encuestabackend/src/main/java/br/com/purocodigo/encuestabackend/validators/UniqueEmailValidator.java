package br.com.purocodigo.encuestabackend.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import br.com.purocodigo.encuestabackend.annotations.UniqueEmail;
import br.com.purocodigo.encuestabackend.entities.UserEntity;
import br.com.purocodigo.encuestabackend.repositories.UserRepository;

public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {

    @Autowired
    UserRepository userRepository;

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {

        UserEntity user = userRepository.findByEmail(value);

        if (user == null) {
            return true;
        }

        return false;

    }

}

package br.com.purocodigo.encuestabackend.models.requests;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import br.com.purocodigo.encuestabackend.annotations.UniqueEmail;
import lombok.Data;

@Data
public class UserRegisterRequestModel {

    @NotNull
    private String name;

    @NotNull
    @Email
    @UniqueEmail
    private String email;

    @NotNull
    @Size(min = 6, max = 60)
    private String password;

}

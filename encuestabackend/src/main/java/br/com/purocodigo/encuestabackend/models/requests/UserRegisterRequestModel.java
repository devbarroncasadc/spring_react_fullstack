package br.com.purocodigo.encuestabackend.models.requests;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import br.com.purocodigo.encuestabackend.annotations.UniqueEmail;
import lombok.Data;

@Data
public class UserRegisterRequestModel {

    @NotEmpty
    private String name;

    @NotEmpty
    @Email
    @UniqueEmail
    private String email;

    @NotEmpty
    @Size(min = 6, max = 60)
    private String password;

}

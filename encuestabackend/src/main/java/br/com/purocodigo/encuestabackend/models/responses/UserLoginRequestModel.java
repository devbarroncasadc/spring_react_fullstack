package br.com.purocodigo.encuestabackend.models.responses;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserLoginRequestModel {

    @NotEmpty
    @Email
    private String email;

    @NotEmpty
    private String password;

}

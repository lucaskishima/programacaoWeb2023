package com.example.cardapio.user;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "usuario")
@Entity(name = "usuario")
@Getter
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;
    public Usuario(UsuarioRequestDTO data) {
        this.name = data.name();
        this.email = data.email();
    }

    public void updateFromDTO(UsuarioRequestDTO updatedData) {

        this.name = updatedData.name();
        this.email = updatedData.email();
    }


}

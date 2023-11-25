package com.example.cardapio.user;
import com.example.cardapio.user.Usuario;

public record UsuarioResponseDTO(Long id, String name, String email) {
    public UsuarioResponseDTO(Usuario usuario) {
        this(usuario.getId(), usuario.getName(), usuario.getEmail());
    }

}
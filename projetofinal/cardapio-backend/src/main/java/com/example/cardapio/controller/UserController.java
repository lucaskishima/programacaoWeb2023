package com.example.cardapio.controller;

import com.example.cardapio.user.Usuario;
import com.example.cardapio.user.UsuarioRepository;
import com.example.cardapio.user.UsuarioRequestDTO;
import com.example.cardapio.user.UsuarioResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("login")
public class UserController {

    @Autowired
    private UsuarioRepository repository;
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveUsuario(@RequestBody UsuarioRequestDTO data){
        Usuario userData = new Usuario(data);
        repository.save(userData);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<UsuarioResponseDTO> getAll(){

        return repository.findAll().stream().map(UsuarioResponseDTO::new).toList();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{userId}")
    public void updateUser(@PathVariable Long userId, @RequestBody UsuarioRequestDTO updatedUserData) {
        Usuario existingUser = repository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));

        existingUser.updateFromDTO(updatedUserData);

        repository.save(existingUser);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        if (!repository.existsById(userId)) {
            throw new IllegalArgumentException("User not found with id: " + userId);
        }

        repository.deleteById(userId);
    }

}

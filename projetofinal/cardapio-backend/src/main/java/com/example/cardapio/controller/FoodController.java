package com.example.cardapio.controller;


import com.example.cardapio.food.Food;
import com.example.cardapio.food.FoodRepository;
import com.example.cardapio.food.FoodRequestDTO;
import com.example.cardapio.food.FoodResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("food")
public class FoodController {

    @Autowired
    private FoodRepository repository;
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveFood(@RequestBody FoodRequestDTO data){
        Food foodData = new Food(data);
        repository.save(foodData);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<FoodResponseDTO> getAll(){

        return repository.findAll().stream().map(FoodResponseDTO::new).toList();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{foodId}")
    public void updateFood(@PathVariable Long foodId, @RequestBody FoodRequestDTO updatedFoodData) {
        Food existingUser = repository.findById(foodId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + foodId));

        existingUser.updateFromDTO(updatedFoodData);

        repository.save(existingUser);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{foodId}")
    public void deleteFood(@PathVariable Long foodId) {
        if (!repository.existsById(foodId)) {
            throw new IllegalArgumentException("User not found with id: " + foodId);
        }

        repository.deleteById(foodId);
    }
}
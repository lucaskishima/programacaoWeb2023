package com.example.cardapio.food;

import com.example.cardapio.user.UsuarioRequestDTO;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "food")
@Entity(name = "food")
@Getter
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String image;

    private Integer price;

    public Food(FoodRequestDTO data) {
        this.title = data.title();
        this.image = data.image();
        this.price = data.price();
    }

    public void updateFromDTO(FoodRequestDTO updatedFoodData) {

        this.title = updatedFoodData.title();
        this.image = updatedFoodData.image();
        this.price = updatedFoodData.price();
    }
}
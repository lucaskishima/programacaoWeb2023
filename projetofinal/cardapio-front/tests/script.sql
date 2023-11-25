DROP TABLE food;

CREATE TABLE food (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    image VARCHAR(255),
    price INTEGER
);
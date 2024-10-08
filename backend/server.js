// server.js (or app.js)
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import UserRoutes from './Routes/userRoutes.js';
dotenv.config();

const app = express();

const recipesArray = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      ingredients: [
        "Spaghetti",
        "Minced Beef",
        "Tomato Sauce",
        "Onion",
        "Garlic",
        "Olive Oil",
        "Salt",
        "Pepper",
        "Parmesan"
      ],
      instructions: "Cook the spaghetti. In a pan, sauté onions and garlic, add minced beef, cook until brown. Add tomato sauce, season, and let it simmer. Serve with spaghetti and sprinkle Parmesan on top.",
      imageUrl: "https://example.com/images/spaghetti.jpg",
      category: "Dinner",
      prepTime: "15 mins",
      cookTime: "30 mins",
      likes: 120,
      comments: [
        { user: "John", comment: "Delicious!", date: "2024-09-28" },
        { user: "Jane", comment: "My family loved it!", date: "2024-09-29" }
      ]
    },
    {
      id: 2,
      title: "Chicken Curry",
      ingredients: [
        "Chicken",
        "Coconut Milk",
        "Curry Paste",
        "Onion",
        "Ginger",
        "Garlic",
        "Cilantro",
        "Rice"
      ],
      instructions: "Cook the chicken. Sauté onions, garlic, and ginger, add curry paste, and stir. Add coconut milk and let it simmer. Serve with rice and garnish with cilantro.",
      imageUrl: "https://example.com/images/chicken-curry.jpg",
      category: "Lunch",
      prepTime: "20 mins",
      cookTime: "40 mins",
      likes: 250,
      comments: [
        { user: "Alice", comment: "Best curry I've made!", date: "2024-09-25" },
        { user: "Bob", comment: "Easy to follow recipe.", date: "2024-09-26" }
      ]
    },
    {
      id: 3,
      title: "Chocolate Cake",
      ingredients: [
        "Flour",
        "Cocoa Powder",
        "Sugar",
        "Eggs",
        "Butter",
        "Baking Powder",
        "Vanilla Extract",
        "Milk",
        "Chocolate"
      ],
      instructions: "Preheat the oven. Mix dry ingredients in one bowl, wet ingredients in another. Combine and pour into a baking tin. Bake for 30 minutes. Let cool and add melted chocolate on top.",
      imageUrl: "https://example.com/images/chocolate-cake.jpg",
      category: "Dessert",
      prepTime: "10 mins",
      cookTime: "30 mins",
      likes: 340,
      comments: [
        { user: "Mark", comment: "So rich and moist!", date: "2024-09-20" },
        { user: "Lucy", comment: "Perfect for birthdays!", date: "2024-09-21" }
      ]
    }
  ];
  

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("Error connecting to MongoDB:", error));


// ALL ROUTES
app.use('/api/users', UserRoutes)

// Example API route
// Create an endpoint for fetching recipes
app.get('/recipes', (req, res) => {
    res.json({ recipes: recipesArray });
  });

// Example route
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const router = express.Router();
const cardModel = require('../models/cardModel'); // Ensure this path is correct

// Create a new card
router.post('/', async (req, res) => {
  try {
    const { title, description, link } = req.body;
    await cardModel.createCard({ title, description, link });
    res.status(201).send('Card created');
  } catch (error) {
    res.status(500).send('Error creating card');
  }
});

// Get all cards
router.get('/', async (req, res) => {
  try {
    const cards = await cardModel.getAllCards();
    res.json(cards);
  } catch (error) {
    res.status(500).send('Error retrieving cards');
  }
});
// In your cardRoutes file
// Add this route for searching cards by title
router.get('/search', async (req, res) => {
  const { title } = req.query;
  try {
    const cards = await cardModel.getCardByTitle(title);
    res.json(cards);
  } catch (error) {
    res.status(500).send('Error searching cards');
  }
});

// Get a specific card by title
router.get('/:title', async (req, res) => {
  try {
    const card = await cardModel.getCardByTitle(req.params.title);
    if (card) {
      res.json(card);
    } else {
      res.status(404).send('Card not found');
    }
  } catch (error) {
    res.status(500).send('Error retrieving card');
  }
});

module.exports = router;

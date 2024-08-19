const db = require('./db');

const createCard = async (card) => {
  const { title, description, link } = card;
  try {
    const result = await db.one('INSERT INTO cards(title, description, link) VALUES($1, $2, $3) RETURNING *', [title, description, link]);
    return result;
  } catch (error) {
    throw new Error('Error creating card');
  }
};

const getAllCards = async () => {
  try {
    const result = await db.any('SELECT * FROM cards');
    return result;
  } catch (error) {
    throw new Error('Error retrieving cards');
  }
};

const getCardByTitle = async (title) => {
  try {
    const result = await db.oneOrNone('SELECT * FROM cards WHERE title = $1', [title]);
    return result;
  } catch (error) {
    throw new Error('Error retrieving card');
  }
};

module.exports = {
  createCard,
  getAllCards,
  getCardByTitle
};

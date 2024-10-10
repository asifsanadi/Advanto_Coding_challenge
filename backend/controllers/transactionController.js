const axios = require('axios');

const seedDatabase = async (req, res) => {
  try {
    const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    await Transaction.insertMany(data);
    res.status(200).send('Database seeded successfully');
  } catch (error) {
    res.status(500).send('Error seeding database');
  }
};

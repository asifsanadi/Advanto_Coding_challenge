const express = require('express');
const { seedDatabase, listTransactions, getStatistics, getBarChartData, getPieChartData, getCombinedData } = require('../controllers/transactionController');
const router = express.Router();

// Define routes
router.get('/seed', seedDatabase);
router.get('/', listTransactions);
router.get('/statistics', getStatistics);
router.get('/barchart', getBarChartData);
router.get('/piechart', getPieChartData);
router.get('/combined', getCombinedData);

module.exports = router;

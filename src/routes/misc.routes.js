const express = require('express');
const miscController = require('../controllers/misc.controller');
const { authenticateToken } = require('../middlewares/auth');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

// Quotes 랜덤 명언
router.get('/quotes', authenticateToken, asyncHandler(miscController.getQuote));

// Calendar-Icon
router.get('/calendarIcon', authenticateToken, asyncHandler(miscController.getCalendarIcon));
router.post('/calendarIcon', authenticateToken, asyncHandler(miscController.createCalendarIcon));
router.patch('/calendarIcon/:iconId', authenticateToken, asyncHandler(miscController.patchCalendarIcon));
router.delete('/calendarIcon/:iconId', authenticateToken, asyncHandler(miscController.deleteCalendarIcon));
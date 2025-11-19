const express = require('express');
const chatController = require('../controllers/chat.controller');
const { authenticateToken } = require('../middlewares/auth');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

router.get('/chatHistory/:receiverId', authenticateToken, asyncHandler(chatController.getChatHistory));
router.post('/saveMessage', authenticateToken, asyncHandler(chatController.saveMessage));
router.post('/chatRoom', authenticateToken, asyncHandler(chatController.createChatRoom));
router.get('/chatRooms/:friendId', authenticateToken, asyncHandler(chatController.getChatRooms));

module.exports = router;
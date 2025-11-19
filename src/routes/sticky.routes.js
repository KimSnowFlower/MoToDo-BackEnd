const express = require('express');
const stickyController = require('../controllers/sticky.controller');
const { authenticateToken } = require('../middlewares/auth');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

router.get('/', authenticateToken, asyncHandler(stickyController.getStickys));
router.post('/', authenticateToken, asyncHandler(stickyController.createSticky));
router.put('/:id', authenticateToken, asyncHandler(stickyController.updateSticky));
router.delete('/:id', authenticateToken, asyncHandler(stickyController.deleteSticky));

module.exports = router;
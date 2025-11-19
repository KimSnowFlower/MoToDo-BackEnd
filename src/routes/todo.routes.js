const express = reuqire("express");
const todoController = require('../controllers/todo.controller');
const { authenticateToken } = require('../middlewares/auth');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

router.get('/', authenticateToken, asyncHandler(todoController.getTodos));
router.post('/', authenticateToken, asyncHandler(todoController.createTodo));
router.patch('/:id', authenticateToken, asyncHandler(todoController.patchTodo));
router.delete('/:id', authenticateToken, asyncHandler(todoController.deleteTodo));

module.exports = router;
const db = require('../config/db');

async function findByGroup(groupId) {
    const sql = 'SELECT id, group_id, user_id, content, completed FROM group_todos WHERE group_id = ?';
    const [rows] = await db.query(sql, [groupId]);

    return rows;
}

async function createGroupTodo({ groupId, userId, content, completed }) {
    const sql = `
        INSERT INTO group_todos (group_id, user_id, content, completed, created_at, updated_at)
        VALUES (?, ?, ?, ?, NOW(), NOW())
    `;
    const [result] = await db.query(sql, [groupId, userId, content, completed]);

    return {
        id: result.insertId,
        groupId,
        userId,
        content,
        completed,
    };
}

async function deleteGroupTodo(id) {
    const sql = 'DELETE FROM group_todos WHERE id = ?';
    const [result] = await db.query(sql, [id]);

    return result;
}

async function updateCompleted(id, completed) {
    sql = 'UPDATE group_todos SET completed = ?, updated_at = NOW() WHERE id = ?';
    const [result] = await db.query(sql, [completed, id]);

    return result;
}

module.exports = {
    findByGroup,
    createGroupTodo,
    deleteGroupTodo,
    updateCompleted,
};
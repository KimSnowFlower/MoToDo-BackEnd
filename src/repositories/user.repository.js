const db = require('../config/db');

async function createUser({ name, age, studentId, department, username, password }) {
    const sql = `
        INSERT INTO users (name, age, student_id, department, username, password)
        VALUES (?, ?, ?, ?, ?, ?)
        `;

    const [result] = await db.query(sql, [name, age, studentId, department, username, password]);

    return result.insertId;
}

async function findByUsername(username) {
    const sql = 'SELECT * FROM users WHERE username = ?';
    const [rows] = await db.query(sql, [username]);

    return rows[0] || null;
}

async function findById(id) {
    const sql = 'SELECT id, name, student_id FROM users WHERE id = ?';
    const [rows] = await db.query(sql, [id]);

    return rows[0] || null;
}

module.exports = {
    createUser,
    findByUsername,
    findById,
};
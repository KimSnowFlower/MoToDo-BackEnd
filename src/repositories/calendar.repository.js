const db = require('../config/db');

async function findByUserAndMonth(userId, month) {
    const sql ='SELECT * FROM calendar WHERE user_id =? AND MONTH(start_date) = ?';
    const [rows] = await db.query(sql, [userId, month]);

    return rows;
}

async function findByUser(userId) {
    const sql = 'SELECT * FROM calendar WHERE user_id = ?';
    const [rows] = await db.query(sql, [userId]);

    return rows;
}

async function createEvent(event) {
    const sql = `
        INSERT INTO calendar (user_id, title, description, start_date, end_date, all_day, color, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
    `;

    const [result] = await db.query(sql, [
        event.userId,
        event.title,
        event.description,
        event.start_date,
        event.end_date,
        event.all_day,
        event.color,
    ]);

    return result;
}

async function updateEvent(id, data) {
    const sql = `
        UPDATE calendar
        SET title = ?, description = ?, start_date = ?, end_date = ?, all_day = ?, color = ?, updated_at = NOW(),
        WHERE id = ?
    `

    const [result] = await db.query(sql, [
        data.title,
        data.description,
        data.start_Date,
        data.end_date,
        data.all_day,
        data.color,
        id,
    ]);

    return result;
}

async function deleteEvent(id, userId) {
    const sql = 'DELETE FROM calendar WHERE id = ? AND user_id = ?';
    const [result] = await db.query(sql, [id, userId]);

    return result;
}

module.exports = {
    findByUserAndMonth,
    findByUser,
    createEvent,
    updateEvent,
    deleteEvent,
};
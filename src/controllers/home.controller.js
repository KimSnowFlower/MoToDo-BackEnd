const calendarRepo = require('../repositories/calendar.repository');
const stickyRepo = require('../repositories/sticky.repository');

async function getHomeData(req, res) {
    const userId = req.user.id;
    const currentMonth = new Date().getMonth() + 1;

    const [calendar, sticky] = await Promise.all([
        calendarRepo.findByUserAndMonth(userId, currentMonth),
        stickyRepo.findByUser(userId),
    ]);

    res.json({ calendar, sticky });
}

module.exports = { getHomeData };
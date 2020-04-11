const db = require('../database/connection');

module.exports = {
    async get(req, res) {
        const ong_id = req.headers.authorization;

        const incidents = await db('incidents')
            .where('ong_id', ong_id)
            .select('*');

        res.json(incidents);
    }
}
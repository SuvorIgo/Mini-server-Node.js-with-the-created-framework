const db = require('../../db');

class GenreController {
    async createGenre(req, res) {
        const {name, id_film} = req.body;

        const newGenre = await db.query("INSERT INTO genres(name, id_film) VALUES ($1, $2) RETURNING *", [name, id_film]);

        res.send(newGenre.rows[0]);
    }

    async getGenre(req, res) {
        let genres;

        if(req.params.id) {
            const genre_id = req.params.id;
            genres = await db.query("SELECT * FROM genres WHERE genre_id = $1", [genre_id]);
        }

        else {
            genres = await db.query("SELECT * FROM genres");
        }

        res.send(genres.rows);
    }

    async updateGenre(req, res) {
        const {genre_id, name, id_film} = req.body;

        const genre = await db.query("UPDATE genres SET name = $1, id_film = $2 WHERE genre_id = $3 RETURNING *", [name, id_film, genre_id]);
        res.send(genre.rows[0]);
    }

    async deleteGenre(req, res) {
        const genre_id = req.params.id;

        const genre = await db.query("DELETE FROM genres WHERE genre_id = $1", [genre_id]);
        res.send(genre.rows[0]);
    }
}

module.exports = new GenreController();
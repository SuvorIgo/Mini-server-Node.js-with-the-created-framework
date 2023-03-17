const db = require('../../db');
const fs = require('fs');
const path = require('path');

class FilmController {
    async createFilm(req, res) {
        const {name, year_prod} = req.body;

        const newFilm = await db.query("INSERT INTO films(name, year_prod) VALUES ($1, $2) RETURNING *", [name, year_prod]);

        res.send(newFilm.rows[0]);
    }

    async getFilm(req, res) {
        let films;

        if(req.params.id) {
            const film_id = req.params.id;
            films = await db.query("SELECT * FROM Films WHERE film_id = $1", [film_id]);
        }

        else {
            films = await db.query("SELECT * FROM films");
        }

        res.send(films.rows);
    }

    async updateFilm(req, res) {
        const {film_id, name, year_prod} = req.body;

        const film = await db.query("UPDATE Films SET name = $1, year_prod = $2 WHERE film_id = $3 RETURNING *", [name, year_prod, film_id]);

        res.send(film.rows[0]);
    }

    async deleteFilm(req, res) {
        const film_id = req.params.id;

        const film = await db.query("DELETE FROM Films WHERE film_id = $1", [film_id]);

        res.send(film.rows[0]);
    }

    getPage404(req, res) {
        const pathToFile = path.join(__dirname, '../../src/pages/errors/404.html');

        fs.readFile(pathToFile, (err, data) => {
            if (err) throw err;
            else res.end(data);
        })
    }
}

module.exports = new FilmController();